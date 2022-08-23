from starlette.authentication import requires
from starlette.responses import JSONResponse
from api.users.usercontrollers import Users
import json

class UserViews:
    @requires(['authenticated','admin'],status_code=404)
    async def admin_get_all(request):
        search_results = Users.getUsers()
        return JSONResponse(json.dumps(search_results))