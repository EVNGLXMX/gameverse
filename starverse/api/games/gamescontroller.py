import string, random
from api.dbsession import DBSession
from api.games.gamesmodel import games
from api.games.gameschema import gameSchema

class GameMod:
    def getGames():
        query = DBSession.session.query(games).order_by(games.id)
        schema = gameSchema(many=True)
        game_results = schema.dump(query)
        return game_results
    
    def searchGamesByID(title:str):
        query = DBSession.session.query(games).filter(games.title.contains(title)).order_by(games.title)
        schema = gameSchema(many=True)
        game_results = schema.dump(query)
        return game_results
    
    def getGamesByID(title:str):
        query = DBSession.session.query(games).filter(games.title==title).first()
        schema = gameSchema()
        game_results = schema.dump(query)
        return game_results
        
    def id_Generator(size=10, chars=string.ascii_uppercase + string.digits):
        return ''.join(random.choice(chars) for _ in range(size))
