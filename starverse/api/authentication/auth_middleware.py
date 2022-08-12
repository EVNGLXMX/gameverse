from starlette.middleware import Middleware
from starlette.authentication import (
    AuthCredentials, AuthenticationBackend, AuthenticationError, SimpleUser, requires
)
from starlette.middleware.authentication import AuthenticationMiddleware
from starlette.middleware.cors import CORSMiddleware
from starlette.requests import Request
from starlette.responses import JSONResponse, RedirectResponse
from api.authentication.tokenmod import AccessToken
import json

class BasicAuthBackend(AuthenticationBackend):
    async def authenticate(self, conn):
        if "Authorization" not in conn.headers:
            return
        auth = conn.headers["Authorization"]
        bearer,token= auth.split(' ')
        print(token)
        if token == "null":
            return 
        else:
            expired, username = AccessToken.verify(token)
            if expired == True:
                raise AuthenticationError('Session_expired')
            elif expired == False:
                return AuthCredentials(["authenticated"]), SimpleUser(username)
            
def on_auth_error(request: Request, exc: Exception):
    return JSONResponse(json.dumps({"error": str(exc)}))

class Authentication:
    middleware = [
            Middleware( CORSMiddleware, allow_origins=['*'],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"]),
            Middleware( AuthenticationMiddleware, backend = BasicAuthBackend(),
            on_error=on_auth_error)
    ]