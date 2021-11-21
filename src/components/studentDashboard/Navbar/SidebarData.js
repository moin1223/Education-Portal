import React from 'react';
import { AccessTimeRounded, Home, LibraryBooks,AutoStories} from '@material-ui/icons';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <Home/>,
    cName: 'nav-text'
  },
  {
    title: 'Routin',
    path: '/routin',
    icon: <AccessTimeRounded/>,
    cName: 'nav-text'
  },
  {
    title: 'Result',
    path: '/result',
    icon: < LibraryBooks/>,
    cName: 'nav-text'
  },
  {
  title: 'Shyllabus',
  path: '/shyllabus',
  icon: < LibraryBooks/>,
  cName: 'nav-text'
},
{
  title: 'Payment',
  path: '/payment',
  icon: < LibraryBooks/>,
  cName: 'nav-text'
}
 
];