from starlette.applications import Starlette
from starlette.routing import Mount
from api.games.gamesview import GameRoutes
from api.authentication.middleware.authmiddleware import Authentication
from api.authentication.authview import AuthRoutes

routes = [
    Mount('/auth', routes=AuthRoutes.routes),
    Mount('/games', routes=GameRoutes.routes)
]

app = Starlette(debug=True, middleware=Authentication.middleware, routes=routes)