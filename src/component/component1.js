import React from 'react'
import './style.css'
import banner1 from './image/Bahubali_img_banner.jpg'
import banner2 from './image/Bahubali_text.png'

const Banner = () => {
    return (
        <React.Fragment>
            <div className='banner'>
                <div className='banner-img'>
                    <img src={banner1} />
                </div>
                <div className='b-left'>
                    <img src={banner2} />
                    <div className='b-data'>
                        <h1>Baahubali: The Beginning (Hindi Version)</h1>
                        <div className='metadata-1'>
                            <span>2015</span>
                            <span className='v-line'>|</span>
                            <span className='b-content'>U/A 13+</span>
                            <span className='v-line'>|</span>
                            <span>2h 38m</span>
                            <span className='v-line'>|</span>
                            <span>Action</span>
                        </div>
                        <div className='metadata-2'>
                            <p>Villagers in the kingdom of Mahismati rescue a baby who is destined to embark on a heroic quest in this Hindi version of S.S. Rajamouli's epic.</p>
                        </div>
                        <div className='metadata-3'>
                            <p className='m-1'>Starring:</p>
                            <p>Prabhas,Rana Daggubati,Anushka Shetty</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner
