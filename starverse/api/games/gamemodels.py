from sqlalchemy import Column, Integer, String
from api.dbsession import DBSession

class games(DBSession.Base):
    __tablename__ ='games'
    id = Column (Integer, primary_key=True)
    game_id = Column (String)
    title = Column (String)
    about = Column (String)
    poster = Column (String)
    genres = Column (String)
    release_date = Column (String)
    developer = Column (String)
    platform = Column (String)
    
    def __repr__(self):
        return f"games(id={self.id!r},game_id={self.game_id!r}),title={self.title!r},about={self.about!r},poster={self.poster!r},genres={self.genres!r},release_date={self.release_date!r},developer={self.developer!r},platform={self.platform!r}"