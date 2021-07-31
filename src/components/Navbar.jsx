import React from 'react'
import './Navbar.css'
import {BrowserRouter as 
    Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function Navbar() {
    return (
        <>
        <Router>
           <div className="navbar">
               <ul className="container">
                   <div className="left">
                   <li className = 'navbar-elements'><img className='logo' src ='https://media-exp1.licdn.com/dms/image/C4D0BAQHF7HLEYX6LSQ/company-logo_200_200/0/1607800000814?e=2159024400&v=beta&t=GhDf2E1ixnXHT2c4bQQE58T---2Mw86d6mi3lHAnzyA' alt=''/></li>
                   <li className = 'navbar-elements'>
                    <Link className='nav-link' to = '/tutorial'>
                    Tutorial
                    <i class="fa fa-caret-down"></i>
                    </Link></li>
                   <li className = 'navbar-elements'>
                       <Link className='nav-link' to = '/references'>
                           References
                           <i class="fa fa-caret-down"></i>
                           </Link></li>
                   <li className = 'navbar-elements'>
                       <Link className='nav-link' to = '/exercises'>
                           Exercises
                           <i class="fa fa-caret-down"></i>
                           </Link></li>
                   </div>
                   <span className = 'wrapper-right'>
                   <div className="right">
                   <li className = 'navbar-elements-right'><Link className='nav-link-right' to = '/get-you-own-websites'>Get Your own website</Link> </li>
                   <li className = 'navbar-elements-right'><Link className='nav-link-right' to = '/paid-courses'>Paid Courses</Link></li>
                   <li className = 'navbar-elements-right'><Link className='nav-link-right-logo' to = '/log-in'>Login</Link></li>
                   </div>
                   </span>
               </ul>
           </div>
           </Router>
        </>
    )
}

export default Navbar
