import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent {
  selects = [
    {
      options: [
        { label: 'Category - All', value: 'all', default: true },
        { label: 'IT', value: 'it' },
        { label: 'Marketing', value: 'marketing' }
      ],
      selectedOption: 'all'
    },
    {
      options: [
        { label: 'Type - All', value: 'all', default: true },
        { label: 'Part Time', value: 'part-time' },
        { label: 'Full Time', value: 'full-time' },
        { label: 'Freelancing', value: 'freelancing' },
        { label: 'Hybrid', value: 'hybrid' }
      ],
      selectedOption: 'all'
    },
    {
      options: [
        { label: 'Location - All', value: 'all', default: true },
        { label: 'Surat', value: 'surat' },
        { label: 'Ahmadabad', value: 'ahmadabad' },
        { label: 'Vadodara', value: 'vadodara' },
        { label: 'Bangalore', value: 'bangalore' },
        { label: 'Pune', value: 'pune' }
      ],
      selectedOption: 'all'
    }
  ];

  Filters = [
    { 
      vacancyTitle:'Frontend Developer',
      category: 'IT',
      location: 'Surat',
      jobType:''
    },
    { 
      vacancyTitle:'Sales Manager',
      category: 'Marketing',
      location: 'Vadodara',
      jobType:'Full'
    },
  ];

}
