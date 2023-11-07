import React from 'react'
import {links} from './Data';



const NavRightToLeft = ({rotationAngle}) => {


  const shouldReverseAnimation = rotationAngle > 90;
  return (
    <div className='custom-nav-top-style'>
    <ul className="flex">
    {links.map((link)=>{
      const {id,url,text,icon}=link;
      return(
        <li className="sm:mr-6 mr-4" id={id}>
        <a className="text-blue-500 hover:text-blue-800" href={url}>
         <span className='hide-md'>{text}</span> 
         <span className="show-icon">
          {icon}
          </span>
        </a>
      </li>
      )
    })}

    </ul>
  </div>
  )
}

export default NavRightToLeft
