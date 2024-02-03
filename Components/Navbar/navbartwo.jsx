import '../pages/homepage.css'
// import iconyou from '../assets/icon_you.png'
import React from 'react'

import { Link } from 'react-router-dom'

function Nav (){
  return(
    <header className="header_master">
    <Link to="/Home" className='page_name'><h1 className="page_name">PlanIt<span>FamiIt</span></h1></Link>

    <nav className="navbar_master">

     <Link to="/plancareone">
      <h1>Plan & Care</h1>
      </Link>

      <h1>Find your Center</h1>
      <h1>About Us</h1>


      <div className="fix_more">
      <h1 className="you_fix">You</h1>
      {/* <img className="you_icon" src={iconyou} alt="" /> */}
      </div>
      <div className="classniline"></div>
    </nav>
  </header>
  )
}

export default Nav;