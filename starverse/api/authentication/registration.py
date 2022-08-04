from starlette.responses import JSONResponse
from sqlalchemy import Column,String,Integer, create_engine, select
from sqlalchemy.orm import declarative_base, Session
import bcrypt

Base = declarative_base()
engine = create_engine("sqlite:///gbdb")

class Users(Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)

    def __repr__(self) -> str:
        return f"Users(id={self.id!r}, username={self.username!r}, password={self.password!r})"

class Registration:
    def register(username :str, password :str) -> str:
        
        Base.metadata.create_all(engine)
        query = select(Users).where(Users.username == username)
        result = session.scalars(query).first()
        
        if result:
            return JSONResponse({"result":"fail"})
        
        pwd = password.encode('utf8')
        hashword = bcrypt.hashpw(pwd,bcrypt.gensalt())
        
        with Session(engine) as session:
            newUser = Users(
                username=username,
                password=hashword
            )
            session.add(newUser)
            session.commit()
            
        return JSONResponse({"result":"success"})