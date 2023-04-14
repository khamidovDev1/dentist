import React from 'react'
import "./Main2Bottom.scss"
import img1 from "../../images/AA_D.png"
import img2 from "../../images/kois.png"
import img3 from "../../images/dsd.png"
import img4 from "../../images/ada.png"
import img5 from "../../images/ada_bold.png"
import img6 from "../../images/spear.png"

function Main2Bottom() {
    return (
        <div className='main2bottom'>
            <div className="bottom_images">
                <div className="">
                    <img src={img1} alt="" />
                </div>
                <div className="">
                    <img src={img2} alt="" />
                </div>
                <div className="">
                    <img src={img3} alt="" />
                </div>
                <div className="">
                    <img src={img4} alt="" />
                </div>
                <div className="">
                    <img src={img5} alt="" />
                </div>
                <div className="">
                    <img src={img6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main2Bottom