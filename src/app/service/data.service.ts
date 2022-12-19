import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  education = [
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
    address: "511 Pelissier StWindsor, ON N9A 4L2"
  }


  projects = [
    {
      id: 1,
      name: "Custom Programming Language Interpreter",
      description: "This is a OOPS based programming language interpreter written in Rust. It is a recursive descent parser with a lexer. It supports basic arithmetic operations, variable declaration, assignment, if-else, while loops, functions, and recursion.",
      tags: ["Rust", "Recursive Parser", "Lexer"],
      github: "https://github.com/umangshrestha/yet-another-interpreter-in-rust",
    }, {
      id: 2,
      name: "System Montioring",
      description: "This is a linux based system monitoring tool written in Golang that uses proc files to monitor the CPU, Memory, and Network usage of the system.",
      tags: ["Golang", "Linux"],
      github: "https://github.com/umangshrestha/system-monitoring",
    }, {
      id: 3,
      name: "Calculator",
      description: "This is a simple calculator written in Angular that supports basic arithmetic operations.",
      tags: ["Angular", "Typescript", "Azure", "Github Actions", "Angular Material"],
      github: "https://github.com/umangshrestha/angular-calulator",
      demoUrl: "https://umangshrestha.github.io/angular-calulator/"
    }, {
      id: 4,
      name: "Flow App",
      description: "This app tracks the information on client and their queries",
      tags: ["NestJS", "Typescript", "Jest", "PostgreSQL", "Docker", "Github Actions", "Docker", "Swagger", "Rest API", "Docker Compose"],
      github: "https://github.com/umangshrestha/flow-app",
      demoUrl: "https://nestflowapp.herokuapp.com/"
    }]

  createDb() {
    return {
      education: this.education,
      location: this.location,
      projects: this.projects
    }
  }

  constructor() { }
}
