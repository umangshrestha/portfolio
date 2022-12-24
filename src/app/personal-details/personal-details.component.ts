import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { ResumeService } from '../shared/service/resume.service';
import { PersonalDetails } from './personal-details.entity';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  detail!: PersonalDetails;
  phone = faPhoneFlip;

  constructor(
    private resumeService: ResumeService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPersonalDetails();
  }

  getPersonalDetails() {
    this.resumeService.getPersonalDetails().subscribe((personalDetails: PersonalDetails) => {
      this.detail = personalDetails;
    });
  }


  onCopy(value: string) {
    this.snackBar.open(`Copied: ${value}`, "X", {
      duration: 2000,
    });
  }
}
