import React from 'react'
import "./Ser_main2.scss"
import sermain2_img1 from "../../../images/sermain_img1.png"

function Ser_main2() {
    return (
        <div className='sermain2'>
            <div className='sermain2_div1'>
                <img src={sermain2_img1} alt="" />
            </div>
            <div className='sermain2_div2'>
                <h1><span>WHY</span> SKYLINE DENTAL?</h1>
                <hr />
                <p>We go above and beyond to provide high-end, advanced Tucson dental services for adult patients. We take a total-wellness approach to ensure that you enjoy a lifetime of great oral and overall health. Our team wants to be a part of your dental health journey for many years to come.</p>
                <p>At Skyline Dental, we want our patients to be able to enjoy the benefits of great oral health and a beautiful smile. Our comprehensive dental services provide the treatments you need to look and feel your best!</p>
                <p>We also take great pride in offering and accepting an array of financial options to complement your lifestyle and budget. We’re committed to helping all of our patients get dental care that doesn’t cut corners on quality. Don’t let your oral health fall by the wayside due to cost concerns. Get in touch with our office to go over your payment options!</p>
            </div>
        </div>
    )
}

export default Ser_main2