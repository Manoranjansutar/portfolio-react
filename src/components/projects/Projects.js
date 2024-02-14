import React from 'react';
import './Projects.css'
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { FaGithub , FaGlobe } from "react-icons/fa";
import projectImg1 from '../../assets/images/projects/projectOne.jpg';
import projectImg2 from '../../assets/images/projects/projectTwo.jpg';
import projectImg3 from '../../assets/images/projects/projectThree.jpeg';


const Projects = () => {
  return (
   <section className='project'>
        <div className='project-title'>
          <Title 
             title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK'
             des='My Projects'
          />
        </div>
        <div className='project-container'>
            
            <ProjectCard 
                 image={projectImg1}
                 title='SOCIAL MEDIA CLONE'
                 img1={<FaGithub />}
                 img2={<FaGlobe />}
                 des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
              <ProjectCard 
                  image={projectImg2}
                  title='E-COMMERCE WEBSITE'
                  img1={<FaGithub />}
                  img2={<FaGlobe />}
                  des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
              <ProjectCard 
                   image={projectImg3}
                  title='CHATTING APP'
                  img1={<FaGithub />}
                  img2={<FaGlobe />}
                  des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
                <ProjectCard 
                   image={projectImg3}
                  title='CHATTING APP'
                  img1={<FaGithub />}
                  img2={<FaGlobe />}
                  des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
               <ProjectCard 
                 image={projectImg1}
                 title='SOCIAL MEDIA CLONE'
                 img1={<FaGithub />}
                 img2={<FaGlobe />}
                 des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
              <ProjectCard 
                  image={projectImg2}
                  title='E-COMMERCE WEBSITE'
                  img1={<FaGithub />}
                  img2={<FaGlobe />}
                  des='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!'
              />
            
        </div>
   </section>
  )
}

export default Projects
