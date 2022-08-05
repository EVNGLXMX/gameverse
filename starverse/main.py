from starlette.applications import Starlette
from starlette.routing import Mount
# from api.games_api.games_control import GameRoutes
from api.authentication.auth import Authentication
from api.authentication.auth_control import AuthRoutes

routes = [
    Mount('/auth', routes=AuthRoutes.routes),
    # Mount('/games', routes=GameRoutes.routes)
]

app = Starlette(debug=True, middleware=Authentication.middleware, routes=routes)