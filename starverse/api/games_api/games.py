from starlette.routing import Route
from starlette.responses import JSONResponse
from sqlalchemy import Column, ForeignKey, Integer, String, create_engine, select
from sqlalchemy.orm import declarative_base, Session
import string, random, json

Base = declarative_base()
engine = create_engine('sqlite:///gbdb')
session = Session(engine)

class games(Base):
    __tablename__ ='games'
    id = Column (Integer, primary_key=True)
    game_id = Column (String)
    game_name = Column (String)
    about = Column (String)
    poster = Column (String)
    genres = Column (String)
    release_date = Column (String)
    developer = Column (String)
    platform = Column (String)
    
    def __repr__(self):
        return f"games(id={self.id!r},game_id={self.game_id!r}),game_name={self.game_name!r},about={self.about!r},poster={self.poster!r},genres={self.genres!r},release_date={self.release_date!r},developer={self.developer!r},platform={self.platform!r}"

class GameMod:
    def getGames():
        query = session.query(games)
        game_results = []
        for game in query:
            game_results.append(game)
        print(game_results)
    
    def id_Generator(size=10, chars=string.ascii_uppercase + string.digits):
        return ''.join(random.choice(chars) for _ in range(size))

GameMod.getGames()