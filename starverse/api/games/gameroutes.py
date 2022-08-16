from starlette.routing import Route
from api.games.gameviews import GameViews
class GameRoutes:    
    routes = [
    Route("/", endpoint=GameViews.get_all),
    Route("/{game_id:str}", endpoint=GameViews.get_game_by_id),
    Route("/s/{game_id:str}", endpoint=GameViews.search_game_by_id),
    Route("/{game_id:str}", endpoint=GameViews.patch, methods=['PATCH'])
    ]