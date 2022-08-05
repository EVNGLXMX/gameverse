from sqlalchemy import Column, ForeignKey, Integer, String, create_engine, select, delete
from sqlalchemy.orm import declarative_base, Session
from datetime import datetime, timedelta
from dotenv import load_dotenv
import jwt, os

Base = declarative_base()
engine = create_engine('sqlite:///gbdb')
session = Session(engine)
now = datetime.utcnow()

class Tokens(Base):
    __tablename__ = 'tokens'
    id = Column (Integer,primary_key=True)
    token = Column (String)
    user_id = Column (Integer,ForeignKey("users.id"))
    iat = Column (String)
    exp = Column (String)
    
    def __repr__(self) -> str:
        return f"Tokens(id={self.id!r}, token={self.token!r}, user_id={self.user_id!r}, iat={self.iat!r} exp={self.exp!r}"

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
            new_token = Tokens(
                token = access_token,
                user_id = user_id,
                iat = now,
                exp = (now + timedelta(minutes=5)).timestamp(),
            )
            session.add(new_token)
            session.commit()
        return access_token
    
    def revoke(user_id:str):
        with session:
            stmt = (
                delete('tokens').where(Tokens.user_id == user_id)
            )
            session.add(stmt)
            session.commit()
        return
    
    def get(user_id:str)-> str:
        query = select(Tokens.token).where(Tokens.user_id==user_id)
        token = session.scalars(query).first()
        return token
    
    def verify(user_id:str, token:str) -> bool:
        query = select(Tokens).where(Tokens.user_id==user_id)
        result = session.scalars(query).first()
        
        if result.exp > now:
            return True
        else:
            return False
    
    