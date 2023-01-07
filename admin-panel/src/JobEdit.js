import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function JobEdit() {
  const {id}=useParams()
  useEffect(()=>{
    console.log(id)
    axios.get(`http://127.0.0.1:8000/jobid/${id}`).then(res=>{
      console.log(res.data)
      setJid(res.data.data[0].jid)
      setTitle(res.data.data[0].title)
      setCompany(res.data.data[0].company)
      setExp(res.data.data[0].exp)
      setSalary(res.data.data[0].salary)
      setLocation(res.data.data[0].location)
      setDesc(res.data.data[0].desc)
      setAlink(res.data.data[0].alink)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[]);
  const [jid, setJid] = useState("");
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [exp, setExp] = useState("");
  const [salary, setSalary] = useState(0);
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [alink, setAlink] = useState("");
  
  const handlesubmit = (e) => {
    e.preventDefault();
    const jobdata = { jid, title, company, exp, salary, location, desc, alink };
    console.log(jobdata)
    axios
      .put(`http://127.0.0.1:8000/${id}`, jobdata)
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));

      toast.success('🦄 Job Edited', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  };

  return (
    <>
    


 <div>     
<div className="row">
  <div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={handlesubmit}>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Job Edit</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>JID</label>
                <input
                  required
                  value={jid}
                  onChange={(e) => setJid(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Title</label>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Company</label>
                <input
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Exp</label>
                <input
                  required
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Salary</label>
                <input
                  required
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <label>Location</label>
                <input
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Description</label>
                <input
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="form-group">
                <label>Alink</label>
                <input
                  required
                  value={alink}
                  onChange={(e) => setAlink(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <button
                  className="btn btn-success"
                  type="submit"
                >
                  Make changes
                </button>
                <Link className="btn btn-danger" to="/">Back to Listing</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
<ToastContainer/>
    </>
  );
}

export default JobEdit