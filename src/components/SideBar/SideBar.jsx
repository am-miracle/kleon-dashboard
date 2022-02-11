import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { navigations } from '../../containers';
import '../Navbar/Navbar.css';
import { IconContext } from 'react-icons';

function SideBar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
         <div className='h-screen w-52 bg-white text-grey2 shadow-lg'>
            <nav className= 'nav-menu flex-col flex'>
            <h3 className='text-base text-grey2 uppercase p-3'>main menu</h3>
            <ul className='nav-menu-items h-auto p-0' onClick={showSidebar}>
                {navigations.map((item) => {
                return (
                    <li key={item.id} className='list-none font-open '>
                        <Link to={item.navLinks} className="py-2 pr-4 flex flex-row justify-center w-full h-14 items-center">
                            <img src={item.icon} alt={item.title} className='flex-[30%] w-8 h-8 grid place-items-center' />
                            <span className="flex-[70%]">{item.title}</span>
                        </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </div>
     </IconContext.Provider>
    </>
  );
}

export default SideBar;