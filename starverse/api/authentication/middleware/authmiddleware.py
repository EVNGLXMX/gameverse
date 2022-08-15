from starlette.middleware.authentication import AuthenticationMiddleware
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware import Middleware
from api.authentication.authbackend import BasicAuthBackend, on_auth_error

class Authentication:
    middleware = [
            Middleware( CORSMiddleware, allow_origins=['*'],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"]),
            Middleware( AuthenticationMiddleware, backend = BasicAuthBackend(),
            on_error=on_auth_error)
    ]