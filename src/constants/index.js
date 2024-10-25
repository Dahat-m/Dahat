import {
  mobile,
  creator,
  html,
  css,

  jobit,
  tripguide,
  word,
  excel,
  powerpoint,
  access,
  cpp,
  csharp,
  sql,
  arabic,
  kurdish,
  english,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Computer Skills",
  },
  {
    id: "languages",
    title: "Language Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Network Specialist",
    icon: creator,
  },
  {
    title: "Cyber Security",
    icon: mobile,
  }
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Html",
    icon: html,
  },
  {
    name: "Css",
    icon: css,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "Word",
    icon: word,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power Point",
    icon: powerpoint,
  },
  {
    name: "aceess",
    icon: access,
  },
];

const languages = [
  {
    name: "Kurdish",
    icon: kurdish,
  },
  {
    name: "English",
    icon: english,
  },
  {
    name: "Arabic",
    icon: arabic,
  },
];

const experiences = [
  {
    title: "Networking Engineer",
    company_name: "Asiacell",
    iconBg: "#0070ff",
    date: "may 2024 - september 2024",
    points: [

      "Completed a specialized course in networking (CCNA), focusing on network design, implementation, and management.",
      "Gained expertise in configuring and troubleshooting network devices, understanding network protocols.",
      "Acquired practical skills in setting up and managing LANs, WANs, and wireless networks."

    ],
  },
  {
    title: "Volunteer",
    company_name: "College Festival - Computer Science and IT",
    iconBg: "#0070ff",
    date: "2021 - 2024",
    points: [


      "Volunteered at the annual college festival, contributing to the successful organization and execution of various events.",
      "Assisted in event planning, coordination, and management, ensuring smooth operations and a positive experience for attendees.",
      "Developed teamwork, communication, and problem-solving skills while working with a diverse group of peers and faculty."

    ],
  }
];

const projects = [
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
    name: "Food Delivary App",
    description: "This Appliction is using for food delivary",
    tags: [
      {
        name: "react Native",
        color: "blue-text-gradient",
      },
      {
        name: "node js and express js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects, languages };
