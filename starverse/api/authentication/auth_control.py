from starlette.responses import JSONResponse
from starlette.routing import Route
from registration import Registration
from login import Login
class Auth:

   

    async def Register(request):
        Registration.register()
        return
    
    async def Login(request):
        Login.login(request)

class AuthRoutes:    
    routes=[
            Route("/register", endpoint=Auth.Register, methods=['POST']),
            Route("/login", endpoint=Auth.Login, methods=["POST"])
        ]
        
