def job_serializer(job)-> dict:
    return {
        "id":str(job["_id"]),
        "jid":job["jid"],
        "title":job["title"],
        "company":job["company"],
        "exp":job["exp"],
        "salary":job["salary"],
        "location":job["location"],
        "desc":job["desc"],
        "alink":job["alink"]
    }

def jobs_serializer(jobs)->list:
    return [job_serializer(job) for job in jobs]
































