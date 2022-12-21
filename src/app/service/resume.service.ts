import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../education/education.entity';
import { map } from 'rxjs';
// import { Address } from '../contact/contact.entity';
import { Project } from '../projects/projects.entity';
import { PersonalDetails } from '../personal-details/personal-details.entity';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  public static URL: string = 'http://localhost:4200/api';

  constructor(private http: HttpClient) { }

  getEducations() {
    return this.http.get<Education[]>(ResumeService.URL + '/education')
      .pipe(
        map((event: Education[]) => event.sort((a, b) => b.year - a.year))
      )
  }

  // getAddress() {
  //   return this.http.get<Address>(ResumeService.URL + '/location');
  // }

  getProjects() {
    return this.http.get<Project[]>(ResumeService.URL + '/projects');
  }

  getPersonalDetails() {
    return this.http.get<PersonalDetails>(ResumeService.URL + '/personalDetails');
  }
}
