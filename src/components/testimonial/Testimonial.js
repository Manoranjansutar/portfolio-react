import Title from '../layouts/Title';
import './Testimonial.css';
import React from 'react';
import Slider from "react-slick";
import testimonialOne  from '../../assets/images/testmonial/testimonialOne.png';
// import testimonialTwo  from '../../assets/images/testmonial/testimonialTwo.png';
import quote from '../../assets/images/testmonial/quote.png';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className='testimonial' id='testimonial'>
        <div className='testimonial-title'>
            <Title  title='WHAT CLIENTS SAY' des='Testimonial'/>
        </div>

        <div className='testimonial-container'>
       
            <Slider {...settings}>
                 <div className='testimonial-flex'>
                      <div className='testimonial-profile'>
                           <img src={testimonialOne} alt="" />
                           <h3><span>BOUND-TROLOLA</span></h3>
                           <h1>Jone Duone Joe</h1>
                           <h5>Operation Officer</h5>
                      </div>
                      <div className='testimonial-comments'>
                          <div className='quote-img'>
                            <img src={quote} alt="" />
                            <div></div>
                          </div>
                          <div className='comments'>
                               <h4>Travel Mobile App Design.</h4>
                               <p>via Upwork - Mar 4, 2015 - Aug 30, 2021 test</p>
                               <div className='rating'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                               </div>
                               <hr className='hr' />
                               <p className='comments-para'>
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolorum, eos natus ipsum numquam veniam officia necessitatibus ratione quos debitis exercitationem repudiandae facilis id neque nihil accusantium perspiciatis repellat? Iste.
                               </p>
                          </div>
                      </div>
                 </div>

                 
         
           </Slider>

        </div>
        

    </section>
  )
}

export default Testimonial
