import React, { useState } from "react"
import { FaArrowLeft, FaArrowRight, FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import TestimonialApi from "./TestimonialApi"
import "./Testimonial.scss"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const testim = TestimonialApi[currentIndex];

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
                  <button className='btn_shadow prev_btn' onClick={() => handleClick(currentIndex === 0 ? TestimonialApi.length - 1 : currentIndex - 1)}>
                    <FaArrowLeft />
                  </button>
                  <button className='btn_shadow next_btn' onClick={() => handleClick(currentIndex === TestimonialApi.length - 1 ? 0 : currentIndex + 1)}>
                  <FaArrowRight />
                  </button>
                </div>
                <div className="slide-bottom">
                <div className='quote'>
                  <FaQuoteLeft />
                </div>
                <div className="right">
                  <div className="content box_shadow">
                    <h1>{testim.name} - {testim.post}</h1>
                    <h3>{testim.offcer}</h3>
                    <p>{testim.desc}</p>
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
