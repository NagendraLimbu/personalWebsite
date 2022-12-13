import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
    //   id: 3,
    //   title: 'xxx',
    //   desc: '',
    //   livedemo: 'xxx.com/xxx',
    //   githurl: 'https://github.com/NagendraLimbu/xxx',
    //   mediumlink: 'xxx.com',
    //   imgUrl: 'assets/images/xxx.png',
    //   tech: 'Angular 9, Node, springBoot, Microservices'
    }
  ]
  about2 = `Full Stack Software Engineer with 11+ years of experience .`
  // Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  // Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  // Have good understanding of Web Services (JAXB, SOAP, RESTful, JAX-RPC, SOA, UDDI),  Spring, Spring boot, Hibernate, Servlets, JSP, EJB, Log4j, XML, JSON`

  about = "Talented and solution-driven Java Developer with hands-on commercial experience on financial and banking domains across all phases of system development including requirements gathering, design and coding, and testing and deployment. Proven ability to analyze and troubleshoot complex issues and deliver rapid solutions."
  resumeurl = "https://docs.google.com/document/d/1LBMehy6UaOuwbfRgqdV1ZGvOwUfESTQj"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT/TYPESCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'PostGres, SQL , MYSQL, MONOGO',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'Java, Spring, SpringBoot, REST, Microservices',
      'progress': '90%'
    },
    {
        'id': '7',
        'skill': 'Git, Jenkins, Concourse, Docker, PCF, AWS',
        'progress': '90%'
    },
    {
    'id': '8',
    'skill': 'IntelliJ IDEA, Eclipse, VSS, Swagger, Postman',
    'progress': '90%'
    },
    {
        'id': '9',
        'skill': 'Junit, Mockito Framework, Spock Framework',
        'progress': '90%'
    }    
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2017',
      'education': 'Master\'s Degree',
      'stream': 'Computer Science',
      'info': `Computer Science `,
      'institution': 'Maharishi International University, Fairfield, IA, US'
    },
    {
      'id': '2',
      'from_to_year': '2006 - 2010',
      'education': 'Bachelor\s Degree',
      'stream': 'Computer Engineering',
      'institution': 'Himalaya Collage of Engineering, Kathmandu, Nepal',
      'info': `Computer Science.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Tidal Impact LLC (Client: Cardinal Health)',
      location: 'Columbus, OH, US',
      timeline: 'July 2020 to Present',
      role: 'Full Stack Software Engineer',
      work: [
        { 'eachwork': `Maintain high standards of software quality within the team by establishing good practices and habits.`},
      { 'eachwork': `Collaborate with other software developers, business analysts and software architects to plan, design, develop, test, and maintain microservices.`},
      { 'eachwork': `Review User Stories and the test cases associated with the story in order to predict the efforts needed to implement the story`},
      { 'eachwork': `Participate in peer-reviews of solution designs and related code.`},
      { 'eachwork': `Develop, refine, and tune integrations between microservices. Analyze and resolve technical and application problems.`},
      { 'eachwork': `Develop the UI of the project using HTML5, CSS, JavaScript, Nodejs, angular 9, XML, AJAX`},
      { 'eachwork': `Used spring MVC framework to implement the MVC design pattern.`},
      { 'eachwork': `Worked in pairs to design and develop the micro-services using spring boot using 12 factor app methodology based on requirement and AWS. Deployed, Scaled, Configured, wrote manifest files for various Microservices in PCF.`},
      { 'eachwork': `Used Spock/groovy framework for unit testing of application and gradle to build the application and deployed on Tomcat server.`},
      { 'eachwork': `Implemented Rabbitmq for messaging.`},
      { 'eachwork': `Design and develop spring batch microservices.`},
      { 'eachwork': `Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments, and clear code.`},
      { 'eachwork': `Maintain high standards of software quality within the team by establishing good practices and habits. Collaborate with other software developers, business analysts and software architects to plan, design, develop, test, and maintain microservices. Review User Stories and the test cases associated with the story in order to predict the efforts needed to implement the story Participate in peer-reviews of solution designs and related code. Develop, refine, and tune integrations between microservices. Analyze and resolve technical and application problems. Develop the UI of the project using HTML5, CSS, JavaScript, Nodejs, angular 9, XML, AJAX Used spring MVC framework to implement the MVC design pattern. Worked in pairs to design and develop the micro-services using spring boot using 12 factor app methodology based on requirement and AWS. Deployed, Scaled, Configured, wrote manifest files for various Microservices in PCF. Used Spock/groovy framework for unit testing of application and gradle to build the application and deployed on Tomcat server. Implemented Rabbitmq for messaging.ß Design and develop spring batch microservices. Documents and demonstrates solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments, and clear code. `},
      { 'eachwork': `Skills: Concourse CI · Splunk · Dynatrace · New Relic · Apache Kafka · Senior Sortware Engineer.`}
      // 
      ]
    }
    ,
    {
      id: 3,
      company: 'g2o LLC ( Client: M&T Bank )',
      location: 'Columbus, OH, US',
      timeline: 'Sept 2018 to April 2020',
      role: 'Java Developer',
      work: [
      { 'eachwork': `Involved in daily SCRUM meetings and internal developer status calls along with the offshore team`},
      { 'eachwork': `Gathering the requirements from the Business team(System Engineer) analyzing them and clarifying issues by coordinating with the team before each sprint`},
      { 'eachwork': `Review User Stories and the test cases associated with the story in order to predict the efforts needed to implement the story`},
      { 'eachwork': ` Core development experience for restful web services with enhancing soap services.`},
      { 'eachwork': ` Used spring config server for centralized configuration and Kibana for centralized logging.`},
      { 'eachwork': `Update the old code as per the new requirements which arise in an Agile based development environment`},
      { 'eachwork': `Implement the UI of the project using HTML5, CSS, Jquery, JavaScript, reactJS, AJAX`},
      { 'eachwork': `Used Spring MVC framework to implement the MVC design pattern.`},
      { 'eachwork': `Supported the application in production and used Kibana to get the application logs to handle the incidents`},
      { 'eachwork': `Used JUnit framework for unit testing of application and Maven to build the application and deployed on the Tomcat server.`},
      { 'eachwork': `Developed React Js pages, Web services calls and AJAX calls for the application`},
      { 'eachwork': `Implemented client-side Interface using React Js.`},
      { 'eachwork': `Working with the System Testing (ST), System Engineering (SE), and User Acceptance Testing (UAT)`},
      { 'eachwork': `Teams to understand the requirements and also resolve issues that have been reported.`},
      { 'eachwork': `Consuming both Restful and SOAP web services depending on the design need of the project`},
      { 'eachwork': `Developed Synchronous and Asynchronous Ajax calls.`}
      ]
    },
    {
      id: 2,
      company: 'Collabera ( Client: Visa )',
      location: 'Austin, TX, US',
      timeline: 'Feb 2018 - Sept 2018',
      role: 'Java  Developer',
      work: [
        { 'eachwork': `Used Spring (MVC) architecture to implement the application using the concrete principles laid down by several design patterns such as Façade, Factory, Singleton, Data Access Object.`},
        { 'eachwork': `Design and developed micro-services using spring boot based on the requirement.`},
        { 'eachwork': `Used Spring Framework for Transaction Management and Dependency Injection.`},
        { 'eachwork': `Rest, Jms are used to communicate between microservices.`},
        { 'eachwork': `Used HQL (Hibernate Query Language) to query the Database System and used JDBC`},
        { 'eachwork': `Developed the front end user interface for the application using React, HTML, CSS, JavaScript, and AJAX.`},
        { 'eachwork': `Application build deployment and continuous integration using Jenkins/Maven.`},
        { 'eachwork': `Drove successful outcomes using a test-driven development approach, performing Junit for unit testing on individual Java components.`},
        { 'eachwork': `Development of REST API to create a Web- services to communicate between different applications.`},
        { 'eachwork': `Spring MVC and following Agile principles using JIRA and Rally.`}
      ]
    },

    {
      id: 1,
      company: 'Vastika Inc',
      location: 'Irving, TX, US',
      timeline: 'Sept 2016 - Jan 2018',
      role: 'Java Developer',
      work: [
        { 'eachwork': `Used Spring (MVC) architecture to implement the application using the concrete principles lay down by several design patterns such as Façade, Factory, Singleton, Data Access Object.`},
        { 'eachwork': `Design and developed micro-services using spring boot based on requirement.`},
        { 'eachwork': `Used Spring Framework for Transaction Management and Dependency Injection.`},
        { 'eachwork': `Rest, Jms, are used to communicate between micro-services.`},
        { 'eachwork': `Used Hibernate annotations for mapping objects to the relational database and Implemented persistence using Hibernate.`},
        { 'eachwork': `Used HQL (Hibernate Query Language) to query the Database System and used JDBC`},
        { 'eachwork': `Extensively used Hibernate as ORM Framework and dealt with concepts such as Eager fetch, lazy loading, and transactions.`},
        { 'eachwork': `Developed the front end user interface for the application using JSP, HTML, CSS, JavaScript, and AJAX.`},
        { 'eachwork': `Assisted with application build deployment and continuous integration using Jenkins/Maven.`},
        { 'eachwork': `Drove successful outcomes using test-driven development approach, performing Junit for unit testing on individual Java components.`},
        { 'eachwork': `Development of REST API to create a Web- services to communicate between different application.`},
        { 'eachwork': `Spring MVC and following Agile principles using JIRA.`},
        { 'eachwork': `Created many stored procedures and functions in mysql database where all the data for the system was stored and utilized MongoDB, to store application configuration data. `}
      ]
    }
  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/nag_github.png',
      url: 'https://github.com/NagendraLimbu/'
    }
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}