import React from 'react'
import "./Navbar.scss"
import logo from "../../images/logo.png"
import { FiChevronDown } from "react-icons/fi"
import { FaBars } from "react-icons/fa"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav_menu">
                <ul className='menu_ul'>
                    <li>About Us<FiChevronDown />
                        <div className="li_hover1">
                            <ul>
                                <li><a href="/">Meet Dr. Raymond</a></li>
                                <li><a href="/">Meet the Team</a></li>
                                <li><a href="/">The Skyline Difference</a></li>
                                <li><a href="/">Community & Philanthropy</a></li>
                            </ul>

                        </div>
                    </li>
                    <li>Services<FiChevronDown />
                        <div className="li_hover2">
                            <ul>
                                <li><a href="sevice">Services</a></li>
                                <li><a href="/">Cosmetic & Elective</a></li>
                                <li><a href="/">Prevantive</a></li>
                                <li><a href="/">Full-Mouth Transformation</a></li>
                            </ul>
                        </div>

                    </li>
                    <li>Before & After</li>
                    <li><a href="/">Patient Resources</a><FiChevronDown />
                        <div className="li_hover3">
                            <ul>
                                <li><a href="/">New Patients</a></li>
                                <li><a href="/">Finance & Insurance</a></li>
                                <li><a href="/">Dental Problems</a></li>
                                <li><a href="/">Patient Portal</a></li>
                                <li><a href="/">Pay Online</a></li>
                            </ul>

                        </div>

                    </li>
                    <li>Blog</li>
                </ul>
                <button>REQUEST APPOINTMENT</button>
            </div>
            <div className="nav_end">
                <FaBars className='bars_icons' />
            </div>
        </div>
    )
}

export default Navbar