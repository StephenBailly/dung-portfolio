import React from "react"
import "./header.scss"
import logo from "../assets/logo.png"

const Header = () => {

  return (
    <>
      <div className='header'>
        <div className='header_container'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='navlink'>
            <ul className="link">
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#features'>features</a>
              </li>
              <li>
                <a href='#portfolio'>portfolio</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <a href='#testimonials'>testimonials</a>
              </li>
              {/* <li>
                <a href='#blog'>blog</a>
              </li> */}
              <li>
                <a href='#contact'>contact</a>
              </li>          
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
