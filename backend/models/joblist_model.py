from pydantic import BaseModel

class Job(BaseModel):
    jid:str
    title:str
    company:str
    exp:str
    salary:int
    location:str
    desc:str
    alink:str