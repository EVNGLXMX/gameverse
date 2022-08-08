from starlette.authentication import requires
from starlette.routing import Route
from starlette.responses import JSONResponse
from api.games_api.games import GameMod

class Games:
    @requires(['authenticated', 'admin'])
    async def get_all(request):
        search_results = GameMod.getGames()
        return JSONResponse(search_results)
    
    async def get_id(self, request):

        return

    @requires(['authenticated', 'admin'])
    async def patch(self, request):

        return
    
class GameRoutes:    
    routes = [
    Route("/", endpoint=Games.get_all),
    Route("/{game_id:str}", endpoint=Games.get_id),
    Route("/{game_id:str}", endpoint=Games.patch, methods=['PATCH'])
    ]