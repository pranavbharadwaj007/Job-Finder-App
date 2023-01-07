import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function JobsCreate({setchg}) {
 

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
      .post("http://127.0.0.1:8000/", jobdata)
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));

      toast.success('🦄New job added!', {
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
  };

  return (
    <>
    


 <div>     
<div className="row">
  <div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={handlesubmit}>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Job Create</h2>
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
                  Submit
                </button>
           
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

export default JobsCreate