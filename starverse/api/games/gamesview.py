from starlette.authentication import requires
from starlette.responses import JSONResponse
from api.games.gamescontroller import GameMod
from starlette.routing import Route

import json

class GamesView:
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
    Route("/", endpoint=GamesView.get_all),
    Route("/{game_id:str}", endpoint=GamesView.get_game_by_id),
    Route("/s/{game_id:str}", endpoint=GamesView.search_game_by_id),
    Route("/{game_id:str}", endpoint=GamesView.patch, methods=['PATCH'])
    ]