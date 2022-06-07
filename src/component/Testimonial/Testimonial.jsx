import React, { useState } from "react"
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import TestimonialApi from "./TestimonialApi"
import "./Testimonial.scss"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
        setCurrentIndex(currentIndex === 0 ? TestimonialApi.length - 1 : currentIndex - 1)
    } else {
        setCurrentIndex(currentIndex === TestimonialApi.length - 1 ? 0 : currentIndex + 1)
    }
};

  const transForm = { transform: `translateX(${currentIndex * -670}px)`};

  return (
    <>
      {TestimonialApi.length && (
        <>
          <div className='testimonial' id='testimonials'>
            <div className='testimonial_container'>
              <div className='testitmonial_container-header'>
                <h4>WHAT FORMER EMPLOYERS SAY</h4>
                <h1>Testimonial</h1>
              </div>
              <div className='slide'>
                <div className='slide_button'>
                  <button className='btn_shadow prev_btn' direction="left" onClick={() => handleClick("left")}>
                    <FaArrowLeft />
                  </button>
                  <button className='btn_shadow next_btn' direction="right" onClick={() => handleClick("right")}>
                  <FaArrowRight />
                  </button>
                </div>
                <div className="slide-content">
                <div className='quote'>
                  <FaQuoteLeft />
                </div>
                <div className="slide-bottom">
                <div className="right" style={transForm}>
                  {TestimonialApi.map(testim => (               
                  <div className="content box_shadow">
                    <h1>{testim.name} - {testim.post}</h1>
                    <h3>{testim.offcer}</h3>
                    <p>{testim.desc}</p>
                  </div>                 
                  ))}
                </div>
                </div>
                <div className="quote">
                <FaQuoteRight />
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Testimonial
