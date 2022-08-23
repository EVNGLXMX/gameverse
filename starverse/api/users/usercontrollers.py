from sqlalchemy import select
from datetime import datetime
from api.dbsession import DBSession
from api.users.usermodels import users
from api.users.userschemas import userSchema
import bcrypt

session = DBSession.session
Base = DBSession.Base
    
class Users:
    def addNewUser(username:str, password:str) -> None:
        with session:
            newUser = users(
                username=username,
                password=password,
                date_created=datetime.utcnow(),
            )
            session.add(newUser)
            session.commit()
    
    def verifyPwd(username:str, password:str):              
        query = select(users.password).where(users.username == username)
        result = session.scalars(query).first()
        password = password.encode()
        
        if not bcrypt.checkpw(password,result):
            return False

        return True

    def search(username:str):
        query = select(users).where(users.username == username)
        result = session.scalars(query).first()
        
        if not result:
            return result

        return result
    
    def getUsers():
        query = DBSession.session.query(users).order_by(users.id)
        schema = userSchema(many=True)
        user_results = schema.dump(query)
        return user_results

