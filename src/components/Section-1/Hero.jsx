import React from 'react';
import profimg from '../../assets/Profile/astg.png'
import backimg from '../../assets/Profile/9309061.jpg'

const Hero = () => {
  return (
    <div className="hero">
    <div className="grid grid-cols-1 md:grid-cols-2 ">
    <div className="profile-grid  flex items-center text-left md:pl-36 pt-24  md:pt-0 ">
        <div>
        <h1 className='font-semibold text-2xl pt-1 md:text-5xl pl-3 md:pl-0 python'>HI,</h1>
        
        <h3 className='font-bold text-3xl md:text-7xl  pt-1 pl-3 md:pl-0'>I`AM jASEER</h3>
        <p className='pt-1  sm:text-sm md:text-lg  pl-3 md:pl-0'>Seasoned <span className='python'>Full-Stack Python </span> Developer Crafting with <span className='reactjs'>React.js</span>
        </p>
        <hr className=' border-2 border-black ' /> 
        <div className="pl-3 pt-2 md:pl-0">
          <button className="button-52" role="button">Download Resume</button>
        </div>

        </div>
        
        
      </div>
      <div className="profile-grid backprofile">
        <img src={profimg} alt="Image 2" className="w-full h-full" />
      </div>
    </div>
  </div>
  
  )
}

export default Hero
