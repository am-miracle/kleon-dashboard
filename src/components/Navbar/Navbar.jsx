/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { navs } from '../../containers';
import logo from '../../assets/logo.png';
import unitedState from '../../assets/united-states.png';
import { AiFillCaretDown } from 'react-icons/ai'


const Navbar = () => {

  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="w-2/12 flex items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src={logo}
                  alt="brand pic"
                />
              </div>
              <div className="">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className='flex justify-between items-center w-full pr-6'>
                <div className=''>
                  <a href='/'className="font-cairo text-xs text-primary uppercase hover:underline font-bold">other menus</a>
                </div>
                <div className="hidden sm:block sm:ml-6 px-8">
                  <div className="flex space-x-2">
                    {navs.map((item) => (
                      <a key={item.name} href={item.href}>
                        <img 
                          alt={item.name}
                          src={item.icon}
                          className='h-9 w-9'
                        />
                      </a>
                    ))}
                  </div>
                </div>
                <div className='flex justify-center items-center px-2 py-2 hover:bg-grey2 rounded-full'>
                  <img src={unitedState} alt='flag' className='h-6 w-6' />
                  <a href='/'className="font-cairo text-xs text-black uppercase px-4">english</a>
                  <AiFillCaretDown />
                </div>
              </div>
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </Menu.Button>
                </div>
              </Menu>
            </div>
          </div>
        </div>
      </>
    )}
  </Disclosure>
  );
};

export default Navbar;


