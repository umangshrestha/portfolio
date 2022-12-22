import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Education } from '../education/education.entity';
import { PersonalDetails } from '../personal-details/personal-details.entity';
import { Project } from '../projects/projects.entity';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  education: Education[] = [
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
  ];


  location = {
    latitute: 42.2142839,
    longitute: -83.013745,
  }

  personalDetails: PersonalDetails = {
    id: 1,
    name: "Umang Shrestha",
    designation: "Software Developer",
    image: "/assets/img_avatar.png",
    email: "umangshrestha09@gmail.com",
    phone: "+1 (226)961-1358",
    github: "https://github.com/umangshrestha/",
    linkedin: "https://www.linkedin.com/in/umangshrestha/",
    medium: "https://umangshrestha09.medium.com/",
    description: "I am a software developer with 2 years of experience in developing, maintaining and automating software solutions using various programming languagers like Python, Node JS and Golang. I am a quick learner and I am always eager to learn new technologies. I am a team player and I am always ready to help my team members.",
    address: "511 Pelissier St, Windsor, ON N9A 4L2"
  }

  projects: Project[] = [
    {
      id: 1,
      name: "Custom Interpreter",
      description: "This is a OOPS based programming language interpreter written in Rust. It is a recursive descent parser with a lexer. It supports basic arithmetic operations, variable declaration, assignment, if-else, while loops, functions, and recursion.",
      tags: ["Rust", "Recursive Parser", "Lexer", "Token"],
      image: "/assets/projects/programming.png",
      github: "https://github.com/umangshrestha/yet-another-interpreter-in-rust",
    }, {
      id: 2,
      name: "System Montioring",
      description: "This is a linux based system monitoring tool written in Golang that uses proc files to monitor the CPU, Memory, and Network usage of the system.",
      tags: ["Golang", "Linux", "Proc files", "CPU", "mem"],
      image: "/assets/projects/system-monitoring.png",
      github: "https://github.com/umangshrestha/system-monitoring",
    }, {
      id: 3,
      name: "Calculator",
      description: "This is a simple calculator written in Angular that supports basic arithmetic operations.",
      tags: ["Angular", "Typescript", "Azure", "Github Actions", "Angular Material"],
      github: "https://github.com/umangshrestha/angular-calulator",
      image: "/assets/projects/calculator.png",
      demoUrl: "https://umangshrestha.github.io/angular-calulator/"
    }, {
      id: 4,
      name: "Flow App",
      description: "This app tracks the information on client and their queries",
      tags: ["NestJS", "Typescript", "PostgreSQL", "Docker", "Github Actions", "Swagger", "Rest API"],
      github: "https://github.com/umangshrestha/flow-app",
      image: "/assets/projects/swagger-ui.png",
      demoUrl: "https://nestflowapp.herokuapp.com/"
    }]

  createDb() {
    return {
      education: this.education,
      location: this.location,
      projects: this.projects,
      personalDetails: this.personalDetails
    }
  }

  constructor() { }
}
