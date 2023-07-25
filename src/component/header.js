import React from 'react'
import './style.css'
import logo from './image/Logonetflix.png'

const Header = () => {
    return (
        <React.Fragment>
            <div className='header'>
                <img src={logo} />
                <div className='h-data'>
                    <p>UNLIMITED TV SHOWS & MOVIES</p>
                    <button className='btn-join'>JOIN NOW</button>
                    <button className='btn-2'>SIGN IN</button>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Header