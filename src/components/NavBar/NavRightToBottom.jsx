import React from 'react'
import {PiHandPalmDuotone} from 'react-icons/pi'
import {BsFillMicFill,BsFillMouse2Fill} from 'react-icons/bs'
import {ImEye} from 'react-icons/im'



const NavRightToBottom = () => {
  return (
    <div class="grid gap-12 justify-end pt-2 ">
        <div className='icon-container'>
          <a href="#"  >
           <PiHandPalmDuotone size={25}/>
           </a>
        </div>
        <div className='icon-container'>
        <a href="#"  >
            <BsFillMicFill size={25}/>
            </a>
        </div>
        
        <div className='icon-container'>
          <a href="#">
          <ImEye size={25}/>
          </a>
          
        </div>
        <div className='icon-container'>
          <a href="#">
          <BsFillMouse2Fill size={25}/>
          </a>
          
        </div>
    </div>
  )
}

export default NavRightToBottom
