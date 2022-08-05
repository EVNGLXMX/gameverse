from starlette.responses import JSONResponse
from sqlalchemy.orm import declarative_base, Session
from api.authentication.users import Users
import bcrypt

class Registration:
    def register(username:str ,password:str) -> str:
        user = Users.search(username)
        if user:
            return {"result":"failed"}
        
        pwd = password.encode('utf8')
        hashword = bcrypt.hashpw(pwd,bcrypt.gensalt())
        Users.addNewUser(username, hashword)
        
        return {"result":"success"}