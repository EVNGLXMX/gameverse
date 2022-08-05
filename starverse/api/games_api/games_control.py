# from starlette.routing import Route
# from starlette.responses import JSONResponse
# from games import GameMod

# class Games:
#     async def get_all(request):
#         search_results = GameMod.getGames()
#         return JSONResponse(search_results)
    
#     async def get_id(request):

#         return
    
#     async def patch(request):

#         return
    
# class GameRoutes:    
#     routes = [
#     Route("/", endpoint=Games.get_all),
#     Route("/{game_id:str}", endpoint=Games.get_id),
#     Route("/{game_id:str}", endpoint=Games.patch, methods=['PATCH'])
#     ]