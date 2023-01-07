import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function JobDetail() {
    const {jid}=useParams();
    const [cjob,setCjob]=useState({});
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/${jid}`).then(res=>{
         
          setCjob(res.data.data[0]);
          
        })
        console.log(cjob);
      },[])
  return (
    <div>
            

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Job Details</h2>
                </div>
                <div className="card-body"></div>

                {cjob &&
                    <div>
                              <h2>Title :  <span className='main-f'>{cjob.title}</span></h2>
      <h5>Company : <span className='main-f'>{cjob.company}</span></h5>
      <h5>Starting salary : <span className='main-f'>{cjob.salary}</span></h5>
      <h5>Exp required: <span className='main-f'>{cjob.exp}</span></h5>
      <h5>Location : <span className='main-f'>{cjob.location}</span></h5>
      <h5>Job Id : <span className='main-f'>{cjob.jid}</span></h5>
     
        <h5 className='main-f'>{cjob.desc}</h5>
      
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
          
        </div >
  )
}

export default JobDetail