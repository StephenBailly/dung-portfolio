import React from "react"
import './Card.scss'

const Card = (props) => {
  return (
    <>
      <div className='card_resume'>
        <div className='card_resume-content'>     
            <h3>{props.title}</h3>
            <span>{props.year}</span>
        </div>
      </div>
    </>
  )
}

export default Card
