from starlette.responses import JSONResponse
from starlette.routing import Route
from api.authentication.registration import Registration
from api.authentication.login import Login
class Auth:

    async def Register(request):
        data = await request.json()
        username, password = data['username'], data['password']
        response = Registration.register(username, password)
        return JSONResponse(response)
    
    async def Login(request):
        data = await request.json()
        username, password = data['username'], data['password']
        response = Login.login(username, password)
        return JSONResponse(response)
    
class AuthRoutes:    
    routes=[
            Route("/register", endpoint=Auth.Register, methods=['POST']),
            Route("/login", endpoint=Auth.Login, methods=['POST'])
        ]
        
