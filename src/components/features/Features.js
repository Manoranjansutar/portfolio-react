import React from 'react';
import './Features.css'
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile,FaGlobe } from 'react-icons/fa';
import { SiProgress , SiAntdesign } from 'react-icons/si';
import { GiHamburgerMenu } from "react-icons/gi";

const Features = () => {
  return (
    <section className='features' id='features'>
       <Title title="FEATURES"  des="What I Do"/>
      <div className='card-container'> 
        <Card 
           title='Business Stratagy'
           des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
           icon={<GiHamburgerMenu />}
        />
        <Card 
           title='App Development'
           des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
           icon={<AiFillAppstore />}
        />
        <Card 
            title='SEO Optimisation'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
            icon={<SiProgress />}
        />
        <Card 
            title='Mobile Development'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'  
            icon={<FaMobile />}      
        />
        <Card 
            title='UX Design'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
            icon={<SiAntdesign />}
        />
        <Card 
            title='Hosting Websites'
            des='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad'
            icon={<FaGlobe />}
        />
      </div>
    </section>
  )
}

export default Features
