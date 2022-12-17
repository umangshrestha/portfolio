import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Education } from '../education/education.entity';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  public static URL: string = 'http://localhost:4200/api/';

  constructor(private http: HttpClient) { }

  getEducations() {
    return this.http.get<Education[]>(ResumeService.URL + 'education')
      .pipe(
        map((event: Education[]) => event.sort((a, b) => b.year - a.year))
      )
  }
}
