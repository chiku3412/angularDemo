import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public portFolioNameActive = 'web';

  technoBtns = [
    {technoName: 'Web Development', technoId:'web'},
    {technoName: 'Application Development',technoId:'app'},
    {technoName: 'Database', technoId:'database'},
    {technoName: 'Framework', technoId:'frameWork'}
  ]

  technologyImage = [
    {name:'Web Development', technoId:'web'},
    {name:'Application Development', technoId:'app'},
    {name:'DataBase', technoId:'database'},
    {name:'FrameWork', technoId:'frameWork'}
  ]

  manageTechnology = [
    {img: '../../assets/Images/Techno/angular.png', technoId:'web', technoName:'Angular'},
    {img: '../../assets/Images/Techno/js.png', technoId:'web', technoName:'JS'},
    {img: '../../assets/Images/Techno/php.png', technoId:'web',technoName:'PHP'},
    {img: '../../assets/Images/Techno/python.png', technoId:'web', technoName:'Python'},
    {img: '../../assets/Images/Techno/wp.png', technoId:'web',technoName:'WordPress'},
    {img: '../../assets/Images/Techno/magento.png', technoId:'web',technoName:'Magento'},
    {img: '../../assets/Images/Techno/android.png', technoId:'app',technoName:'Android'},
    {img: '../../assets/Images/Techno/flutter-logo.png', technoId:'app',technoName:'Flutter'},
    {img: '../../assets/Images/Techno/ionic.png', technoId:'app',technoName:'Ionic'},
    {img: '../../assets/Images/Techno/ios.png', technoId:'app',technoName:'IOS'},
    {img: '../../assets/Images/Techno/react_native3.png', technoId:'app',technoName:'React Native'},
    {img: '../../assets/Images/Techno/my-sql.png', technoId:'database',technoName:'MySql'},
    {img: '../../assets/Images/Techno/sql-server.png', technoId:'database',technoName:'Sql Server'},
    {img: '../../assets/Images/Techno/sqlight.png', technoId:'database',technoName:'Sqlight'},
    {img: '../../assets/Images/Techno/sql.png', technoId:'database',technoName:'Sql'},
    {img: '../../assets/Images/Techno/cakephp.png', technoId:'frameWork',technoName:'CakePHP'},
    {img: '../../assets/Images/Techno/code.png', technoId:'frameWork',technoName:'Code'},
    {img: '../../assets/Images/Techno/laravel.png', technoId:'frameWork',technoName:'Laravel'},
    {img: '../../assets/Images/Techno/odoo.png', technoId:'frameWork',technoName:'ODOO'},
    {img: '../../assets/Images/Techno/net.png', technoId:'frameWork',technoName:'.Net'}
  ]

  manageTechnologyFilter:any = [];

  handleTechnology(value:string) {
    this.portFolioNameActive = value;
    this.manageTechnologyFilter = this.manageTechnology;
    this.manageTechnologyFilter = this.manageTechnology.filter((val)=>val.technoId===value);
  }

  ngOnInit():void{
    //It's called First before component load
    this.manageTechnologyFilter = this.manageTechnology;
    this.handleTechnology('web')
    //this.manageTechnologyFilter = this.manageTechnology.filter((val)=>val.technoId==='web');
  }
  ngOnChanges(change:SimpleChange):void{
    //It's called when input value change
    console.log(change.currentValue)
  }
  ngAfterViewInit():void{
    //It's called after DOM load
  }
  ngOnDestroy():void{
 //It's called after cmponent distroy
  }
}
