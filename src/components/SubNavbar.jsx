import React from 'react'
import { BrowserRouter as Router,Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faSearch,faGlobeAsia,faCircle } from '@fortawesome/free-solid-svg-icons'
import './subnavbar.css'


function SubNavbar() {
    return (
        <Router>
        <div className='container'>
            <ul className="wrapper">
                <li className="navs-elements">
                <Link className="navs-link" to ="/">
                     <FontAwesomeIcon icon={faHouseUser}/>
                     </Link>  
                     </li>
                <li className="navs-elements">
                    <Link className="navs-link" to ="/html">
                    HTML
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/css">
                    CSS
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/javascript">
                    JAVASCRIPT
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/sql">
                    SQL
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/python">
                    PYHTON
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/bootsrap">
                    BOOTSRAP
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/how-to">
                    HOW TO
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/w3-css">
                    W3.CSS
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/java">
                    JAVA
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/jquery">
                    JQUERY
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/c++">
                    C++
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/c#">
                    C#
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/r">
                    R
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/react">
                    React
                    </Link>  
                 </li>
                 <li className="navs-elements">
                    <Link className="navs-link" to ="/kotlin">
                    Kotlin
                    </Link>  
                 </li>
                <li className="navs-elements-right">
                <Link className="navs-link" to ="/">
                <FontAwesomeIcon icon={faSearch}/>
                
                     </Link> 
                   </li>
                <li className="navs-elements-right">
                <Link className="navs-link" to ="/">
                <FontAwesomeIcon icon={faGlobeAsia}/>
                     </Link> 
                    </li>
                <li className="navs-elements-right">
                <Link className="navs-link" to ="/">
                <FontAwesomeIcon icon={faCircle}/>
                     </Link> 
                         </li>

            </ul>
        </div>
        </Router>
    )
}

export default SubNavbar
