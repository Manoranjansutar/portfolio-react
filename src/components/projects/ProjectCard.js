import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({image,title,img1,img2,des}) => {
  return (
    <div className='projects'>
       <div className='project-details'>
          <div className='project-image'>
            <img src={image} alt="" />
          </div>

          <div className='flex'>
           <div className='pc-title'>  {title}</div>
              <div className='image'>
                  <div className='img-rounded'>{img1}</div>
                  <div className='img-rounded'> {img2}</div>
              </div>
         </div>

          <div className='project-description'>
           {des}
         </div>
       </div>
    </div>
  )
}

export default ProjectCard
