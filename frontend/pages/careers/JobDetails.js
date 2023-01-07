import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
function JobDetails() {
  const { id } = useParams();
  const [cjob, setCjob] = useState({});
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${id}`).then((res) => {
      setCjob(res.data.data[0]);
    });
    console.log(cjob);
  }, []);
  return (
    <div className="career-details carbox">
      <h2>
        Title : <span className="main-f">{cjob.title}</span>
      </h2>
      <p>
        Company : <span className="main-f">{cjob.company}</span>
      </p>
      <p>
        Starting salary : <span className="main-f">{cjob.salary}</span>
      </p>
      <p>
        Exp required: <span className="main-f">{cjob.exp}</span>
      </p>
      <p>
        Location : <span className="main-f">{cjob.location}</span>
      </p>
      <p>
        Job Id : <span className="main-f">{cjob.jid}</span>
      </p>
      <div className="details">
        <p className="main-f">{cjob.desc}</p>
      </div>

      <button className="but">
        <a className="lin" href={cjob.alink}>
          Apply Now
        </a>
      </button>
    </div>
  );
}

export default JobDetails;
