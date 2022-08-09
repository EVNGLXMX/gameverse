from api.authentication.tokenmod import AccessToken
from api.authentication.users import Users
import json

class Login:
    def login(username:str ,password:str) -> str:
        
        user_id = Users.search(username) #search_user_on_db 
        if user_id:
            pwd_match = Users.verifyPwd(username, password) #verify_password
            if pwd_match == True:
                AccessToken.revoke(user_id)
                access_token = AccessToken.generate(username, user_id)
                return json.dumps({"token":access_token})
            else:
                return json.dumps({"error":"invalid password"})
        else:
            return json.dumps({"error":"invalid username"})