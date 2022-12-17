import { Component, Input } from '@angular/core';
import { Education } from './education.entity';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() educations!: Education[];
}
