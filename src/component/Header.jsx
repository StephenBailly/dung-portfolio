import React, { useState } from "react";
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { motion } from 'framer-motion';
import logo from "../assets/logo.png";
import "./header.scss";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='header'>
        <div className='header_container'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='navlink'>
            <ul className="link">
              {['home', 'features', 'portfolio', 'resume', 'testimonials', 'contact'].map((item) => (
                <li key={`link-${item}`}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
            <div className="burger_menu">
              <BiMenuAltRight onClick={() => setToggle(true)} />

              {toggle && (
                <motion.div
                  whileInView={{ x: [100, 0] }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                  <BiX onClick={() => setToggle(false)} />
                  <ul>
                    {['home', 'features', 'portfolio', 'resume', 'testimonials', 'contact'].map((item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
