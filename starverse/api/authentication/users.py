from starlette.responses import JSONResponse
from sqlalchemy import Column, String,Integer, create_engine, select
from sqlalchemy.orm import declarative_base, Session
from datetime import datetime
import bcrypt

Base = declarative_base()
engine = create_engine("sqlite:///gbdb")
session = Session(engine)

class users(Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String)
    date_created = Column(String)

    def __repr__(self) -> str:
        return f"users(id={self.id!r}, username={self.username!r}, password={self.password!r}, date_created={self.date_created!r})"
    
class Users:
    def addNewUser(username:str, password:str) -> None:
        with Session(engine) as session:
            newUser = users(
                username=username,
                password=password,
                date_created=datetime.utcnow(),
            )
            session.add(newUser)
            session.commit()
    
    def verifyPwd(username:str, password:str):
        Base.metadata.create_all(engine)
        
        query = select(users.password).where(users.username == username)
        result = session.scalars(query).first()
        password = password.encode()
        
        if not bcrypt.checkpw(password,result):
            return False

        return True

    def search(username:str):
        Base.metadata.create_all(engine)
        
        query = select(users).where(users.username == username)
        result = session.scalars(query).first()
        
        if not result:
            return result

        return result.username
        
