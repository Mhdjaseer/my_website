import React from 'react'

import { AiFillHome } from "react-icons/ai";
import {FcAbout} from "react-icons/fc";
import {MdContactPhone,MdDownloading} from "react-icons/md";


const NavRightToLeft = () => {
  return (
    <div className='custom-nav-top-style'>
    <ul className="flex">
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Home
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          About
        </a>
      </li>
      <li className="mr-6">
        <a className="text-blue-500 hover:text-blue-800" href="#">
          Skills
        </a>
      </li>
      <li className="mr-6">
        <a className="text-gray-400 cursor-not-allowed" href="#">
          Projects
        </a>
      </li>
      <li className="mr-6">
        <a className="text-gray-400 cursor-not-allowed" href="#">
          Contact
        </a>
      </li>
    </ul>
  </div>
  )
}

export default NavRightToLeft
