import React from 'react';
import {AiFillCaretDown, AiOutlineSearch} from 'react-icons/ai';
import {MdMarkEmailUnread} from 'react-icons/md';
import {ImUsers} from 'react-icons/im';
import {HiDotsCircleHorizontal} from 'react-icons/hi';
import {BsCalendarFill, BsPlusSquare, BsSave2Fill, } from 'react-icons/bs';
import barCharts from '../../assets/barCharts.svg'
import icon from '../../assets/icon.png'
import ringProgress2 from '../../assets/ringProgress2.svg'
import graph from '../../assets/graph.svg'
import ringProgress from '../../assets/ringProgress.svg';
import ringProgress3 from '../../assets/ringProgress3.svg';
import bgBox from '../../assets/bgBox.svg';
import { contacts, emails, categories } from '../../containers';


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
        <div className='flex gap-4 mt-8'>
          <div className='shadow-md bg-white px-4 py-6 w-72'>
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='font-extrabold text-lg text-black -tracking-tighter'>Contacts</h3>
                <p className='text-grey1 text-xs'>You have 456 contacts</p>
              </div>
              <BsPlusSquare className='h-6 w-6 bg-primary text-white rounded-md cursor-pointer' />
            </div>
            <div className='mt-2'>
              {contacts.map((contact, index)=>(
                <div className='flex justify-between items-center' key={index}>
                  <div className='flex items-center gap-2 py-3'>
                    <div className='bg-grey2 w-8 h-8 rounded-md'></div>
                    <div>
                      <p className='text-black text-sm font-cairo'>{contact.name}</p>
                      <p className='text-grey1 text-xs font-open'>{contact.title}</p>
                    </div>
                  </div>
                  {contact.email}
                </div>
              ))}
              <button className='bg-primarySoft text-primary w-full font-bold py-2 shadow-sm rounded-sm'>View More</button>
            </div>
          </div>
          <div className='shadow-md bg-white px-4 py-6 w-full h-full'>
              <div className='flex justify-between items-center'>
                <div className=''>
                  <h3 className='font-extrabold text-lg text-black -tracking-tighter'>Recent Emails</h3>
                  <p className='text-grey1 text-xs'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='flex justify-between items-center gap-8 border-b border-grey2 pb-3'>
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
              <div className='mt-8'>
                {emails.map((email, index)=>(
                  <div key={index} className='flex justify-between items-center'>
                    <div className='pb-3 flex items-start justify-center gap-2'>
                      {email.starIcon}
                      <div className='bg-grey2 w-8 h-8 rounded-md'></div>
                      <div className=''>
                        <p className='text-xs text-grey1 font-cairo'>{email.mail} . {email.date}</p>
                        <h2 className='text-sm font-semibold font-cairo pt-2 pb-3'>{email.title}</h2>
                        <p className='text-xs text-grey1 font-open'>{email.subtitle2}</p>
                        <p className='text-xs text-grey1 font-open'>{email.subtitle2}</p>
                      </div>
                    </div>
                    <div className='flex items gap-4'>
                        {email.inbox}
                        {email.clock}
                        {email.attach}
                      </div>
                  </div>
                ))}
              </div>
          </div>
        </div>

        <div className='flex gap-3'>
          <div className='bg-white rounded-sm shadow-shadow-1 px-4 py-6 w-72 mt-7'>
            <h3 className='text-base font-cairo font-bold'>Most Tag Used</h3>
            <p className='text-grey1 text-xs font-open'>Lorem ipsum dolor sit amet</p>
            <div className='mt-6 font-cairo'>
              <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-xs text-primary'>#business</p>
                <p className='text-xs text-grey1'>452 times</p>
              </div>
            </div>
            <div className='my-6 font-cairo'>
              <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-xs text-primary'>#meeting</p>
                <p className='text-xs text-grey1'>97 times</p>
              </div>
            </div>
            <div className='font-cairo'>
              <div className=" bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <div className='flex justify-between items-center'>
                <p className='font-bold text-xs text-primary'>#corporate</p>
                <p className='text-xs text-grey1'>61 times</p>
              </div>
            </div>
            <div>
              <p className='text-base text-grey1 mt-4'>Other tags</p>
              <ul className='flex items-center flex-wrap gap-2 mt-2'>
                <li className='text-xs px-4 py-2 text-primary bg-primarySoft rounded-md'>#teamwork</li>
                <li className='text-xs px-4 py-2 text-primary bg-primarySoft rounded-md'>#design</li>
                <li className='text-xs px-4 py-2 text-primary bg-primarySoft rounded-md'>#projectmanagement</li>
                <li className='text-xs px-4 py-2 text-primary bg-primarySoft rounded-md'>#16+</li>
              </ul>
            </div>
          </div>
          <div className='bg-white rounded-sm shadow-shadow-1 px-4 py-6 w-72'>
            <h3 className='text-base font-cairo font-bold'>Email Categories</h3>
            <p className='text-grey1 text-xs font-open'>Lorem ipsum dolor sit amet</p>
            <div className='flex items-center justify-center'>
              <img src={ringProgress3} alt='ring' className='mt-4 h-1/2 w-1/2' />
            </div>
            <p className='text-grey1 mt-4'>Legend</p>
            {categories.map((category, index)=>(
              <div key={index} className='flex justify-between items-center py-2 font-cairo'>
                <div className='flex gap-2 items-center'>
                  <div className='h-3 w-3 bg-primary rounded-md'></div>
                  <p className='text-primary text-xs'>{category.name}</p>
                </div>
                <p className='text-base font-bold'>{category.number}</p>
              </div>
            ))}
          </div>
          <div className='bg-white rounded-sm shadow-shadow-1 px-4 py-6 w-4/6'>
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='text-base font-cairo font-bold'>Pinned Emails</h3>
                  <p className='text-grey1 text-xs font-open'>Lorem ipsum dolor sit amet</p>
                </div>
                <button className='px-3 py-1 text-sm text-primary bg-white shadow-sm hover:shadow-md rounded-md font-bold border-primary border flex items-center justify-evenly'>
                  <BsSave2Fill className='text-primary h-3 w-3 mr-2' />Save report
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
