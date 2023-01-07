from pymongo import MongoClient 

client=MongoClient("mongodb+srv://<username>:<password>@cluster0.vvnreni.mongodb.net/?retryWrites=true&w=majority")

db=client.job_app

collection_name=db["job_list"]