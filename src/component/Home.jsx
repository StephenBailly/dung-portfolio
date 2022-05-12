import React from "react"
// import Profile from "../assets/Profile_nobg.png"
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'
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
              <span style={{ color: '#E38B75' }}>
                <Typewriter words={[" Regulatory Compliance Advisor.", " Anti-Money Laundering Specialist."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>
            <p>Looking for a workplace that wakes me up every morning with alacrity, tossing the covers aside and springing from bed, my mind hungry scream for what the day has to offer.</p>
            <div className='home_btn'>
              <div className='home_btn-col1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <a href="https://uk.linkedin.com/in/lehuongdung" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a><BsFacebook /></a>
                  </button>
                  <button className='btn_shadow'>
                    <a><BsInstagram /></a>
                  </button>
                </div>
              </div>
              <div className='home_btn-col2'>
                <h4>BEST SKILL ON</h4>
                <li className="home_skills">Dedicated and multi-tasking legal professional with 8+ years of experience.</li>
                <li className="home_skills">Detail-oriented and ambitious legal professional passionately committed to working in international legal co-operation, private and public international law, financial compliance and regulations.</li>
                <li className="home_skills">Self-motivated lifelong learner with demonstrated interest in RegTech, Blockchain, DeFi, NFT, Meta and working across borders toward common goals.</li>
                <li className="home_skills">Highly organised and reliable colleague with enthusiastic and personable approach to collaboration.</li>
              </div>
            </div>
          </div>
          <div className='home_right'>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
