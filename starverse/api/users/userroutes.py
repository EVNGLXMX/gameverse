from starlette.routing import Route
from api.users.userviews import UserViews

class UserRoutes:    
    routes = [
    Route("/admin", endpoint=UserViews.admin_get_all)
    ]