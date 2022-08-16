from starlette.applications import Starlette
from api.authentication.middleware.authmiddleware import Authentication
from routes import routes

app = Starlette(debug=True, middleware=Authentication.middleware, routes=routes)