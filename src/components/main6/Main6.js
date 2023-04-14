import React from 'react'
import "./Main6.scss"
import main6_img1 from "../../images/main6_img1.webp"
import main6_img2 from "../../images/main6_im2.webp"
import main6_img3 from "../../images/main6_img3.webp"

function Main6() {
    return (
        <div className='main6'>
            <div className="main6_start">
                <h1>3 SIMPLE STEPS FOR ACHIEVING YOUR BEST SMILE</h1 >
            </div>
            <div className="main6_middle">
                <div className="middle_img">
                    <div className="middle_img1">
                        <div className="img1_div1">
                            <img src={main6_img1} alt="" />
                        </div>
                        <div className="middle_text1">
                            <h3>Schedule an exam</h3>
                        </div>
                    </div>
                    <div className="middle_img2">
                        <div className="img1_div2">
                            <img src={main6_img2} alt="" />
                        </div>
                        <div className="middle_text2">
                            <h3>Speak with a dentist about your goals</h3>
                        </div>
                    </div>
                    <div className="middle_img3">
                        <div className="img1_div3">
                            <img src={main6_img3} alt="" />
                        </div>
                        <div className="middle_text3">
                            <h3>Create a plan and start your smile journey</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main6_end">
                <div className="main6_btn">
                    <button>REQUEST APPOINTMENT</button>
                </div>
            </div>

        </div>
    )
}

export default Main6