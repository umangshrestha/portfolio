import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { EducationComponent } from './education/education.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import {GoogleMapsModule} from '@angular/google-maps';
import { ContactComponent } from './contact/contact.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faGraduationCap, faHome, faPerson, faProjectDiagram, faTools, faUser } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    PersonalDetailsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    GoogleMapsModule,
    FontAwesomeModule,
    InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faGithub, 
      faLinkedin, 
      faMedium,
      faBriefcase, 
      faGraduationCap,
      faHome,
      faUser,
      faTools,
      faProjectDiagram,
      faEnvelope);
  }
}
