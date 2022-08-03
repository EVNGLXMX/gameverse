from starlette.middleware import Middleware
from starlette.authentication import (
    AuthCredentials, AuthenticationBackend, AuthenticationError, SimpleUser, requires
)
from starlette.middleware.authentication import AuthenticationMiddleware
from starlette.middleware.cors import CORSMiddleware

class BasicAuthBackend(AuthenticationBackend):
    async def authenticate(self, conn):
        # if "Authorization" not in conn.headers:
        #     print("unauthenticated")
        #     return
        # auth = conn.headers["Authorization"]
        # bearer,token= auth.split(' ')
        # print(auth)
        # if token == "null":
        #     return 
        # # TODO verification
        return AuthCredentials(["authenticated"]), SimpleUser("sdf")
    
middleware = [
    Middleware( CORSMiddleware, allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]),
    Middleware( AuthenticationMiddleware, backend = BasicAuthBackend())
]