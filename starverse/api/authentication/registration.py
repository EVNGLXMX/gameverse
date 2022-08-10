from starlette.responses import JSONResponse
from sqlalchemy.orm import declarative_base, Session
from api.authentication.users import Users
import bcrypt, json

class Registration:
    def register(username:str ,password:str) -> str:
        user = Users.search(username)
        
        if user:
            return json.dumps({"result":"user already exists"})
        
        pwd = password.encode('utf8')
        hashword = bcrypt.hashpw(pwd,bcrypt.gensalt())
        Users.addNewUser(username, hashword)
        
        return json.dumps({"result":"success"})