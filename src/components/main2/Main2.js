import React from 'react'
import "./Main2.scss"
import family from "../../images/family.jpeg"
import man from "../../images/man.png"

function Main2() {
    return (
        <div className='main2'>
            <div className="main_text1">
                <div className="text1_div1">
                    <img src={family} alt="" />
                </div>
                <div className="text1_div2">
                    <div className="">
                        <h1>TOP TUCSON DENTIST <span>AND DENTAL TEAM</span></h1>
                        <p>We help patients keep their teeth for life.</p>
                    </div>
                    <div className="">
                        <p>Our compassionate and skilled dental team is committed to helping you achieve a healthy and beautiful smile. We love working one-on-one with our patients to develop personalized treatment plans that meet their goals.</p>
                    </div>
                    <button>MEET THE TEAM</button>
                </div>
            </div>
            <div className="main_text2">
                <div className="text2_div1">
                    <h1>MEET DR. JAMES RAYMOND</h1>
                    <p>Friendly, modern, and science-based dentist in Tucson</p>
                    <p>“Do you have anxiety about going to the dentist? Have ever felt rushed or like you’re a number and not a person at another office?  I guarantee that won’t happen here. We take the time to partner with you, review all of your options, and create a plan that meets your goals. At Skyline Dental, we are trailblazers when it comes to clinical care and utilizing technology, but traditional in the sense that we maintain the personal touch of a private, dentist-owned practice.”</p>
                    <button>MORE ABOUT DR. RAYMOND</button>
                </div>
                <div className="text2_div2">
                    <img src={man} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main2