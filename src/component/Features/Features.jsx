import React from "react"
import features from "./Features-Api"
import "./Features.scss"

const Features = () => {
  return (
    <>
      <div className='features' id='features'>
        <div className='features_container'>
          <div className='features_container-heading'>
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>
          <div className='features_container-content'>
            {features.map(feature => (
              <div className='card'>
                <div className="card_image">
                  <img src={feature.image} alt={feature.title} />
                  </div>
                  <div className="card_content">
                  <h2>{feature.title}</h2>
                <p>{feature.desc}</p>
                <span>{feature.tags[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
