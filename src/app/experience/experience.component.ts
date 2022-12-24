import { Component } from '@angular/core';
import { ResumeService } from '../shared/service/resume.service';
import { Experience } from './experience.entity';
import { Sort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ],

})
export class ExperienceComponent {
  experiences!: Experience[];
  isFlipped!: boolean[];

  constructor(private resumeService: ResumeService) {
    this.resumeService.getExperience().subscribe((experience: Experience[]) => {
      this.experiences = experience;
      this.isFlipped = new Array(this.experiences.length).fill(false);

    })
  }

  sortData(sort: Sort) {
    const data = this.experiences.slice();
    if (!sort.active || sort.direction === '') {
      this.experiences = data;
      return;
    }

    this.experiences = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'company': return compare<string>(a.company, b.company, isAsc);
        case 'designation': return compare<string>(a.designation, b.designation, isAsc);
        case 'location': return compare<string>(a.location, b.location, isAsc);
        case 'start': return compare<Date>(a.startDate, b.startDate, isAsc);
        case 'end': return compare<Date>(a.endDate, b.endDate, isAsc);
        default: return 0;
      }
    });
  }


  cardClicked(i: number) {
    this.isFlipped[i] = !this.isFlipped[i];
  }


  isClicked(i: number) {
    return this.isFlipped[i];
  }

}




function compare<T>(a: T, b: T, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}