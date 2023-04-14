import React from 'react'
import "./Footer.scss"
import { GrFacebook } from "react-icons/gr"
import { FaInstagramSquare } from "react-icons/fa"

function Footer() {
    return (
        <div className='footer'>
            <div className="footer_start">
                <div className="start_div1">
                    <h1>SERVICES</h1>
                    <li><a href="/">Cosmetic Dentistry</a></li>
                    <li><a href="/">Digital Smile Design</a></li>
                    <li><a href="/">Porcelain Veneers</a></li>
                    <li><a href="/">Teeth Whitening</a></li>
                    <li><a href="/">Orthodontics / Clear Braces</a>/</li>
                    <li><a href="/">Invisalign</a></li>
                    <li><a href="/">Smile Makeover</a></li>
                    <li><a href="/">Gum Lift</a></li>
                    <li><a href="/">Bonding / Resin Veneers</a></li>
                </div>
                <div className="start_div2">
                    <h1>SERVICES</h1>
                    <h1>GENERAL & PREVENTIVE</h1>
                    <li><a href="/">Preventive & Routine Care</a></li>
                    <li><a href="/">Implants</a></li>
                    <li><a href="/">Crowns</a></li>
                </div>
                <div className="start_div3">
                    <h1>SERVICES</h1>
                    <h1>FULL-MOUTH TRANSFORMATION</h1>
                    <li><a href="/">Full-Mouth Rehabilitation</a></li>
                    <li><a href="/">Implant Dentures / All-on-4</a></li>
                    <li><a href="/">Dentures</a></li>
                    <li><a href="/">Orthodontics / Clear Braces /</a></li>
                    <li><a href="/">Invisalign</a></li>
                </div>
                <div className="start_div4">
                    <h1>PRACTICE</h1>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Before & After</a></li>
                    <li><a href="/">Patient Resources3</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Request Appointment</a></li>
                </div>
                <div className="start_div5">
                    <h1>OUR OFFICE</h1>
                    <li><a href="/">3001 E Skyline Drive,</a></li>
                    <li><a href="/">Suite 101,</a></li>
                    <li><a href="/">Tucson, AZ 85718</a></li>
                    <h3><a href="/">Get directions</a></h3>
                    <h2>(520) 779 3984</h2>
                    <div className="">
                        <h1>REVIEW US</h1>
                        <li><a href="/">Google</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Facebook</a></li>
                    </div>
                </div>
                <div className="start_div6">
                    <h1>HOURS</h1>
                    <li><a href="/">Monday – Thursday</a></li>
                    <li><a href="/">8am – 5pm</a></li>
                    <li><a href="/">Friday</a></li>
                    <li><a href="/">By appointment</a></li>
                    <div className="">
                        <h1>SOCIAL</h1>
                        <div className="div_div">
                            <GrFacebook className='icons1' />
                            <FaInstagramSquare className='icons1' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h1>© Skyline Dental 2023 | Privacy Policy</h1>
                </div>
                <div className=""></div>
            </div>


        </div>
    )
}

export default Footer