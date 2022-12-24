import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { EducationComponent } from './education/education.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './shared/service/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faEnvelope, faCopy, faGraduationCap, faHome, faLink, faPhoneFlip, faProjectDiagram, faTools, faUser } from '@fortawesome/free-solid-svg-icons';
import { ProjectsComponent } from './projects/projects.component';
import { AIconBtnComponent } from './shared/a-icon-btn/a-icon-btn.component';
import { SkillsComponent } from './skills/skills.component';
import { TagsComponent } from './shared/tags/tags.component';
import { ExperienceComponent } from './experience/experience.component';
import { DateToStringPipe } from './shared/pipe/date.pipe';
import { JoinPipe } from './shared/pipe/join.pipe';
import { HttpNetworkInterceptor } from './shared/interceptor/http.interceptor';
import { LoadingComponent } from './shared/loading/loading.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ServiceWorkerModule } from '@angular/service-worker'; 

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    PersonalDetailsComponent,
    ProjectsComponent,
    AIconBtnComponent,
    SkillsComponent,
    ExperienceComponent,
    TagsComponent,
    LoadingComponent,
    DateToStringPipe,
    JoinPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FontAwesomeModule,
    LazyLoadImageModule,
    InMemoryWebApiModule.forRoot(DataService),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpNetworkInterceptor,
    multi: true,
  }],
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
      faLink,
      faCopy,
      faPhoneFlip,
      faEnvelope);
  }
}
