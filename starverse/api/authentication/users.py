from starlette.responses import JSONResponse
from sqlalchemy import Column, String,Integer, create_engine, select
from sqlalchemy.orm import declarative_base, Session
import bcrypt

Base = declarative_base()
engine = create_engine("sqlite:///gbdb")
session = Session(engine)

class users(Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)

    def __repr__(self) -> str:
        return f"users(id={self.id!r}, username={self.username!r}, password={self.password!r})"
    
class Users:
    def addNewUser(username:str, password:str) -> None:
        with Session(engine) as session:
            newUser = users(
                username=username,
                password=password
            )
            session.add(newUser)
            session.commit()
    
    def verifyPwd(username:str, password:str):
        Base.metadata.create_all(engine)
        
        query = select(users.password).where(users.username == username)
        result = session.scalars(query).first()
        password = password.encode()
        
        if bcrypt.checkpw(password,result):
            return True
        else:
            return False

    def search(username:str):
        Base.metadata.create_all(engine)
        
        query = select(users).where(users.username == username)
        result = session.scalars(query).first()
        if result:
            return result.id
        else:
            return result
        
