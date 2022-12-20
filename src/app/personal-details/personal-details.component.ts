import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { ResumeService } from '../service/resume.service';
import { PersonalDetails } from './personal-details.entity';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  personalDetails!: PersonalDetails;
  phone = faPhoneFlip;

  constructor(
    private resumeService: ResumeService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.resumeService.getPersonalDetails().subscribe((personalDetails: PersonalDetails) => {
      this.personalDetails = personalDetails;
    });
  }


  onCopy(value: string) {
    this.snackBar.open(`Copied: ${value}`, "X");
  }
}
