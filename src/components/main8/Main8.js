import React from 'react'
import "./Main8.scss"
import main8_img1 from "../../images/main8_img1.png"
import main8_img2 from "../../images/main8_img2.png"
import main8_img3 from "../../images/main8_img3.png"
import main8_img4 from "../../images/main8_img4.png"
import main8_img5 from "../../images/main8_img5.png"
import main8_img6 from "../../images/main8_img6.png"

function Main8() {
  return (
    <div className='main8'>
      <div className="main8_img">
        <img src={main8_img1} alt="" />
        <img src={main8_img2} alt="" />
        <img src={main8_img3} alt="" />
        <img src={main8_img4} alt="" />
        <img src={main8_img5} alt="" />
        <img src={main8_img6} alt="" />
      </div>
    </div>
  )
}

export default Main8 