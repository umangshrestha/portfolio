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

  createDb() {
    return {
      education: this.education,
      location: this.location
    }
  }

  constructor() { }
}
