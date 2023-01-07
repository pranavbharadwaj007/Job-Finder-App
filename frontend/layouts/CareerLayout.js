import React from "react";
import { Outlet } from "react-router-dom";

function CareerLayout() {
  return (
    <div className="careers-layout">
      <h2>Jobs</h2>
      <p>Apply to Dream jobs now!</p>

      <Outlet />
    </div>
  );
}

export default CareerLayout;
