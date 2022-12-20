import { Component } from '@angular/core';
import { ResumeService } from '../service/resume.service';
import { Project } from './projects.entity';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private resumeService: ResumeService) {
      this.resumeService.getProjects().subscribe((projects: Project[]) => {
        this.projects = projects.map(({tags, ...project }: Project) =>({
          tags: tags.map((tag: string) => tag.toLowerCase()),
          ...project
        }));
      });
  }



}
