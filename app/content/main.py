from fastapi import FastAPI
from pydantic import BaseModel

class User(BaseModel):
    name: str

app = FastAPI()

@app.get("/api")
def api_root():
    return {"Hello": "World"}

@app.post("/api/greetings")
def greetings(user: User):
    return {"message": f"こんにちは{user.name}さん"}

@app.post("/api/namelength")
def namelength(user: User):
    name_str = user.name.replace(" ", "")
    return {"length": f"入力された名前は{len(name_str)}文字です"}