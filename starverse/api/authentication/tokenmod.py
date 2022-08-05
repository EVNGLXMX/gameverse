from sqlalchemy import Column, Integer, String, create_engine, select, delete
from sqlalchemy.orm import declarative_base, Session
from datetime import datetime, timedelta
from dotenv import load_dotenv
import jwt, os

Base = declarative_base()
engine = create_engine('sqlite:///gbdb')
session = Session(engine)
now = datetime.utcnow()

class tokens(Base):
    __tablename__ = 'tokens'
    id = Column (Integer,primary_key=True)
    token = Column (String)
    user_id = Column (Integer)
    iat = Column (String)
    exp = Column (String)
    
    def __repr__(self) -> str:
        return f"tokens(id={self.id!r}, token={self.token!r}, user_id={self.user_id!r}, iat={self.iat!r} exp={self.exp!r}"

class AccessToken:   
          
    def generate(username :str, user_id :str) -> str:
        Base.metadata.create_all(engine)
        load_dotenv()
        secret = os.getenv('SECRET_KEY')
        
        payload = {
            "username" : username,
            "iat" : now.timestamp(),
            "exp" : (now + timedelta(minutes=5)).timestamp(),
        }
        access_token = jwt.encode(payload=payload, key=secret, algorithm='HS256')
        
        with session:
            new_token = tokens(
                token = access_token,
                user_id = user_id,
                iat = now,
                # exp = (now + timedelta(minutes=0)).timestamp(),
                exp = now.timestamp(),
            )
            session.add(new_token)
            session.commit()
        return access_token
    
    def revoke(user_id:str):
        query = session.query(tokens).filter(tokens.user_id==user_id).first()
        session.delete(query)
        session.commit()
        return
    
    def get(user_id:str)-> str:
        query = select(tokens.token).where(tokens.user_id==user_id)
        token = session.scalars(query).first()
        return token
    
    def verify(user_id:str, token:str) -> bool:
        query = select(tokens.exp).where(tokens.user_id==user_id)
        result = session.scalars(query).first()

        if float(result) < now.timestamp():
            return True
        else:
            return False
    
    