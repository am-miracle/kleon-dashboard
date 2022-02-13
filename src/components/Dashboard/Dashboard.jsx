import React from 'react';
import {AiFillCaretDown, AiOutlineSearch, AiFillStar} from 'react-icons/ai';
import {MdMarkEmailUnread} from 'react-icons/md';
import {ImUsers} from 'react-icons/im';
import {HiDotsCircleHorizontal} from 'react-icons/hi';
import {BsCalendarFill, BsPlusSquare, BsSave2Fill} from 'react-icons/bs';
import barCharts from '../../assets/barCharts.svg'
import icon from '../../assets/icon.png'
import ringProgress2 from '../../assets/ringProgress2.svg'
import graph from '../../assets/graph.svg'
import ringProgress from '../../assets/ringProgress.svg';
import bgBox from '../../assets/bgBox.svg';
import { contacts } from '../../containers';


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
          <img src={bgBox} alt='bg' className='absolute top-0 right-0 w-28 h-28' />
        </div>
        <div className='bg-white p-5 shadow-sm rounded-md w-full'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-sm font-bold'>Conversation Statistics</h3>
              <p className='text-grey1 text-xs'>Lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <button className='px-3 py-1 text-sm text-primary bg-white shadow-sm hover:shadow-md rounded-md font-bold border-primary border flex items-center justify-evenly'>
              <BsSave2Fill className='text-primary h-3 w-3 mr-2' />Save report
            </button>
          </div>
          <img src={graph} alt='graph' className='mt-4' />
          <ul className='flex items-center gap-2 justify-evenly'>
            <li className='text-xs'>Sunday</li>
            <li className='text-xs'>Monday</li>
            <li className='text-xs'>Tuesday</li>
            <li className='text-xs'>Wednesday</li>
            <li className='text-xs'>Thursday</li>
            <li className='text-xs'>Friday</li>
            <li className='text-xs'>Saturday</li>
          </ul>
        </div>
      </div>
      <div className=''>
        <div className='flex columns-3xs'>
          <div className='shadow-md bg-white aspect-auto px-4 py-6 w-3/12'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='font-extrabold text-lg text-black -tracking-tighter'>Contacts</h3>
                <p className='text-grey1 text-xs'>You have 456 contacts</p>
              </div>
              <BsPlusSquare className='h-6 w-6 bg-primary text-white rounded-md cursor-pointer' />
            </div>
            <div className='mt-2'>
              {contacts.map((contact, index)=>(
                <div className='flex items-center gap-4 py-3' key={index}>
                  <div className='bg-grey2 w-8 h-8 rounded-md'></div>
                  <div className=''>
                    <p className='text-black text-sm font-cairo'>{contact.name}</p>
                    <p className='text-grey1 text-xs font-open'>{contact.title}</p>
                  </div>
                </div>
              ))}
              <button className='bg-grey3 text-primary w-full font-bold py-2 shadow-sm rounded-sm'>View More</button>
            </div>
          </div>
          <div className='shadow-md bg-white aspect-auto px-4 py-6 h-1/2 flex-auto'>
              <div className='flex justify-between items-center'>
                <div className=''>
                  <h3 className='font-extrabold text-lg text-black -tracking-tighter'>Recent Emails</h3>
                  <p className='text-grey1 text-xs'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex justify-between items-center gap-2'>
                  <p className='text-grey1 text-xs hover:text-primary flex justify-center items-center gap-2'>
                    <MdMarkEmailUnread className='w-4 h-4' />Important
                  </p>
                  <p className='text-grey1 text-xs hover:text-primary flex justify-center items-center gap-2'>
                    <ImUsers className='w-4 h-4' />Socials
                  </p>
                  <p className='text-grey1 text-xs hover:text-primary flex justify-center items-center gap-2'>
                    <HiDotsCircleHorizontal className='w-4 h-4' />Promotion
                  </p>
                </div>
              </div>
          </div>
        </div>
        <div className='columns-3xs mt-8'>
          <div className='w-full shadow-md bg-white aspect-auto'>1</div>
          <div className='w-full shadow-md bg-white aspect-auto'>2</div>
          <div className='w-full shadow-md bg-white aspect-auto'>3</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
