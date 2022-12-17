import { Component, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  @ViewChild(MatSidenav, { static: true })
  sidenav!: MatSidenav;


  educations = [
    {
      id: 4,
      institute: "University of Windsor",
      program: "Master in Engineering (Co-op)",
      degree: "Electrical and Computer Engineering",
      year: 2023
    }, {
      id: 3,
      institute: "Rajiv Gandhi Insitiute of Technology",
      program: "Bachelor in Engineering",
      degree: "Biomedical Engineering",
      year: 2018
    },
  ]

  constructor(
    private titleService: Title,
    private observer: BreakpointObserver,
  ) {
    this.titleService.setTitle('Portfolio | Umang Shrestha');
  }


  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }


  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
