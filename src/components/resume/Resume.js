import Title from '../layouts/Title';
import './Resume.css';

import React from 'react'

const Resume = () => {
  return (
    <section className='resume' id='resume'>
       <div className='resume-title'>
            <Title 
                 title='7+ YEARS OF EXPERIENCE'
                 des='My Resume'
            />
       </div>

       <ul className='resume-menu'>
          <li className='resume-li'>Education</li>
          <li className='resume-li'>ProfessionalSkills</li>
          <li className='resume-li'>Experience</li>
          <li className='resume-li'>Achievement</li>
       </ul>
    </section>
  )
}

export default Resume
