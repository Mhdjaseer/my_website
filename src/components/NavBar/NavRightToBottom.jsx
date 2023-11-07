import React from 'react'
import { navRightToBottom } from './Data'



const NavRightToBottom = () => {
  return (
    <div className="left-to-bottom">
      <div class="grid gap-12 justify-end pt-2 ">
        {navRightToBottom.map((item)=>{
          const {id,url,text,icon}=item
          return(
            <div className='icon-container' key={id}>
              <div className="icon-container-next">
            <a href={url}  className='icon-container-link' title={text}>
              <span className="icon-stl">{icon}</span> 
            {/* <span className="hover-content">{text}</span>  */}
            </a>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default NavRightToBottom
