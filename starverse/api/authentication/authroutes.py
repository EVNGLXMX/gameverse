from starlette.routing import Route
from api.authentication.authviews import Auth

class AuthRoutes:    
    routes=[
            Route("/register", endpoint=Auth.Register, methods=['POST']),
            Route("/login", endpoint=Auth.Login, methods=['POST'])
        ]