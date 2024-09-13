import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";


const navItems = [
  { name: 'Home', id: '/' },
  { name: 'Our Process', id: 'process' },
  { name: 'Collection', id: 'collection' },
  { name: 'Reviews', id: 'reviews' }
];

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between items-center p-2 border-b w-full fixed top-0 flex-wrap px-10'>
      
      <div>
        <img src={Logo} alt="logo" className='max-w-56' />
      </div>

      <div className='text-4xl cursor-pointer md:hidden absolute top-5 z-10 right-10' onClick={() => setOpen(!open)}>
        {open ? <IoCloseSharp/> : <HiOutlineMenuAlt3/> }
      </div>


      <ul className='md:flex hidden w-2/5 justify-between'>
        {navItems.map(item => (
          <li key={item.id} className=''>
            <Link to={item.id} smooth={true} duration={500} className='cursor-pointer hover:text-teal' activeClass="text-teal">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className={`fixed top-0 left-0 w-full h-screetn bg-white transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden z-3`}>
        <ul className='pt-10'>
         {navItems.map(item => (
           <li key={item.id} className='p-3 text-center '>
             <Link to={item.id} smooth={true} duration={500} className='cursor-pointer hover:text-teal' activeClass="text-teal">
               {item.name}
             </Link>
           </li>
         ))}
       </ul>
       </div>
      
    </div>
  );
};

export default Header;
