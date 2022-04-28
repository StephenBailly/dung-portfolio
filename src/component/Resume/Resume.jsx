import React from "react"
import ResumeApi from "./ResumeApi"
import Card from "./Card"
import "./Resume.scss"

const Resume = () => {
  return (
    <>
      <section className='resume' id='resume'>
        <div className='resume_container'>
          <div className='resume_header'>
            <h4>7+ YEARS OF EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>
          <div className='resume_content'>
            <div className='left'>
              <div className='resume_content-header'>
                <h4>2007-2010</h4>
                <h2>Education Quality</h2>
              </div>
              <div className='resume_content-content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} />
                  }
                })}
              </div>
            </div>
            <div className='left'>
              <div className='resume_content-header'>
                <h4>2007-2010</h4>
                <h2>Job Experience</h2>
              </div>
              <div className='resume_content-content'>
                {ResumeApi.map((val) => {
                  if (val.category === "experience") {
                    return <Card key={val.id} title={val.title} year={val.year} />
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
