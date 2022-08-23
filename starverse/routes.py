from starlette.routing import Mount
from api.games.gameroutes import GameRoutes
from api.authentication.authroutes import AuthRoutes
from api.users.userroutes import UserRoutes

routes = [
    Mount('/auth', routes=AuthRoutes.routes),
    Mount('/games', routes=GameRoutes.routes),
    Mount('/users', routes=UserRoutes.routes),
]
