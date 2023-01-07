import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
function RootLayout() {
  return (
    <div className="root-layout">
      <header>
       <nav>
         <h1 className="logoh">Job Finder</h1>
         <NavLink to="/">Home</NavLink>
         <NavLink to="about">About</NavLink>
         {/* <NavLink to="help">Help</NavLink> */}
         <NavLink to="jobs">Jobs</NavLink>
       </nav>
     </header>

     <main>
      <Outlet/>
     </main>
    </div>
  )
}

export default RootLayout