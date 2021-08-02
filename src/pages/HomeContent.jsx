import React from 'react'
import './homecontent.css'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function HomeContent() {
    return (
        <div className ='home-content'>
            <div className="contents">
                <span className="spacing">
                <button className="button-home">
                <FontAwesomeIcon icon={faAngleLeft} className='arrow-left'/>
                    Home
                </button>
                </span>
                <button className="button-next">
                    Next
                    <FontAwesomeIcon icon={faAngleRight} className='arrow-right'/>
                </button>
                <div className="paragraph">
                    <p className = "para">HTML is the standard markup language for Web pages</p>
                    <br/>
                    <p className = "para">With HTML you can create your own Website</p>
                    <br/>
                    <p className = "para">HTML is easy to learn - You will enjoy it!</p>
                    <br/>
                    <button className="button-start"> 
                        Start learning HTML now
                 <FontAwesomeIcon icon={faAngleRight} className='arrow-right'/>
                    <FontAwesomeIcon icon={faAngleRight} className='arrow-right'/>
                 </button>
                </div>

                <div className="second-paragraph">
                    <p> Easy Learning with HTML "Try it Yourself"</p>
                    <br/>
                    <p> With our "Try it Yourself" editor, you can edit the HTML code and view the result:</p>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default HomeContent
