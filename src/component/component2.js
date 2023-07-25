import React from 'react'
import './style.css'
import shortlogoimg from './image/samoll_netflix_logo.png'

const Component2 = () => {
    return (
        <React.Fragment>
            <div className="Section">
                <div className="Join row">
                    <div className="row">
                        <img className="S_logo" src={shortlogoimg} />
                        <h4 className="bahubali_normal_text" style={{ fontWeight: '700' }}>Watch all you want.</h4>
                    </div>
                    <button className='btn-join'>JOIN NOW</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Component2