import React from 'react'

import { AiFillHome } from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {MdContactPhone,MdDownloading} from "react-icons/md";


const NavRightToLeft = ({rotationAngle}) => {


  const shouldReverseAnimation = rotationAngle > 90;
  return (
    <div className='custom-nav-top-style'>
    <ul className="flex">
      <li className="sm:mr-6 mr-4">
        <a className="text-blue-500 hover:text-blue-800" href="#">
         <span className='hide-md'>Home</span> 
         <span className="show-icon"><AiFillHome/></span>
        </a>
      </li>
      <li className="sm:mr-6 mr-4">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          <span className='hide-md'>About</span>
          <span className="show-icon">ji</span>
        </a>
      </li>
      <li className="sm:mr-6 mr-4">
        <a className="text-blue-500 hover:text-blue-800" href="#">
         <span className='hide-md'>Skills</span>
         <span className="show-icon">ji</span>
        </a>
      </li>
      <li className="sm:mr-6 mr-4">
        <a className="text-gray-400 cursor-not-allowed" href="#">
          <span className='hide-md'>Projects</span>
          <span className="show-icon">ji</span>
          
        </a>
      </li>
      <li className="sm:mr-6 mr-4">
        <a className="text-gray-400 cursor-not-allowed" href="#">
           <span className='hide-md'>Contact</span>
           <span className="show-icon">ji</span>
        </a>
      </li>
    </ul>
  </div>
  )
}

export default NavRightToLeft
