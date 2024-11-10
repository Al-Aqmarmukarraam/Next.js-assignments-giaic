import React from 'react';
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
      <div className='text-xl font-medium'>AL-AQMAR</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
              <li className='menuLink'><a href='#Hero'>Home</a></li>
              <li className='menuLink'><a href='#About'>About</a></li>
              <li className='menuLink'><a href='#Projects'>Projects</a></li>
              <li className='menuLink'><a href='#Skills'>Skills</a></li>
              <li className='menuLink'><a href='#Contact'>Contact</a></li>
            </ul>
            <TiThMenuOutline className='md:hidden' size={30}/>
            </div>
        
       </div>
  )
}
export default Navbar

