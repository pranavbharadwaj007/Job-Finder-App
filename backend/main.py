from fastapi import FastAPI
from routes.joblist_route import job_api_router
from fastapi.middleware.cors import CORSMiddleware
app=FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(job_api_router)