import { Component } from '@angular/core';
import { Education } from './education.entity';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  education!: Education[];

  constructor() {
    this.education = [
      {
        id: 4,
        name: "University of Windsor",
        degree: "Master in Engineering Electrical and Computer Engineering Co-op",
        year: 2023
      }, {
        id: 3,
        name: "Rajiv Gandhi Insitiute of Technology",
        degree: "Bachelor of Technology in Engineering Biomedical Engineering",
        year: 2018
      }, {
        id: 2,
        name: "National Institure of Sciences",
        degree: "Higher Secondary Education",
        year: 2014
      },{
        id: 1,
        name: "Brihaspati Vidyasadan",
        degree: "Secondary Education",
        year: 2012
      }
    ]
  }
}
