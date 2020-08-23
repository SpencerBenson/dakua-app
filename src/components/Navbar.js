import React  from 'react'
import {Link} from 'react-router-dom'

const NavBar = ()=> {
  return (<nav>
    <div className="nav-wrapper white" >
      <a href="#" className="brand-logo">Dakua</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
    </nav>)
}
export default NavBar
