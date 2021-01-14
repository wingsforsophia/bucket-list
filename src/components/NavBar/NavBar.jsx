import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({ user, handleLogout }) => {
    return (
    <>
    
      {user ?
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Welcome, {user.name}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
              <li className="nav-item"> <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> </li>
              <li  className="nav-item" ><Link to="#" className="nav-link">Profile</Link></li>
              <li  className="nav-item" >
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trips
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div class="dropdown-item" href="#">Add Trip</div>
                  <a class="dropdown-item" href="#">View Trips </a>
        </div>
              </li>
              <li  className="nav-item" ><Link to="/users" className="nav-link">Users</Link></li>
              <Link to='' className='nav-link' onClick={handleLogout}>LOG OUT</Link>
            </ul>
           
          </div>
        </nav>
      :
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Welcome</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li className="nav-item active"> <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a> </li>
              <li><Link to="/login" className="nav-link">Log In</Link></li>
              <li><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar;
