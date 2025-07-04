import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule,CommonModule],
  standalone:true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
skills = [
  {
    name: 'HTML',
    icon: 'assets/images/html5.svg',
    percentage: 85,
    description: 'Applying expertise in markup languages to create responsive, user-friendly, and accessible web content.'
  },
  {
    name: 'CSS',
    icon: 'assets/images/css3.svg',
    percentage: 80,
    description: 'Adept at styling and layout techniques to create visually appealing and responsive web design.'
  },
  {
    name: 'JavaScript',
    icon: 'assets/images/JS.svg',
    percentage: 70,
    description: 'Utilizing scripting skills to create dynamic and interactive web applications with enhanced user functionality.'
  },
  {
    name: 'Angular',
    icon: 'assets/images/angularjs.svg',
    percentage: 80,
    description: 'Building dynamic single-page applications using a component-based framework and two-way data binding.'
  },
  {
    name: 'React',
    icon: 'assets/images/react.svg',
    percentage: 80,
    description: 'Leveraging component-based architecture to build scalable and efficient user interfaces.'
  },
  {
    name: 'NodeJS',
    icon: 'assets/images/node.svg',
    percentage: 85,
    description: 'Utilizing its runtime environment to develop server-side applications with asynchronous architecture.'
  },
  {
    name: 'Java',
    icon: 'assets/images/java.svg',
    percentage: 75,
    description: 'Applying object-oriented principles to develop scalable software web Applications.'
  },
  {
    name: 'Spring Boot',
    icon: 'assets/images/spring.svg',
    percentage: 75,
    description: 'Simplifying backend development by building robust and production-ready RESTful services with Spring Boot.'
  },
   {
    name: 'C#',
    icon: 'assets/images/csharp.svg',
    percentage: 65,
    description: 'Developing desktop and web applications using object-oriented principles in the .NET ecosystem.'
  },
  {
    name: 'Swagger',
    icon: 'assets/images/swagger.svg',
    percentage: 75,
    description: 'Documenting and testing REST APIs with interactive UI and OpenAPI specifications.'
  },
  {
    name: 'JWT',
    icon: 'assets/images/jwt.svg',
    percentage: 70,
    description: 'Implementing secure authentication and authorization using JSON Web Tokens.'
  },
  {
    name: 'MySQL',
    icon: 'assets/images/mysql.svg',
    percentage: 85,
    description: 'Adept at database management and query optimization for efficient data handling.'
  },
  {
    name: 'SQL Server',
    icon: 'assets/images/server.svg',
    percentage: 80,
    description: 'Managing relational data efficiently using advanced SQL Server features and stored procedures.'
  },
  {
    name: 'MongoDB',
    icon: 'assets/images/mongodb.svg',
    percentage: 85,
    description: 'Utilizing document-oriented data models for high-performance web applications.'
  },
 
];

services = [
  {
    icon: 'bi-pencil-square', // Bootstrap icon class
    title: 'UI/UX Design',
    number: '01',
    description: 'Designed intuitive UI/UX interfaces, focusing on user-centric design principles to optimize usability and satisfaction'
  },
  {
    icon: 'bi-laptop',
    title: 'Web Developer',
    number: '02',
    description: 'Crafting digital experiences, one line of code at a time, to shape the future of the web.'
  },
  {
    icon: 'bi-brush',
    title: 'Web Design',
    number: '03',
    description: 'Transforming visions into captivating digital landscapes, where creativity meets functionality.'
  },
  {
    icon: 'bi-camera',
    title: 'Photography',
    number: '04',
    description: 'Capturing moments, shaping memories, and painting stories with light — this is the artistry of photography.'
  },
  {
    icon: 'bi-camera-reels',
    title: 'Video Editor',
    number: '05',
    description: 'Skilled in video editing techniques, ensuring high-quality productions through precise cuts, color correction, and captivating storytelling.'
  },
  {
    icon: 'bi-graph-up-arrow',
    title: 'Product Strategy',
    number: '06',
    description: 'Elevating products from conception to success with strategic insight and meticulous planning.'
  }
];

  careerGoals = [
    {
      icon: '🚀',
      title: 'Technical Expertise',
      description: 'Master advanced Java frameworks and cloud technologies to architect scalable solutions'
    },
    {
      icon: '🌐',
      title: 'Full Stack Mastery',
      description: 'Develop expertise in both frontend and backend technologies for end-to-end development'
    },
    {
      icon: '👥',
      title: 'Leadership',
      description: 'Grow into technical leadership roles to mentor junior developers'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Contribute to open-source projects and build innovative applications'
    }
  ];

  personalInterests = [
    { icon: '🎵', title: 'Music' },
    { icon: '🚴', title: 'Cycling' },
    { icon: '📗', title: 'Technical Blogging' },
    { icon: '👨‍💻', title: 'Open Source Contribution' },
    { icon: '🏆', title: 'Coding Competitions' },
    { icon: '🎮', title: 'Game Development' },
    { icon: '🌍', title:'Exploring Tech Cultures Globally'}
  ];

  hobbies = [
    { icon: '📷', title: 'Photography' },
    { icon: '🧘‍♂️', title: 'Meditation' },
    { icon: '✈️', title: 'Traveling' },
    { icon: '♟️', title : 'Chess'},
    { icon: '📚', title: 'Reading Books' }
  ];

}
