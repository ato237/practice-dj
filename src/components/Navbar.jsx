import React,{useState} from 'react'
import './Navbar.css'
import {BrowserRouter as 
    Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

function Navbar() {

    const[isClicked, setClicked] = useState(false)

    const handleClick =()=>{
        setClicked(!isClicked)
    }
    const[isClicke, setClicke] = useState(false)

    const handleClick1 =()=>{
        setClicke(!isClicke)
    }
    const[isClick, setClick] = useState(false)

    const handleClick2 =()=>{
        setClick(!isClick)
    }
    return (
        <>
        <Router>
           <div className="navbar">
               <ul className="container">
                   <div className="left">
                   <li className = 'navbar-element'>
                       <Link to ='/'>
                       <img  className='logo' src ='https://media-exp1.licdn.com/dms/image/C4D0BAQHF7HLEYX6LSQ/company-logo_200_200/0/1607800000814?e=2159024400&v=beta&t=GhDf2E1ixnXHT2c4bQQE58T---2Mw86d6mi3lHAnzyA' alt=''/>
                       </Link>
                       </li>
                   <li className = 'navbar-elements'>
                    <Link onClick = {handleClick}className='nav-link' to = '/tutorial'>
                    Tutorial
                    <i  className ={isClicked?"fa fa-caret-down": "fa fa-caret-up"} style={{paddingLeft: "5px"}}></i>
                    </Link></li>
                   <li className = 'navbar-elements'>
                       <Link onClick = {handleClick1} className='nav-link' to = '/references'>
                           References
                           <i className ={isClicke?"fa fa-caret-down": "fa fa-caret-up"} style={{paddingLeft: "5px"}}></i>
                           </Link></li>
                   <li className = 'navbar-elements'>
                       <Link onClick = {handleClick2} className='nav-link' to = '/exercises'>
                           Exercises
                           <i className ={isClick?"fa fa-caret-down": "fa fa-caret-up"} style={{paddingLeft: "5px"}}></i>
                           </Link></li>
                   </div>
                   <span className = 'wrapper-right'>
                   <div className="right">
                   <li className = 'navbar-elements-right'><Link className='nav-link-right-logo' to = '/log-in'>Log in</Link> </li>
                   <li className = 'navbar-elements-right'><Link style={{  margin: "13px 13px",padding: "10px 20px"}}className='nav-link-right' to = '/paid-courses'>Paid Courses</Link></li>
                   <li className = 'navbar-elements-right'><Link style={{  margin: "13px 13px",padding: "10px 20px"}} className='nav-link-right' to = '/spaces'>Spaces</Link></li>
                   </div>
                   </span>
               </ul>
           </div>
           </Router>
        </>
    )
}

export default Navbar
