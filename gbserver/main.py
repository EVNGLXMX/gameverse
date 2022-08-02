from starlette.applications import Starlette
from starlette.routing import Mount
from api.authentication.auth import middleware
from api.games_api.games import GGames

routes = [
    Mount('/games', routes=GGames.routes)
]

app = Starlette(debug=True, middleware=middleware, routes=routes)