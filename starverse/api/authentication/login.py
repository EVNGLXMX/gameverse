from api.authentication.jwt.tokencontrollers import AccessToken
from api.users.usercontrollers import Users
import json

class Login:
    def login(username:str ,password:str) -> str:
        
        user = Users.search(username) #search_user_on_db 
        if user:
            pwd_match = Users.verifyPwd(username, password) #verify_password
            if pwd_match == True:
                AccessToken.revoke(user.id)
                access_token = AccessToken.generate(username, user.id)
                return {"token":access_token}
            else:
                return {"error":"INVALID PASSWORD"}
        else:
            return {"error":"INVALID USERNAME"}