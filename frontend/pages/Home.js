import React from 'react'
import { ReactComponent as Sideim } from "./homeSvg.svg"
function Home() {
  return (
    <div className='home'>
        
            <section className="background firstsection">
        <div className="box-main">
            <div className="firstclass">
        <h2 > Welcome</h2>
                <p>Job searching can be a challenging and sometimes discouraging process, but it's important to stay motivated and keep a positive attitude. Remember that every rejection is just a stepping stone towards your ultimate goal – finding a job that is fulfilling and rewarding.</p>
                <p >Our website is designed to help you find your next career opportunity. Whether you're looking for your first job, a new role, or a change of industry, we have something for everyone.</p>
               
 
               
            </div>
            <div className="second">
                <Sideim className='sidem'/>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home