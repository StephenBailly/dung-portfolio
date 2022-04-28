import React from "react"
import PortfolioData from "./Portfolio_data"
import "./Projects.scss"

const Portfolio = () => {
  return (
    <>
      <section className='portfolio' id='portfolio'>
        <div className='portfolio_container-title heading'>
          <h4>I have been lucky to work with a variety range of organisations and corporations.</h4>
          <h1>My Portfolio</h1>
        </div>
        <div className='portfolio_container'>
          {PortfolioData.map(data => (
            <div className='portfolio_card'>
              <div className='portfolio_card-img'>
                <img src={data.image} alt={data.title} />
              </div>
              <div className="portfolio_card-content">
                <div className='portfolio_card-title'>
                  <h2>{data.title}</h2>
                </div>
                <div className='portfolio_category'>
                  <span>{data.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
