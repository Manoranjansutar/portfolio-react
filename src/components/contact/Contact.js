import Title from '../layouts/Title';
import './Contact.css';
import contactImg from '../../assets/images/contact/contactImg.png';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className='contact' id='contact'>
          <div className='contact-title'>
              <Title  title='CONTACT' des='Contact With Me' />
          </div>

          <div className='contact-container'>
               <div className='contact-banner'>
                   <div className='contact-wrapper'>
                      <img src={contactImg} alt="" />
                      <h1>John Doe</h1>
                      <p>MERN Stack Developer</p>
                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
                      <p>Phone:+968 97859628</p>
                      <p> Email:noor.jsdivs@gmail.com</p>
                      <div className='social-container'>
                          <h4>FIND ME IN</h4>
                          <div className='social'>
                               <span> <FaFacebookF/></span>
                               <span> <FaTwitter /></span>
                               <span> <FaLinkedinIn /></span>
                       
                          </div>
                      </div>
                   </div>
               </div>
               <div className='contact-form'>
                   <form className='form'>
                      <div className='contact-flex'>
                          <div className='name'>
                              <h4>YOUR NAME</h4>
                              <input type="text" className='input-box' />
                          </div>
                          <div className='contact-number'>
                              <h4>PHONE NUMBER</h4>
                              <input type="text" className='input-box' />
                          </div>
                      </div>
                      <h4>EMAIL</h4>
                      <input type="text" />
                      <h4>SUBJECT</h4>
                      <input type="text" />
                      <h4>MESSAGE</h4>
                       <textarea cols="30" rows="10"></textarea>
                       <button>SEND MESSAGE</button>
                   </form>
               </div>
          </div>
    </section>
  )
}

export default Contact
