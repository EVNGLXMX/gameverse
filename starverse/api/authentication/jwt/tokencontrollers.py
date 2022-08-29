from sqlalchemy import select, delete
from starlette.authentication import AuthenticationError
from datetime import datetime, timedelta
from dotenv import load_dotenv
import jwt, os
from api.users.usercontrollers import Users
from api.dbsession import DBSession
from api.authentication.jwt.tokenmodels import tokens

session = DBSession.session
load_dotenv()
secret = os.getenv('SECRET_KEY')

class AccessToken:   
          
    def generate(username :str, user_id :str) -> str:
        DBSession.Base.metadata.create_all(DBSession.engine)
        now = datetime.utcnow()
        payload = {
            "username" : username,
            "iat" : now,
            "exp" : (now + timedelta(minutes=5))
        }
        access_token = jwt.encode(payload, secret, algorithm="HS256")
        
        with session:
            new_token = tokens(
                token = access_token,
                user_id = user_id,
                iat = now,
                exp = (now + timedelta(minutes=5))
            )
            session.add(new_token)
            session.commit()
        return access_token
    
    def revoke(user_id:str):
        query = session.query(tokens).filter(tokens.user_id==user_id).first()
        if query:
            session.delete(query)
            session.commit()
        return
    
    def get(user_id:str)-> str:
        query = select(tokens.token).where(tokens.user_id==user_id)
        token = session.scalars(query).first()
        return token
    
    def verify(token:str) -> str:
        expired = False
        auth = False
        try:
            jwt.decode(token, secret, algorithms="HS256")
        except jwt.ExpiredSignatureError:
            raise AuthenticationError('SESSION EXPIRED, LOG IN AGAIN')
        except jwt.exceptions.DecodeError:
            raise AuthenticationError('INVALID TOKEN')
        
        decoded = jwt.decode(token, secret, algorithms="HS256", options={"verify_exp":False})
        username = decoded['username']
        user = Users.search(username)
        if not user:
            raise AuthenticationError('INVALID TOKEN')
        if user.role == "admin":
            auth = True
        return expired, username, auth
        