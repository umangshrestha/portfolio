import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Education } from '../education/education.entity';
import { PersonalDetails } from '../personal-details/personal-details.entity';
import { Project } from '../projects/projects.entity';
import { Skills } from '../skills/skills.entity';
import { Experience } from '../experience/experience.entity';
import { faAngular, faDocker, faGithub, faGolang, faJava, faJenkins, faJira, faJs, faLinux, faPython, faReact, faWindows } from '@fortawesome/free-brands-svg-icons';

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
      location: "Windsor, ON",
      year: 2023
    }, {
      id: 3,
      institute: "Rajiv Gandhi Insitiute of Technology",
      program: "Bachelor in Engineering",
      degree: "Biomedical Engineering",
      location: "Banglore, India",
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

  skills: Skills = {
    "Programming Languages": [
      {
        name: "Python",
        image: "/assets/skills/python.svg",
      }, {
        name: "Golang",
        image: "/assets/skills/go.svg",
      }, {
        name: "Typescript",
        image: "/assets/skills/typescript.svg",
      }, {
        name: "Javascript",
        image: "/assets/skills/js.svg",
      }, {
        name: "Java",
        image: "/assets/skills/java.svg",
      }, {
        name: "Html",
        image: "/assets/skills/html.svg",
      }, {
        name: "CSS",
        image: "/assets/skills/css.svg",
      }
    ],
    "Frameworks": [{
      name: "Node",
      image: "/assets/skills/node.svg",
    },
    {
      name: "Angular",
      image: "/assets/skills/angular.svg",
    }, {
      name: "React",
      image: "/assets/skills/react.svg",
    }, {
      name: "NestJS",
      image: "/assets/skills/nestjs.svg",
    }, {
      name: "NextJS",
      image: "/assets/skills/nextjs.svg",
    }, {
      name: "Express",
      image: "/assets/skills/express.svg",
    }, {
      name: "Flask",
      image: "/assets/skills/flask.svg",
    }, {
      name: "Django",
      image: "/assets/skills/django.svg",
    }],
    "Tools": [{
      name: "GitHub",
      image: "/assets/skills/github.svg",
    }, {
      name: "Bitbucket",
      image: "/assets/skills/bitbucket.svg",
    }, {
      name: "Jira",
      image: "/assets/skills/jira.svg",
    }, {
      name: "Docker",
      image: "/assets/skills/docker.svg",
    }, {
      name: "Kubernetes",
      image: "/assets/skills/kubernetes.svg",
    }, {
      name: "Jenkins",
      image: "/assets/skills/jenkins.svg",
    }],
    "Operating Systems": [{
      name: "Linux",
      image: "/assets/skills/linux.svg",
    }, {
      name: "Windows",
      image: "/assets/skills/windows.svg",
    }],
    "Databases": [{
      name: "PostgreSQL",
      image: "/assets/skills/postgresql.svg",
    }, {
      name: "MongoDB",
      image: "/assets/skills/mongodb.svg",
    }, {
      name: "Redis",
      image: "/assets/skills/redis.svg",
    }],
    "Cloud": [{
      name: "Azure",
      image: "/assets/skills/azure.svg",
    }, {
      name: "AWS",
      image: "/assets/skills/aws.svg",
    }, {
      name: "Heroku",
      image: "/assets/skills/heroku.svg",
    }, {
      name: "Vercel",
      image: "/assets/skills/vercel.svg",
    }]
  }



  experience: Experience[] = [
    {
      id: 1,
      company: "IMN Technologies",
      designation: "Research Intern",
      location: "Banglore, India",
      startDate: new Date(2018, 2, 1),
      endDate: new Date(2018, 5, 1),
      description: [
        "Creating self driving car for monitoring WIFI parameters while roaming in mesh network.",
      ],
    }, {
      id: 2,
      company: "Magal Healthcare",
      designation: "QA Engineer",
      location: "Banglore, India",
      startDate: new Date(2018, 6, 1),
      endDate: new Date(2019, 3, 1),
      description: [
        "Introduced custom ubuntu ISO with prebuilt dependency and heartbeat script for decreasing deployment time of test beds .",
        "Automated e2e testing of android app using Appium, keyword driven test cases in Robot framework, and added pipeline in Jenkins.",
      ],
    }, {
      id: 3,
      company: "Lifesignals Pvt. Ltd.",
      designation: "Software Developer",
      location: "Banglore, India",
      startDate: new Date(2019, 4, 24),
      endDate: new Date(2022, 12, 15),
      description: [
        "Developed a web application using Django and Python to monitor the health of the patients using the data from the sensors.",
        "Created scalable simulator capable of running 200+ independent simulations, each dynamically configurable in runtime via REST Api.",
        "Implemented TLV parser in Golang for serialization of TLV encoded byte array to structs and JSON, and serialization of same.",
        "Dockerized microservices for registering IoT devices and relaying data from local cluster to cental hub.",
        "Ensured feature quality though unit testing, and debugged, maintained and modified Java based android app used for interacting with IOT devices.",
        "Created ETL process to analyze logs and visualize trends utilizing Python, Pandas and Plotly.",
      ]
    }, {
      id: 4,
      company: "University Of Windsor",
      designation: "Co-op Intern",
      location: "Windsor, ON",
      startDate: new Date(2022, 8, 29),
      endDate: new Date(2023, 4, 29),
      description: [
        "Deployed Nest.js powered REST API for tracking of faculty requests and documented the same with Swagger AI.",
        "Added authentication guards, JWT interceptors with refresh token and API service for Angular.",
        "Supporting frontend development using Angular, Typescript, and Material UI.",
      ]
    }
  ]


  createDb() {
    return {
      education: this.education,
      location: this.location,
      projects: this.projects,
      personalDetails: this.personalDetails,
      skills: this.skills,
      experience: this.experience
    }
  }

  constructor() { }
}
