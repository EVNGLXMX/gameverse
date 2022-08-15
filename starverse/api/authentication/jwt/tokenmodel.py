from sqlalchemy import Column, Integer, String
from api.dbsession import DBSession

class tokens(DBSession.Base):
    __tablename__ = 'tokens'
    id = Column (Integer,primary_key=True)
    token = Column (String)
    user_id = Column (Integer)
    iat = Column (String)
    exp = Column (String)
    
    def __repr__(self) -> str:
        return f"tokens(id={self.id!r}, token={self.token!r}, user_id={self.user_id!r}, iat={self.iat!r} exp={self.exp!r}"