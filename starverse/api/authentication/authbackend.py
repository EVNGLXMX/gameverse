from starlette.authentication import (
    AuthCredentials, AuthenticationBackend, AuthenticationError, SimpleUser
)
from starlette.requests import Request
from starlette.responses import JSONResponse, RedirectResponse
from api.authentication.jwt.tokencontrollers import AccessToken
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
            expired, username, auth = AccessToken.verify(token)
            if expired == True:
                raise AuthenticationError('SESSION EXPIRED, LOG IN AGAIN')
            elif expired == False:
                if auth == True:
                    return AuthCredentials(['authenticated','admin']), SimpleUser(username)
                return AuthCredentials(['authenticated']), SimpleUser(username)
            
def on_auth_error(request: Request, exc: Exception):
    return JSONResponse(json.dumps({"error": str(exc)}))