import React from "react"
import Profile from "../assets/Profile_nobg.png"
import { BsLinkedin } from 'react-icons/bs'
import skill1 from "./pic/skill1.png"
import skill2 from "./pic/skill2.png"
import skill3 from "./pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import "./Home.scss"

const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <div className='home_container'>
          <div className='home_left'>
            <h3>Making Flexibility but Standard Taste Better</h3>
            <h1>
              Hi, I’m <span>Dzung Le</span>
            </h1>
            <h2>
              <span>
                <Typewriter words={[" Regulatory Compliance Advisor.", " Anti-Money Laundering Specialist."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>Looking for a workplace that wakes me up every morning with alacrity, tossing the covers aside and springing from bed, my mind hungry scream for what the day has to offer.</p>
            <div className='home_btn'>
              <div className='home_btn-col1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://uk.linkedin.com/in/lehuongdung" target="_blank" rel="noreferrer"></a>
                    <BsLinkedin />
                  </button>
                  <button className='btn_shadow'>
                    <i></i>
                  </button>
                  <button className='btn_shadow'>
                    <i></i>
                  </button>
                </div>
              </div>
              <div className='home_btn-col2'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='home_right'>
            <div className='home_right-img'>
              <img src={Profile} alt='profile picture' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
