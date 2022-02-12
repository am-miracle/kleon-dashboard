import React from 'react';
import {AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai';
import {BsCalendarFill, BsSave2Fill} from 'react-icons/bs';
import barCharts from '../../assets/barCharts.svg'
import icon from '../../assets/icon.png'
import ringProgress2 from '../../assets/ringProgress2.svg'
import graph from '../../assets/graph.svg'
import ringProgress from '../../assets/ringProgress.svg';
import bgBox from '../../assets/bgBox.svg';


const Dashboard = () => {
  return (
    <div className='h-full w-full px-6 py-3 font-cairo relative'>
      <div className='flex justify-between items-center w-full flex-auto'>
        <div>
          <h2 className='text-xl pt-5 font-bold'>Dashboard</h2>
          <p className='text-grey1'>Lorem ipsum dolor sit amet</p>
        </div>
        <div className='flex justify-center gap-6 items-center'>
          <div className='relative shadow-md hover:shadow-lg flex items-center'>
            <input 
              placeholder='Search here'
              type='text'
              className='py-3 px-8 shadow1'
            />
            <AiOutlineSearch className='absolute left-2 text-primary'/>
          </div>
          <div className='flex bg-white px-2 py-2 items-center shadow-md hover:shadow-lg'>
            <BsCalendarFill className='text-primary' />
            <div className='px-2'>
              <h3 className='text-sm'>Change Period</h3>
              <p className='text-xs text-grey1'>August 28th - October 28th, 2020</p>
            </div>
            <AiFillCaretDown className='text-grey1 font-bold' />
          </div>
        </div>
      </div>
      <div className='flex justify-between items-center w-full mt-5'>
        <div className='shadow-sm bg-white flex gap-5 p-7 rounded-md justify-center items-center'>
          <img src={ringProgress} alt='ring' className='w-16 h-16' />
          <div>
            <h2 className='font-extrabold text-lg text-black -tracking-tighter'>215</h2>
            <p className='text-grey1 text-xs'>New Emails</p>
          </div>
        </div>
        <div className='shadow-sm bg-white flex gap-5 p-7 rounded-md justify-center items-center'>
        <img src={ringProgress2} alt='ring' className='w-16 h-16' />
          <div>
            <h2 className='font-extrabold text-lg text-black -tracking-tighter'>84</h2>
            <p className='text-grey1 text-xs'>Unread Emails</p>
          </div>
        </div>
        <div className='shadow-sm bg-white flex gap-5 p-7 rounded-md justify-center items-center'>
        <img src={icon} alt='ring' className='w-16 h-16' />
          <div>
            <h2 className='font-extrabold text-lg text-black -tracking-tighter'>59</h2>
            <p className='text-grey1 text-xs'>Important Emails</p>
          </div>
        </div>
        <div className='shadow-sm bg-white flex gap-5 px-7 py-[18px] rounded-md justify-center items-center'>
          <img src={barCharts} alt='ring' className='w-16 h-16' />
          <div>
            <div>
              <h3 className='font-extrabold text-lg text-black -tracking-tighter'>2,841</h3>
              <p className='text-grey1 text-xs'>Promotion Emails</p>
            </div>
            <div>
              <h3 className='font-extrabold text-lg text-black -tracking-tighter'>1,456</h3>
              <p className='text-grey1 text-xs'>Spam Emails</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center w-full gap-3 mt-5'>
        <div className='bg-white p-5 shadow-sm rounded-md w-full relative'>
          <h2 className='font-extrabold text-3xl text-black -tracking-tighter'>8,642</h2>
          <h3 className='text-sm font-bold mt-2'>Total emails that you have</h3>
          <p className='text-grey1 text-xs mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p className='text-grey1 text-xs leading-normal'>eiusmod tempor incididunt ut labore et dolore</p>
          <div className='flex gap-3 items-center mt-5'>
            <button className='px-3 py-1 text-sm text-white bg-primary shadow-sm hover:shadow-md rounded-md font-semibold'>+ Compose Email</button>
            <button className='px-8 py-1 text-sm text-grey1 bg-white shadow-sm hover:shadow-md rounded-md font-semibold'>Go to inbox</button>
          </div>
          <img src={bgBox} alt='bg' className='absolute top-0 right-0 w-36 h-36' />
        </div>
        <div className='bg-white p-5 shadow-sm rounded-md w-full'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-sm font-bold'>Conversation Statistics</h3>
              <p className='text-grey1 text-xs'>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <button className='px-3 py-1 text-sm text-primary bg-white shadow-sm rounded-md font-bold border-primary border flex items-center justify-evenly'>
              <BsSave2Fill className='text-primary h-3 w-3 mr-2' />Save report
            </button>
          </div>
          <img src={graph} alt='graph' className='mt-4' />
          <ul className='flex items-center gap-2 text-xs'>
            <li className='text-xs'>Sunday</li>
            <li>Monday</li>
            <li>Tuesday</li>
            <li>Wednesday</li>
            <li>Thursday</li>
            <li>Friday</li>
            <li>Saturday</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
