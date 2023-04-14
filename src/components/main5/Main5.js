import React from 'react'
import "./Main5.scss"
import main5_vid from "../../video/main5_vid.mp4"

function Main5() {
    return (
        <div className='main5'>
            <div className="main5_div1">
                <h1>PATIENT STORIES: GABRIELLE</h1>
                <p>“I had an accident when I was younger that brought me to my first crowns. I had a fall recently where the crowns were damaged, so I went looking for the right dentist. It was very apparent to me when I came in that this is an exceptional place, and the right place for me.”</p>
                <div className="main5_div2">
                    <h1>– Gabrielle</h1>
                </div>
            </div>
            <div className="main5_vid">
                <div className="">
                    <video controls>
                        <source src={main5_vid}></source>
                    </video>
                </div>
            </div>

        </div>
    )
}

export default Main5