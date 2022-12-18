import { Component, ViewChild } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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

  constructor(
    private titleService: Title,
    private meta: Meta,
    private observer: BreakpointObserver,
  ) {
    this.titleService.setTitle('Portfolio | Umang Shrestha');
    this.meta.addTags([
      { name: 'author', content: 'Umang Shrestha' },
      { name: 'description', content: 'Umang Shrestha\'s portfolio' },
      { name: 'keywords', content: 'Angular, Resume, Software Developer, Azure' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-03-01', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
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
