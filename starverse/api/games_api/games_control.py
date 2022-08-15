from starlette.authentication import requires
from starlette.routing import Route
from starlette.responses import JSONResponse
from api.games_api.games import GameMod
import json
class Games:

    async def get_all(request):
        search_results = GameMod.getGames()
        return JSONResponse(json.dumps(search_results))
    
    async def search_game_by_id(request):
        game_id = request.path_params['game_id']
        search_results = GameMod.searchGamesByID(game_id)
        return JSONResponse(json.dumps(search_results))

    @requires('authenticated')
    async def get_game_by_id(request):
        game_id = request.path_params['game_id']
        search_results = GameMod.getGamesByID(game_id)
        return JSONResponse(json.dumps(search_results))
    
    @requires(['authenticated', 'admin'])
    async def patch(request):

        return
    
class GameRoutes:    
    routes = [
    Route("/", endpoint=Games.get_all),
    Route("/{game_id:str}", endpoint=Games.get_game_by_id),
    Route("/s/{game_id:str}", endpoint=Games.search_game_by_id),
    Route("/{game_id:str}", endpoint=Games.patch, methods=['PATCH'])
    ]