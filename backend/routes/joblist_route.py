from fastapi import APIRouter
from config.database import collection_name
from models.joblist_model import Job
from schemas.joblist_schema import job_serializer, jobs_serializer
from bson import ObjectId
job_api_router=APIRouter()


@job_api_router.get("/")
async def get_jobs():
    jobs=jobs_serializer(collection_name.find())
    return {"status":"ok","data":jobs}


@job_api_router.get("/{jid}")
async def get_job(jid:str):
    job= jobs_serializer(collection_name.find({"jid":jid}))
    return {"status":"ok","data":job}

@job_api_router.get("/jobid/{id}")
async def get_job_uid(id:str):
    job= jobs_serializer(collection_name.find({"_id":ObjectId(id)}))
    return {"status":"ok","data":job}


@job_api_router.post("/")
async def post_job(job:Job):
    _id=collection_name.insert_one(dict(job))
    job= jobs_serializer(collection_name.find({"_id":_id.inserted_id}))
    return {"status":"ok","data":job}


@job_api_router.put("/{id}")
async def update_job(id:str,job:Job):
    collection_name.find_one_and_update({"_id":ObjectId(id)},{
        "$set":dict(job)
    })
    job=jobs_serializer(collection_name.find({"_id":ObjectId(id)}))
    return {"status":"ok","data":job}


@job_api_router.delete("/{id}")
async def delete_job(id:str):
    collection_name.find_one_and_delete({"_id":ObjectId(id)})
    
    return {"status":"ok","data":[]}


