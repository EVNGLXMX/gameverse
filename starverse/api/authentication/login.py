from api.authentication.tokenmod import AccessToken
from api.authentication.users import Users
import json

class Login:
    def login(username:str ,password:str) -> str:
        
        user_id = Users.search(username) #search_user_on_db 
        if user_id:
            pwd_match = Users.verifyPwd(username, password) #verify_password
            if pwd_match == True:
                access_token = AccessToken.get(user_id) #check_token
                
                if access_token:
                    exp = AccessToken.verify(user_id, access_token) #check_token_exp
                    if exp == True:
                        AccessToken.revoke(user_id)
                        return json.dumps({"error":"token_expired"})
                    else:
                        return json.dumps({"token":access_token})
                else: 
                    access_token = AccessToken.generate(username, user_id)
                    return json.dumps({"token":access_token})
            else:
                return json.dumps({"error":"invalid password"})
        else:
            return json.dumps({"error":"invalid username"})