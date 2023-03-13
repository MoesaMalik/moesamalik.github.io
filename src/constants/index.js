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
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jpm,
    lyft,
    carleton,
    chess,
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
      title: "Software Engineering",
      icon: web,
    },
    {
      title: "Unit Testing",
      icon: mobile,
    },
    {
      title: "Alogirthms & Data Strucutes",
      icon: backend,
    },
    {
      title: "Computer Architecture",
      icon: creator,
    },
    {
      title: "Object-Oriented Programming",
      icon: web,
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
      title: "Software Engineering Virtual Internship",
      company_name: "JP Morgan Chase & Co.",
      icon: jpm,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Built a real-time stock performance correlation graph using Python and Typescript to enable quant trading strategies."],
    },
    {
      title: "Back-End Engineering Virtual Internship",
      company_name: "Lyft",
      icon: lyft,
      iconBg: "#E6DEDD",
      date: "Mar 2023",
      points: [
        "Implemented test-driven development techniques through Python to refactor back-end software architecture." ],
    },
    {
      title: "Python and C Tutor",
      company_name: "Carleton University",
      icon: carleton,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Dec 2022",
      points: [
        "Achieved a 95% success rate in improving students' programming skills and helping them achieve their goals in C and Python.",
    
      "Created lesson plans and course materials that were tailored to each student's individual learning style and goals."],
  },
    {
      title: "2 Player Chess Program",
      company_name: "Personal Project",
      icon: chess,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Developed a chess engine with a user-friendly interface and comprehensive documentation, featuring various AI algorithms including minimax, alpha-beta pruning, and machine learning techniques",
      ],
    },
  ];
  
  const testimonials = [
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