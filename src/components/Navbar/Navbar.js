import React from 'react'
import Logo from "../../assets/logo.png";
import LinkedIn from "../../assets/linkedin.png";
import GitHub from "../../assets/github.png";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar' >
            <div className='logo' >
                <img src={Logo} alt='logo' />
            </div>
            <div className='details' >
                <div className='code' >
                    <a href='https://github.com/ankit-suman-07/College-Assignment' >Code</a>
                </div>
                <div className='social' >
                    <a href='https://www.linkedin.com/in/ankit-suman-6925011b6/' >
                        <img src={LinkedIn} alt='linkedin logo' />
                    </a>
                </div>
                <div className='social' >
                    <a href='https://github.com/ankit-suman-07' >
                        <img src={GitHub} alt='github logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar