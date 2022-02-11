import calendar from './assets/calendar-silhouette.svg';
import check from './assets/check.svg';
import comment from './assets/comment.svg';
import contact from './assets/contact.svg';
import dashboard from './assets/dashboard.svg';
import email from './assets/email.svg';
import folder from './assets/folder.svg';
import invoice from './assets/invoice.svg';
import notification from './assets/notification.svg';
import setting from './assets/setting.svg';
import thumbnail from './assets/thumbnail.svg';
import gift from './assets/gift.svg';



const navigations = [
    {id: 'dashboard', title: 'Dashboard', icon: dashboard , navLinks: '/', cName: 'nav-text'},
    {id: 'email', title: 'Email', icon: email , navLinks: '/email', cName: 'nav-text' },
    {id: 'chat', title: 'Chat', icon: comment , navLinks: '/chat', cName: 'nav-text' },
    {id: 'kanban', title: 'Kanban', icon: thumbnail , navLinks: '/kanban', cName: 'nav-text' },
    {id: 'contact', title: 'Contact', icon: contact , navLinks: '/contact', cName: 'nav-text' },
    {id: 'calendar', title: 'Calendar', icon: calendar , navLinks: '/calendar', cName: 'nav-text' },
    {id: 'invoices', title: 'Invoices', icon: invoice , navLinks: '/invoice', cName: 'nav-text' },
    {id: 'settings', title: 'Settings', icon: setting , navLinks: '/settings', cName: 'nav-text' },
]

const navs =[
    { name: 'notification', href: '#', current: true, icon: notification },
    { name: 'gift', href: '#', current: false, icon:  gift },
    { name: 'check', href: '#', current: false, icon: check },
    { name: 'folder', href: '#', current: false, icon: folder },
]



export { navigations, navs };






