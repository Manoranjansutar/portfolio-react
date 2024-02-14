import './Navbar.css';
import {logo} from '../../assets/index'
import { navlinksdata } from '../../constants';
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='logo'>
             <img src={logo} alt="" />
         </div>
         <div>
             <ul className='menu'>
                {
                    navlinksdata.map( ({_id,title,link}) =>(
                        <li key={_id}>
                            <Link
                              activeClass='active'
                              to= {link}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              >
                              {title}
                            </Link>
                        </li>
                    ))
                }
             </ul>
         </div>
    </div>
  )
}

export default Navbar
