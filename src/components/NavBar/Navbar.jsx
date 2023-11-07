import React, { useState } from 'react';
import logo from '../../assets/navicons/arrow.svg'
import NavRightToBottom from './NavRightToBottom';
import NavRightToLeft from './NavRightToLeft';


const NavBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(180);

  const handleclick = () => {
    setIsShown(current => !current);
    setRotationAngle(prevAngle => (prevAngle + 90) % 360); // Rotate by 45 degrees
  }

  const imgStyle = {
    width: 50,
    transform: `rotate(${rotationAngle}deg)`, // Apply rotation transform
    transition: 'transform 0.3s ease', // Add smooth transition
  };
 
  const showRightMenu=rotationAngle===90 ||rotationAngle===180;
  const showBottomMenu=rotationAngle===0 || rotationAngle===90;
  
  

  return (
    <nav>
      
      <div className='fixed'>
        <div className="flex  pt-5 pr-7   justify-end">
        {/* rotation menu in 90 digree */}
      <div className="sm:pr-5  sm:pt-2">
        {showRightMenu &&(
         <NavRightToLeft rotationAngle={rotationAngle}/>
        )}
      </div>
      


          <div className="animation-btn ">
        <button className='bg-[#eac81a]   shadow-md hover:shadow-xl  rounded-full w-10 h-10 ' onClick={handleclick}>
          <img src={logo} style={imgStyle } className='filter-green' alt="" />
        </button>
        </div>
      </div>
      {/* rotation menu with top bottom menu */}
      <div className='pt-5 pr-6 flex justify-end'>
      {showBottomMenu &&(
        
           <NavRightToBottom/>
        
      )}
      </div>
      </div>

      
    </nav>
   
  );
}

export default NavBar;
