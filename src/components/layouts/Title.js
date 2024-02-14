import React from 'react';
import './Title.css';

const Title = ({title,des}) => {
  return (
    <div className='title'>
        <h3 className='subtitle'>{title}</h3>
        <h1 className='description'>{des}</h1>
    </div>
  )
}

export default Title
