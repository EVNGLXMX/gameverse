from starlette.applications import Starlette
from starlette.routing import Mount
from api.authentication.auth import middleware
from api.games_api.games import Games

routes = [
    Mount('/games', routes=Games.routes)
]

app = Starlette(debug=True, middleware=middleware, routes=routes)