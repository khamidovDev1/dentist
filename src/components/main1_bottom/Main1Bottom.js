import React from 'react'
import "./Main1Bottom.scss"
import { FaRegSmileBeam } from "react-icons/fa"
import { MdLaptopChromebook } from "react-icons/md"
import { GiThreeLeaves } from "react-icons/gi"

function Main1Bottom() {
    return (
        <div className='main1bottom'>
            <div className="main1text">
                <div className="">
                    <h1>THE SKYLINE</h1>
                    <h1>DIFFERENCE</h1>
                </div>
                <div className="">
                    <FaRegSmileBeam className='icon1' />
                    <h1>QUALITY</h1>
                    <p>Experts clinicians, guided by science</p>
                </div>
                <div className="">
                    <GiThreeLeaves className='icon2' />
                    <h1>COMFORT</h1>
                    <p>Relaxing care in a calm environment</p>
                </div>
                <div className="">
                    <MdLaptopChromebook className='icon3' />
                    <h1>TECHNOLOGY</h1>
                    <p>The latest tools for a modern experience</p>
                </div>
            </div>
        </div>
    )
}

export default Main1Bottom