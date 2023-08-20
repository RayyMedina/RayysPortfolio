import {
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  AZDOC,
  yellowbricklogo,
  yellowbrick,
  image,
  borderpatrol,
  sql,
  net,
  csharp,
  //sean,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name:"SQL",
    icon:sql,
  },
  {
    name:".NET",
    icon:net,
  },
  {
    name:"csharp",
    icon:csharp,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Full Stack Software Engineer",
    company_name: "Yellow Brick Financial",
    icon: yellowbricklogo,
    iconBg: "#383E56",
    date: "April 2023 - Current",
    points: [
      "Yellowbrick Financial is a reputable company that offers a range of valuable services to its clients, including life insurance, 401k plans, annuities, and financial planning.",
      "Proficient in employing front-end development principles and techniques, including skilled knowledge of userinterface design, responsive design strategies, and accessibility best practices to create visually appealing,mobile-friendly, and inclusive web experiences.",
      "Developed the locations section of a web application using SQL for database management, .NET for server-side functionality, and JavaScript, HTML, and React for creating dynamic and interactive user interfaces.",
      "Developed RESTful APIs using .NET Core framework, providing robust and scalable backend services for web applications",
      "Designed and implemented SQL tables and stored procedures, optimizing database performance and enhancing data retrieval and manipulation processes",
      "Practiced Agile methodologies, including daily stand-ups, code review sessions, and code talks, to foster collaboration, ensure code quality, and drive continuous improvement throughout the development process.",
      "Proficient in source control management using Git and GitHub, ensuring version control, branch management, and seamless collaboration among team members for efficient and organized code development.",
      "Collaborated with the team to create and refactor components, optimizing performance and ensuring seamless operation for both administrative and student users."
    ],
  },
  {
    title: "Supervisory Emergency Medical Technician",
    company_name: "Allied Universal",
    icon: image,
    iconBg: "#383E56",
    date: "May 2021 - March 2023",
    points: [
      "Responded to emergency situations in a rapid and safe manner.",
      "Maintained records of medical supplies while assuring adequate supplies are available.",
      "Utilized databases for tracking and managing equipment and supply inventory.",
    ],
  }, 
  {
    title: "Border Patrol Agent",
    company_name: "Department of Homeland Security",
    icon: borderpatrol,
    iconBg: "#383E56",
    date: "Aug 2018 - Aug 2019",
    points: [
      "Detected, prevented, and apprehended undocumented aliens, smugglers of aliens, and illegal narcotics.",
      "Maintained surveillance from covert positions at or near 6,000 miles of Mexican International Border.",
      "Interpreted and followed tracks, marks, and other evidence of illegal aliens and smugglers.",
    ],
  },  
  {
    title: "Corrections Officer",
    company_name: "Arizona Department of Corrections",
    icon: AZDOC,
    iconBg: "#383E56",
    date: "Jan 2017 - Aug 2018",
    points: [
      "Enforced rules and maintained order inside of the prison.",
      "Escorted prisoners between the institutions, courtrooms, medical facilities, and other destinations safely.",
      "Maintained security by settling disputes between inmates and preventing disturbances, assaults, and escapes.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "Rayy is a standout full stack software engineer with a sharp eye for details. His ability to spearhead robust solutions and communicate complex concepts makes him a true asset to any organization.",
//     name: "Sean Humphreys",
//     designation: "Full Stack Software Engineer",
//     company: "Yellow Brick Financial",
//     image: sean,
//   },
// ];

const projects = [
 
  {
    name: "Yellow Brick Financial",
    description:
      "Yellowbrick Financial is a reputable company that offers a range of valuable services to its clients, including life insurance, 401k plans, annuities, and financial planning.",
    tags: [
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "white-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },

    ],
    image: yellowbrick,
    source_code_link: "https://yellowbrickfinancial.com/",
  },
];

export { services, technologies, experiences, projects };
