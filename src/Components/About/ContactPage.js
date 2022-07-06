import React from 'react'
import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function ContactPage() {
    return (
        <div >
            <div className="container col-md-6">
                <h1 className='heading'>Get in touch</h1>
                <div className="row">
                    <div className="left-section">
                        <h2 style={{ color: '#fb5607'}}>About</h2>
                        <div className="left-details">
                            <h6 href="">
                                < FontAwesomeIcon style={{ marginRight: "5px" }} icon={solid('user-tie')} />
                                Name: <span style={{ color:'#fb5607' }}>Arjun Ravi</span></h6>
                            <h6>
                                < FontAwesomeIcon style={{ marginRight: "5px" }} icon={solid('phone')} />
                                Mobile: <span style={{ color: '#fb5607' }}>7034497827</span></h6>
                            <h6>
                                < FontAwesomeIcon style={{ marginRight: "5px" }} icon={solid('at')} />
                                Email: <span style={{ color: '#fb5607' }}>arjunrvz@gmail.com</span></h6>
                        </div>
                    </div>
                    <div className="right-section">
                        <h2 className='right-heading'>Social Media</h2>
                        <div className="right-details">

                            <a href="https://github.com/Arjunraveendran1997">
                            <h6 >
                                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faGithub} />
                                Github
                            </h6>
                            </a>

                            <a href="https://www.linkedin.com/in/arjun-ravi-ba2a15209/">
                            <h6>
                                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faLinkedin} />
                                Linkedin</h6>
                            </a>

                            <a href="https://www.instagram.com/arjun_ravii/">
                                <h6>
                                <FontAwesomeIcon style={{ marginRight: "5px" }} icon={faInstagram} />
                                Instagram</h6>
                        </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage