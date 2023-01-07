import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Careers() {
  const [cjobsi, setCjobsi] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/`).then((res) => {
      setCjobsi(res.data.data);
    });

    console.log(cjobsi);
  }, []);
  function han(id) {
    console.log(id);
  }
  return (
    <div className="careers">
      {cjobsi.map((job) => (
        <Link to={job.jid} key={job.id} onClick={han(job.id)}>
          <p>{job.title}</p>
          <p>Location : {job.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;
