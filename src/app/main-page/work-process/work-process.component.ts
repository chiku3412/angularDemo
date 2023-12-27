import { Component } from '@angular/core';

@Component({
  selector: 'app-work-process',
  templateUrl: './work-process.component.html',
  styleUrls: ['./work-process.component.scss']
})
export class WorkProcessComponent {
  processItem = [
    {icon:'fa-solid fa-file-signature', processName:'Requirement Gathering', processDescription:'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.', processNumber:'01'},
    {icon:'fa-solid fa-pen-ruler', processName:'UI/UX Design', processDescription:'We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.', processNumber:'02'},
    {icon:'fa-solid fa-file-code', processName:'Prototype', processDescription:'After designing, you will get your prototype, which will be sent ahead for the development process for the product.', processNumber:'03'},
    {icon:'fa-solid fa-database', processName:'Development', processDescription:'Development of mobile application/web/blockchain started using latest tools and technologies with transparency.', processNumber:'04'},
    {icon:'fa-solid fa-medal', processName:'Quality Assurance', processDescription:'Hyperlink values quality and provides 100% bug free application with no compromisation in it.', processNumber:'05'},
    {icon:'fa-solid fa-right-left', processName:'Deployment', processDescription:'After trial and following all processes, your app is ready to launch on the App store or Play Store.', processNumber:'06'},
    {icon:'fa-solid fa-headset', processName:'Support & Maintenance', processDescription:'Our company offers you all support and the team is always ready to answer every query after deployment.', processNumber:'07'}
  ];
}
