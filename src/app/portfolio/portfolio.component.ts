import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portFolioNameActive:string = 'all';
  filterBtns= [
    {filterName: 'All', name:'all'},
    {filterName: 'Web Development', name:'web-development'},
    {filterName: 'App Development', name:'app-development'},
    {filterName: 'UI UX Design', name:'ui-ux'}
  ];

  filterBoxes= [
    {filterBoxImage:'../../assets/Images/web-development.webp', filterBoxName:'Website Development', name:'web-development'},
    {filterBoxImage:'../../assets/Images/app-development.webp', filterBoxName:'Application Development', name:'app-development'},
    {filterBoxImage:'../../assets/Images/ui-ux.webp', filterBoxName:'UI UX Design', name:'ui-ux'}
  ];

  manageFilterBoxes:any = [];

  /*
  * this function is used for the manage the portfolio
  */
  handlePortfolioManage(value:string){
    this.portFolioNameActive = value;
    this.manageFilterBoxes = this.filterBoxes;
    if(value!=='all') this.manageFilterBoxes = this.filterBoxes.filter((val)=>val.name===value);
  }

  ngOnInit():void{
    this.manageFilterBoxes = this.filterBoxes;
  }
}
