import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
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
    { label: 'Career', link: 'career.html',isActive:false,id:'career' }
  ];

  isScrolled = false;

  constructor(
    public headerService: HeaderService
  ) { }

  // add active class on click
  // headerActive(menuName:string) {
  //   this.menuItems.forEach(element => {
  //     // if(element.label === menuName) element.isActive = true;
  //     // else element.isActive = false;
  //     element.isActive = element.label === menuName?true:false;
  //     // console.log(menuName);
  //   });
  // }

  // only scroll
  // scrollTo(section: string): void {
  //   const element = document.getElementById(section);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  // }

  // both active and on scroll
  scrollTo(menuItem: any): void {
    menuItem.isActive = true;

    this.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.isActive = false;
      }
    });

    const element = document.getElementById(menuItem.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveMenuItem();
    this.isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
  }

  private updateActiveMenuItem(): void {
    // Iterate through menu items and set isActive based on scroll position
    this.menuItems.forEach(item => {
      const sectionElement = document.getElementById(item.id);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const threshold = viewportHeight * 0.2; // 80% of viewport height
  
        if (rect.top <= threshold && rect.bottom >= threshold) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      }
    });
  }
}