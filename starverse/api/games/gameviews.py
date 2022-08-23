from starlette.authentication import requires
from starlette.responses import JSONResponse
from api.games.gamescontrollers import GameMod

import json

class GameViews:
    async def get_all(request):
        search_results = GameMod.getGames()
        return JSONResponse(json.dumps(search_results))
    
    async def search_game_by_id(request):
        game_id = request.path_params['game_id']
        search_results = GameMod.searchGamesByID(game_id)
        return JSONResponse(json.dumps(search_results))

    async def get_game_by_id(request):
        game_id = request.path_params['game_id']
        search_results = GameMod.getGamesByID(game_id)
        return JSONResponse(json.dumps(search_results))
    
    @requires(['authenticated','admin'],status_code=404)
    async def admin_get_all(request):
        search_results = GameMod.getGames()
        return JSONResponse(json.dumps(search_results))
    
    @requires(['authenticated', 'admin'])
    async def patch(request):

        return