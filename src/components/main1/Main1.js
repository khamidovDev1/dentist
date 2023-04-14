import React from 'react'
import "./Main1.scss"
import video from "../../video/vid.mp4"

function Main1() {
    return (
        <div className='main1'>
            <video autoPlay loop muted>
                <source src={video} type='video/mp4'></source>
            </video>
            <div className="main1_text">
                <div className="text1">
                    <h1>YOUR LOCAL TUCSON DENTIST</h1>
                    <h4>A BETTER LIFE THROUGH BETTER DENTISTRY</h4>
                </div>
                <div className="text_btn">
                    <div className="">
                        <h3 className='h1'>REQUEST APPOINTMENT</h3>
                    </div>
                    <div className="">
                        <h3>CALL (520) 800-7010</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main1