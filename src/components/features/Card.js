import React from 'react';
import './Card.css';
import { HiArrowRight } from 'react-icons/hi'

const Card = ({title,des,icon}) => {
  return (
    <div className='card'>
       <div className='card-box'>
            <div className='card-icon'> {icon}</div>
            <div className='card-title'>{title}</div>
            <div className='card-des'>{des}</div>
            <div className='card-arrow-icon'><HiArrowRight /></div>
       </div>
    </div>
  )
}

export default Card
