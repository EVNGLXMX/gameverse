from starlette.responses import JSONResponse
from api.authentication.registration import Registration
from api.authentication.login import Login
import json

class Auth:

    async def Register(request):
        data = await request.json()
        username, password = data['username'], data['password']
        response = Registration.register(username, password)
        return JSONResponse(json.dumps(response))
    
    async def Login(request):
        data = await request.json()
        username, password = data['username'], data['password']
        response = Login.login(username, password)
        return JSONResponse(json.dumps(response))
        
