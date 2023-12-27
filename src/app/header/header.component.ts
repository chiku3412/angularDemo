import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 

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

    this.headerService.menuItems.forEach(item => {
      if (item !== menuItem) {
        item.isActive = false;
      }
    });

    const element = document.getElementById(menuItem.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  activeHeaderMenu(id:string) {
    this.headerService.headerMenu = id;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveMenuItem();
    this.isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
  }

  private updateActiveMenuItem(): void {
    // Iterate through menu items and set isActive based on scroll position
    this.headerService.menuItems.forEach(item => {
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