import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerMenu: string = 'home'

  menuItems = [
    { label: 'Home', link: '#home', isActive:true, id:'home' },
    { label: 'About', link: '#about', isActive:false, id:'about' },
    { label: 'Services', link: '#service', isActive:false,id:'service',
    subItems: [
        { label: 'Web Development', link: '#service' },
        { label: 'Angular Development', link: '#service' },
        { label: 'UI UX Design', link: '#service' },
        { label: 'Mobile App Development', link: '#service' },
        { label: 'E-commerce Development', link: '#service' },
        { label: 'React JS Development', link: '#service' }
      ]
    },
    { label: 'Portfolio', link: '#portfolio',isActive:false,id:'portfolio' },
    { label: 'Work Process', link: '#workprocess',isActive:false,id:'workProcess' },
    { label: 'Technology', link: '#technology',isActive:false,id:'technology' },
    { label: 'Contact Us', link: '#contactus',isActive:false,id:'contactUs' },
    { label: 'Career', link: '/career',isActive:false,id:'career' }
  ];

  constructor() { }
}
