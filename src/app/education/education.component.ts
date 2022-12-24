import { Component, Input } from '@angular/core';
import { ResumeService } from '../shared/service/resume.service';
import { Education } from './education.entity';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  educations!: Education[];

  constructor(private resume: ResumeService) { }

  ngOnInit(): void {
    this.resume.getEducations().subscribe((education: any) => { this.educations = education; });
  }

}
