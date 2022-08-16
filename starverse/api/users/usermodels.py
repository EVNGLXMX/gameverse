from sqlalchemy import Column, String,Integer
from api.dbsession import DBSession

class users(DBSession.Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password = Column(String)
    date_created = Column(String)

    def __repr__(self) -> str:
        return f"users(id={self.id!r}, username={self.username!r}, password={self.password!r}, date_created={self.date_created!r})"