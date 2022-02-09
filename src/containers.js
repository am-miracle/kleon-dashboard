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
    {id: 'dashboard', title: 'Dashboard', icon: dashboard , navLinks: '/dashboard' },
    {id: 'email', title: 'Email', icon: email , navLinks: '/email' },
    {id: 'chat', title: 'Chat', icon: comment , navLinks: '/chat' },
    {id: 'kanban', title: 'Kanban', icon: thumbnail , navLinks: '/kanban' },
    {id: 'contact', title: 'Contact', icon: contact , navLinks: '/contact' },
    {id: 'calendar', title: 'Calendar', icon: calendar , navLinks: '/calendar' },
    {id: 'invoices', title: 'Invoices', icon: invoice , navLinks: '/invoices' },
    {id: 'settings', title: 'Settings', icon: setting , navLinks: '/settings' },
]

const navs =[
    { icon: notification },
    { icon:  gift},
    { icon: check },
    { icon: folder },
]



export { navigations, navs };






