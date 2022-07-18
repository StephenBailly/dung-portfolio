import React, { useRef, useState } from "react"
import { BsLinkedin } from 'react-icons/bs'
import sbLogo from "../assets/sblogo.png"
import contact from "../assets/contact.jpg"
import emailjs from 'emailjs-com';
import "./Contact.scss"

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { fullname, phone, email, subject, message } = data;

  const InputEvent = (e) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_etpv89r', 'template_gbcchxu', form.current, 'user_EAD6PCPyiRjSkQ2LSqquB')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setIsFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact_container'>
          <div className='contact_container-header'>
            <h4>CONTACT</h4>
            <h1>How To Reach Us</h1>
          </div>
          <div className='contact_container-content'>
            <div className='contact_left'>
              <div className='contact_left-box'>
                <div className='details'>
                  <h1>Dzung Le</h1>
                  <p>Email: lhdlondon18@gmail.com</p> <br />
                  <div className='details_social'>
                    <h4>FIND ME ON LINKEDIN</h4>
                    <div className='button'>
                      <button className='button_social'>
                        <a href="https://uk.linkedin.com/in/lehuongdung" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                      </button>
                      {/* <button className='button_social'>
                        <a><BsFacebook /></a>
                      </button>
                      <button className='button_social'>
                        <a><BsInstagram /></a>
                      </button> */}
                    </div>
                  </div>
                </div>
                <div className="contact_left-img">
                  <img src={contact} alt="contact img" />
                </div>
              </div>
            </div>
            <div className='contact_right'>
              {!isFormSubmitted ?
                <form ref={form}>
                  <div className='contact_right-top'>
                    <div className='input-name'>
                      <span>YOUR NAME</span>
                      <input type='text' name='fullname' value={fullname} onChange={InputEvent} />
                    </div>
                    <div className='input-phone'>
                      <span>PHONE NUMBER </span>
                      <input type='number' name='phone' value={phone} onChange={InputEvent} />
                    </div>
                  </div>
                  <div className='input'>
                    <span>EMAIL </span>
                    <input type='email' name='email' value={email} onChange={InputEvent} />
                  </div>
                  <div className='input'>
                    <span>SUBJECT </span>
                    <input type='text' name='subject' value={subject} onChange={InputEvent} />
                  </div>
                  <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message' value={message} onChange={InputEvent}></textarea>
                  </div>
                  <button type="button" onClick={formSubmit}>{loading ? 'SENDING' : 'SEND MESSAGE'}</button>
                </form>
                : <div className='confirmation'>
                    <h3 >Thank you for getting in touch!</h3>
                    <p>We will get back to you shortly!</p>
                </div>}
            </div>
          </div>
        </div>
        <div className="footer_logo">
          <p>©2022 Made by </p>
          <a href="https://stephenbailly.com" target="_blank" rel="noreferrer"><img src={sbLogo} alt="web developer logo" /></a>
        </div>
      </section>
    </>
  )
}

export default Contact
