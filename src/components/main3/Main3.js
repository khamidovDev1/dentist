import React from 'react'
import "./Main3.scss"
import { AiFillPlusCircle } from "react-icons/ai"


function Main3() {
    return (
        <div className='main3'>
            <div className="main3_container">
                <div className="main3_div1">
                    <h1><span>LEARN MORE</span> ABOUT THE <span>PROCEDURES</span> WE OFFER</h1>
                </div>
                <div className="main3_div2">
                    <div className="">
                        <h3>COSMETIC & ELECTIVE</h3>
                        <h3>DENTISTRY</h3>
                        <AiFillPlusCircle className='plus' />
                    </div>
                    <div className="">
                        <h3>PREVENTIVE & GENERAL</h3>
                        <h3>DENTISTRY</h3>
                        <AiFillPlusCircle className='plus' />
                    </div>
                    <div className="">
                        <h3>FULL-MOUTH</h3>
                        <h3>TRANSFORMATION</h3>
                        <AiFillPlusCircle className='plus' />
                    </div>
                </div>
                <div className="main3_div3">
                    <div className="">
                        <h1><a href="/">FULL-MOUTH</a></h1>
                        <h1><a href="/">REHABILITATION</a></h1>
                    </div>
                    <div className="">
                        <h1><a href="/">IMPLANT DENTURES</a></h1>
                        <h1><a href="/">ALL-ON-4</a></h1>
                    </div>
                    <div className="">
                        <h1><a href="/">DENTURES</a></h1>
                    </div>
                    <div className="">
                        <h1><a href="/">ORTHODONTICS</a></h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main3