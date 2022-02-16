import { ReactComponent as Calendar} from './assets/calendar-silhouette.svg';
import { ReactComponent as Comment} from './assets/comment.svg';
import { ReactComponent as Contact} from './assets/contact.svg';
import { ReactComponent as Dashboard} from './assets/dashboard.svg';
import { ReactComponent as Email} from './assets/email.svg';
import { ReactComponent as Invoice} from './assets/invoice.svg';
import { ReactComponent as Setting} from './assets/setting.svg';
import { ReactComponent as Thumbnail} from './assets/thumbnail.svg';
import gift from './assets/gift.svg';
import check from './assets/check.svg';
import folder from './assets/folder.svg';
import notification from './assets/notification.svg';
import { AiFillStar, AiFillClockCircle } from 'react-icons/ai';
import { BsFillInboxFill } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';


const navigations = [
    {id: 'dashboard', title: 'Dashboard', icon: <Dashboard className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/', cName: 'nav-text'},
    {id: 'email', title: 'Email', icon: <Email className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/email', cName: 'nav-text' },
    {id: 'chat', title: 'Chat', icon: <Comment className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/chat', cName: 'nav-text' },
    {id: 'kanban', title: 'Kanban', icon: <Thumbnail className='w-6 h-6 fill-grey1 hover:fill-primary' />, navLinks: '/kanban', cName: 'nav-text' },
    {id: 'contact', title: 'Contact', icon: <Contact className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/contact', cName: 'nav-text' },
    {id: 'calendar', title: 'Calendar', icon: <Calendar className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/calendar', cName: 'nav-text' },
    {id: 'invoices', title: 'Invoices', icon: <Invoice className='w-6 h-6 fill-grey1 hover:fill-primary' /> , navLinks: '/invoice', cName: 'nav-text' },
    {id: 'settings', title: 'Settings', icon: <Setting className='w-6 h-6 fill-grey1 hover:fill-primary' />, navLinks: '/settings', cName: 'nav-text' },
]

const navs =[
    { name: 'notification', href: '#', current: true, icon: notification },
    { name: 'gift', href: '#', current: false, icon:  gift },
    { name: 'check', href: '#', current: false, icon: check },
    { name: 'folder', href: '#', current: false, icon: folder },
]

const contacts = [
    { name: 'Angela Moss', title: 'Marketing Manager', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
    { name: 'Andy Law', title: 'Graphic Designer', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
    { name: 'Benny Kenn', title: 'Software Engineer', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
    { name: 'Chynthia Lawra', title: 'CEO', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
    { name: 'Della Samantha', title: 'Head Manager', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
    { name: 'Evans John', title: 'Programmer', email: <MdEmail className='text-grey2 hover:text-primary w-4 h-4 float-right' />},
]

const emails = [
    {mail: 'kevinhard@mail.com', date: '24 min ago', title: 'How to manage your working time in this pandemic', subtitle1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' , subtitle2: 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...', starIcon: <AiFillStar className='bg-yellow2 rounded-md flex justify-center items-center text-yellow1 w-4 h-4' />, clock:<AiFillClockCircle className='text-grey2 w-4 h-4' />, attach: <ImAttachment className='text-blue-400 w-4 h-4' />, inbox: <BsFillInboxFill className='text-primary w-4 h-4'/>  },
    {mail: 'joannahsitepu@mail.com', date: 'Yesterday, at 11:24 AM', title: 'Dont forget to save your work after 10 min', subtitle1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' , subtitle2: 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...', starIcon: <AiFillStar className='text-grey1 w-4 h-4 rounded-md' />, clock:<AiFillClockCircle className='text-grey2 w-4 h-4' />,  inbox: <BsFillInboxFill className='text-grey2 w-4 h-4'/>  },
    {mail: 'machelgreen@mail.com', date: 'October 25th, 2020  08:55 AM', title: 'Important Document from Goverment', subtitle1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et' , subtitle2: 'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ...', starIcon: <AiFillStar className='text-grey1 w-4 h-4 rounded-md' />, clock:<AiFillClockCircle className='text-grey2 w-4 h-4' />, attach: <ImAttachment className='text-blue-400 w-4 h-4' />, inbox: <BsFillInboxFill className='text-grey2 w-4 h-4'/>  },
]

const categories = [
    {name: 'Primary (27%)', number: '763'},
    {name: 'Promotion (11%)', number: '321', color: 'text-yellow-500'},
    {name: 'Forum (22%)', number: '69'},
    {name: 'Socials (15%) ', number: '154'},
    {name: 'Spam (25%) ', number: '696'},
]

export { navigations, navs, contacts, emails, categories };






