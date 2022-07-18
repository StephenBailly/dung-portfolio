import React from "react"
import ResumeApi from "./ResumeApi"
import "./Resume.scss"

const Resume = () => {
  return (
    <>
      <section className='resume' id='resume'>
        <div className='resume_container'>
          <div className='resume_header'>
            <h4>8+ YEARS OF EXPERIENCE</h4>
            <h1>Background</h1>
          </div>
          <div className='resume_content'>
            <div className='resume_left'>
              <div className='resume_left-header'>
                <h2>Education Quality</h2>
              </div>
              <div className='resume_left-content'>
                {ResumeApi.map(resume => {
                  if (resume.category === "education") {
                    return (
                      <div className='resume_left-card box' key={resume.id}>
                        <h3>{resume.year}</h3>
                        <h4>{resume.title}</h4>
                      </div>
                    )
                  }
                })}
              </div>
            </div>
            <div className='resume_right'>
              <div className='resume_right-header'>
                <h2>Field of Experience & Skills</h2>
              </div>
              <div className='resume_right-container'>
                <div className="resume-right_svg"></div>
                <div className="resume_right-content">
                  {ResumeApi.map(resume => {
                    if (resume.category === "experience") {
                      return (<ul>
                      <li key={resume.id}>
                        {resume.desc}
                        </li>
                        </ul>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
