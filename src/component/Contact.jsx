import React, { useState } from "react"
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs'
import sbLogo from "../assets/sblogo.png"
import contact from "../assets/contact.jpg"
import "./Contact.scss"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact_container'>
          <div className='contact_container-header'>
            <h4>CONTACT</h4>
            <h1>Connect With Me</h1>
          </div>
          <div className='contact_container-content'>
            <div className='contact_left'>
              <div className='contact_left-box'>
                <div className='details'>
                  <h1>Huong Dung Le</h1>
                  <p>I am available for freelance work.</p> <br />
                  {/* <p>Phone: </p> */}
                  <p>Email: lhdlondon18@gmail.com</p> <br />
                  <div className='details_social'>
                    <h4>FIND WITH ME</h4>
                    <div className='button'>
                      <button className='button_social'>
                        <a href="https://uk.linkedin.com/in/lehuongdung" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                      </button>
                      <button className='button_social'>
                        <a><BsFacebook /></a>
                      </button>
                      <button className='button_social'>
                        <a><BsInstagram /></a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="contact_left-img">
                <img src={contact} alt="contact img" />
              </div>
              </div>
            </div>
            <div className='contact_right'>
              <form onSubmit={formSubmit}>
                <div className='contact_right-top'>
                  <div className='input-name'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input-phone'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer_logo">
          <p>©2022 Made with 💜 by </p>
          <a href="https://stephenbailly.com" target="_blank" rel="noreferrer"><img src={sbLogo} alt="web developer logo" /></a>
          
        </div>
      </section>
    </>
  )
}

export default Contact
