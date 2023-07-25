import React from 'react'
import './style.css'

function Footer() {
    return (
        <React.Fragment>
            <footer>
                <div className='Section'>
                    <div className='container'>
                        <p style={{ color: '#737373', marginBottom: '30px' }}>Questions? Call 000-800-919-1694</p>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a>FAQ</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Help Centre</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Account</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Media Centre</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a>Investor  </a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Relations</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>JobsWays to Watch</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Terms of Use</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a>Privacy</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Cookie Preferences</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Corporate Information</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Contact Us</a>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='Footer_Text'>
                                <a>Speed</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>TestLegal Notices</a>
                            </div>
                            <div className='Footer_Text'>
                                <a>Only on Netflix</a>
                            </div>
                        </div>
                        <select className='select'>
                            <option>Endlish</option>
                            <option>Hindi</option>
                        </select>
                        <p className='Footer_Text'><a>Netflix India</a></p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;