import React from 'react';
import './Banner.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn , FaReact ,FaFigma} from 'react-icons/fa';
import { SiTailwindcss , SiNextdotjs } from "react-icons/si";
import bannerImg from '../../assets/images/bannerImg.png';

const Banner = () => {

    const [text] = useTypewriter({
        words: ["Professional Coder" , "Full Stack Developer" , "UI Designer"],
        loop:true,
        typeSpeed:20,
        delaySpeed:2000,
        deleteSpeed:10,
    });



  return (

    <section className='banner' id='home'>
         <div className='banner-container'>
            <div className='banner-text'>
                <h4>WELCOME TO MY WORLD</h4>
                 <h1>Hi, I'm <span>John Doe</span></h1>
                 <h2 className='typewriter'>
                    a <span>{text}</span>
                    <Cursor 
                      cursorBlinking='false'
                      cursorStyle='|'
                      cursorColor='#ff014f'
                    />
                 </h2>
                 <p>
                 I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
                 </p>
            </div>
            <div className='social-links'>
                <div className='social-container'>
                    <h4>FIND ME IN</h4>
                    <div className='social'>
                        <span> <FaFacebookF/></span>
                        <span> <FaTwitter /></span>
                        <span> <FaLinkedinIn /></span>
                       
                    </div>
                </div>
                <div className='skill'>
                    <h4>BEST SKILL ON</h4>
                        <div className='social'>
                            <span> <FaFigma /></span>
                            <span> <SiTailwindcss /></span>
                            <span> <SiNextdotjs /></span>
                            <span> <FaReact /></span>
                        </div>
                </div>
            </div>
         </div>
         <div className='banner-image'>
             <img src={bannerImg} alt="" />
             <div className='black-box'></div>
         </div>
    </section>
  )
}

export default Banner
