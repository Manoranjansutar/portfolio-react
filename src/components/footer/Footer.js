import { logo } from '../../assets';
import './Footer.css';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
        <div>
            <img src={logo} alt="" />
            <div className='social-container'>
                         
                          <div className='social'>
                               <span> <FaFacebookF/></span>
                               <span> <FaTwitter /></span>
                               <span> <FaLinkedinIn /></span>
                       
                          </div>
            </div>
        </div>
        <div className='footer-links'>
            <h3>QUICK LINK</h3>
            
                <li> <a href="">About</a></li>
                 <li><a href="">Portfolio</a></li>
                <li> <a href="">Services</a></li>
                 <li><a href="">Blog</a></li>
                 <li><a href="">Contact</a></li>
            
        </div>
        <div className='footer-links'>
        <h3>RESOURCES</h3>
             <li><a href="">Authentication</a></li>
            <li> <a href="">System Status</a></li>
             <li><a href="">Terms of service</a></li>
             <li><a href="">Pricing</a></li>
             <li><a href="">Over Right</a></li>
        </div>
        <div className='footer-links'>
        <h3>DEVELOPERS</h3>
            <li> <a href="">Documentation</a></li>
             <li><a href="">Authentication</a></li>
             <li><a href="">API Reference</a></li>
             <li><a href="">Support</a></li>
             <li><a href="">Open Source</a></li>
        </div>
    </section>
  )
}

export default Footer
  