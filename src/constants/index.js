import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    deutscheBank,
    politehnicaUniversity,
    microsoft,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
        "I thought it was impossible to make a website as beautiful as our product, but Alex proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Alex does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Alex optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };