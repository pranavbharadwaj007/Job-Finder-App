import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Sideim } from "./err.svg"

function NotFound() {
  return (
    <>
    <div>Page not found</div>

    <p>Go to <Link to="/"> Home</Link></p>

    <Sideim className='sidem'/>
    </>


  )
}

export default NotFound