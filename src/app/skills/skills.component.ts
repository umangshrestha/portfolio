import { Component } from '@angular/core';
import { ResumeService } from '../shared/service/resume.service';
import { Skills } from './skills.entity';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills!: Skills;

  constructor(private resumeService: ResumeService) {
    this.resumeService.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }


  skillsKeys(){
    if (!this.skills) {
      return [];
    }
    return Object.keys(this.skills);
  }
}
