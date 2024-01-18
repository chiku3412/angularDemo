import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss']
})
export class VacancyComponent implements OnInit  {

  visible: boolean = false;
  showDialog() {
    this.visible = true;
}

closeDialog() {
    this.visible = false;
}

constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.filterMatchModeOptions = {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
        };
    }

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
