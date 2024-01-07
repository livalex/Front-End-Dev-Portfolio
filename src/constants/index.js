import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  deutscheBank,
  politehnicaUniversity,
  microsoft,
  website3d,
  threejs,
  solarSystem,
  coffeeShop,
  andreiNicolaePhoto,
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
    id: "projects",
    title: "Projects",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Deutsche Bank",
    icon: deutscheBank,
    iconBg: "#383E56",
    date: "November 2021 - Present",
    points: [
      "Designed and implemented a web tool in React for managing client and bank accounts data.",
      "Worked on an internal library for both web sites and smartphones using React / React Native.",
      "Volunteered as a front-end developer mentor for internship students.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "University Politehnica of Bucharest",
    icon: politehnicaUniversity,
    iconBg: "#E6DEDD",
    date: "September 2020 - Present",
    points: [
      "Taught and helped the Computer Programming module (C) and contributed to the course’s learning material.",
      "Created new assignments, projects and homework which increased my inventiveness.",
      "Developed teamwork and soft skills as a teacher and as a member of the staff.",
    ],
  },
  {
    title: "Technical Software Engineer Intern",
    company_name: "Deutsche Bank",
    icon: deutscheBank,
    iconBg: "#383E56",
    date: "July 2021 - September 2021",
    points: [
      "Developed applications using technologies like JavaScript, React, HMTL/CSS, Java (Spring), SQL.",
      "Developed custom tests for the purpose of testing the newly created products.",
      "Privilege of collaborating within a dynamic and cohesive team environment",
    ],
  },
  {
    title: "Technical Support Engineer Intern",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "March 2021 - May2021",
    points: [
      "Provided and facilitated responsive delivery of technical solutions and information to major customers.",
      "Worked in an international environment and collaborated with my team to provide high-levelsupport.",
      "Attended triage meetings with remote engineers to share knowledge and efficiently develop customer solutions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I worked with Alex on the redesign of an internal Deutsche Bank React Components Library and can highly recommend him as a proactive and communicative developer. During our time working together, I had the chance to review Alex’s code and have definitely seen his skills grow. I really appreciate the fact that he always strives to apply best practices in his work.",
    name: "Andrei-Daniel Nicolae",
    designation: "Software Engineer",
    company: "Adobe",
    image: andreiNicolaePhoto,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Alex does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Alex optimized our website, our traffic increased by 50%. We can't thank him enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Coffee Shop",
    description:
      "A real project created for a nearby company. Using this app, the consumer can place product orders from the business, and the orders will be delivered to the customer. The administrator has the ability to add, remove, and view products. They also get notified about the orders by email.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "orange-text-gradient",
      },
    ],
    image: coffeeShop,
    link: "https://www.lanoah.ro/",
    show_source_code: false,
    source_code_link: "",
  },
  {
    name: "AI-Powered 3D Website",
    description:
      "A React Website where you can design your own T-shirt by changing the color, adding an image as a logo or full texture, or even generating an image using AI. It uses Node.js for back-end and calls the OpenAI API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
    image: website3d,
    link: "https://www.livadaru-3dweb.com/",
    show_source_code: true,
    source_code_link: "https://github.com/livalex/AI-powered-3D-Website",
  },
  {
    name: "3D Solar System",
    description:
      "This project leverages Three.js, React Three Fiber, and React Drei as its driving technologies. The current scene displays the sun, all eight planets (or nine, if you classify Pluto as a planet), the asteroid belt, and an array of thousands of stars.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Three Fiber",
        color: "green-text-gradient",
      },
      {
        name: "React Drei",
        color: "pink-text-gradient",
      },
    ],
    image: solarSystem,
    link: "http://www.livadaru-solar-system.com/",
    show_source_code: true,
    source_code_link: "https://github.com/livalex/Solar-System",
  },
];

export { services, technologies, experiences, testimonials, projects };
