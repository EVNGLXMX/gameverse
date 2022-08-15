from sqlalchemy import Column, Integer, String, create_engine, select
from sqlalchemy.orm import declarative_base, Session
from marshmallow import Schema, fields
import string, random, json, base64

Base = declarative_base()
engine = create_engine('sqlite:///gbdb')
session = Session(engine)

class games(Base):
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

class gameSchema(Schema):
    class Meta:
        ordered = True
    game_id = fields.Str()
    title = fields.Str()
    about = fields.Str()
    poster = fields.Str()
    genres = fields.Str()
    release_date = fields.Str()
    developer = fields.Str()
    platform = fields.Str()

class GameMod:
    def getGames():
        query = session.query(games).order_by(games.id)
        schema = gameSchema(many=True)
        game_results = schema.dump(query)
        return game_results
    
    def searchGamesByID(title:str):
        query = session.query(games).filter(games.title.contains(title)).order_by(games.title)
        schema = gameSchema(many=True)
        game_results = schema.dump(query)
        return game_results
    
    def getGamesByID(title:str):
        query = session.query(games).filter(games.title==title).first()
        schema = gameSchema()
        game_results = schema.dump(query)
        return game_results
        
    def id_Generator(size=10, chars=string.ascii_uppercase + string.digits):
        return ''.join(random.choice(chars) for _ in range(size))
