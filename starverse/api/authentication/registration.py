from api.users.usercontrollers import Users
import bcrypt, json

class Registration:
    def register(username:str ,password:str) -> str:
        user = Users.search(username)
        
        if user:
            return{"error":"USER ALREADY EXISTS"}
        
        pwd = password.encode('utf8')
        hashword = bcrypt.hashpw(pwd,bcrypt.gensalt())
        Users.addNewUser(username, hashword)
        
        return {"result":"REGISTER SUCCESS"}