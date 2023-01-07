import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import JobsCreate from './JobsCreate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function JobListing() {
  const [cjobs,setCjobs]=useState([]);
  const [chg,setchg]=useState(false);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
      navigate("/jobs/detail/" + id);
  }
  const LoadEdit = (id) => {
      navigate("/jobs/edit/" + id);
  } 
  function handleclki(id){
      console.log("delete")
      console.log(id)
      axios.delete(`http://127.0.0.1:8000/${id}`)
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err))

      toast.error('🦄 Deleted!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        setchg(e=>!e)
    }

  useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/`).then(res=>{
        setCjobs(res.data.data)
      })
      console.log(cjobs);
    },[chg])
  return (
    <>
    <div className="container">
    <div className="card">
        <div className="card-title">
            <h2>Job Listing</h2>
        </div>
        <div className="card-body">
            <div className="divbtn">
            
            </div>
            <table className="table table-bordered">
                <thead >
                    <tr>
                        <td>JID</td>
                        <td>Title</td>
                        <td>Name</td>
                        <td>Location</td>
                        <td>Exp</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                            {cjobs &&
                                cjobs.map(cjob => (
                                    <tr key={cjob.id}>
                                        <td>{cjob.jid}</td>
                                        <td>{cjob.title}</td>
                                        <td>{cjob.company}</td>
                                        <td>{cjob.location}</td>
                                        <td>{cjob.exp}</td>
                                        <td><a  className="btn btn-success" onClick={() => { LoadEdit(cjob.id) }}>Edit</a>
                                        <a  className="btn btn-danger" onClick={() =>{ handleclki(cjob.id)}}>Remove</a>
                                            <a  className="btn btn-primary" onClick={() => { LoadDetail(cjob.jid) }}>Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

            </table>
        </div>
    </div>
</div>
<JobsCreate setchg={setchg}/>
</>
  )
}

export default JobListing