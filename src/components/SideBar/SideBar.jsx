import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigations } from '../../containers';
import { IconContext } from 'react-icons';
import arrow from '../../assets/arrow.svg'
import vector from '../../assets/vector.svg';
import './SideBar.css';
import {ReactComponent as Setting} from '../../assets/setting.svg';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SideBar() {
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar); onClick={showSidebar}

  return (
    <>
      <>
         <div className='h-full w-40 lg:w-56 bg-white text-grey2 shadow4'>
            <nav className= 'nav-menu flex-col flex'>
            <h3 className='px-8 text-base text-grey1 uppercase py-3'>main menu</h3>
            <ul className='nav-menu-items h-auto p-0'>
                {navigations.map((item) => {
                return (
                    <li key={item.id}
                      className={classNames(
                        item.current ? 'text-primary fill-grey1' : 'text-grey fill-grey1 hover:text-primary hover:fill-primary',
                        'px-3 py-2 text-sm font-medium font-cairo'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                        <Link to={item.navLinks} className="flex flex-row justify-center w-full items-center">
                            {item.icon}
                            <span className="flex-[70%] text-base">{item.title}</span>
                        </Link>
                    </li>
                );
                })}
            </ul>
            <div className='px-6'>
                <div className='w-full my-10 p-4 rounded-xl color-l'>
                  <img className='h-8 w-8' alt='block' src={vector} />
                <h3 className='font-cairo leading-6 text-white font-bold my-2'>
                  <p>Increase your</p>
                  <p>work with kanban</p>
                </h3>
                  <img className='h-8 w-8 hover:mx-6' alt='block' src={arrow} />
                </div>
                </div>
            </nav>
        </div>
     </>
    </>
  );
}

export default SideBar;