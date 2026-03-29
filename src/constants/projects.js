import { lanwi, tsl, storeit, arkanoid } from "../assets";

export const projects = [
  {
    name: "Lanwi",
    description:
      "Lanwi is an all-in-one language laboratory. The idea is simple: everything you need to go from complete beginner to confident speaker, in one place, without switching tabs, paying three subscriptions, or running out of material. Feel free to explore and try it out!",
    tags: [
      {
        name: "Auth",
        color: "blue-text-gradient",
      },
      {
        name: "SSR",
        color: "green-text-gradient",
      },
      {
        name: "SEO",
        color: "orange-text-gradient",
      },
      {
        name: "Personalized Learning",
        color: "pink-text-gradient",
      },
    ],
    image: lanwi,
    source_code_link: "https://lanwi.app/",
  },
  {
    name: "The Soccer Lab",
    description:
      "Soccer academy management platform designed to help coaches and administrators manage players, matches, etc and performance data efficiently. It provides a centralized, easy-to-use system for tracking development, communication, and operations within the academy.",
    tags: [
      {
        name: "Role-Based Access",
        color: "blue-text-gradient",
      },
      {
        name: "Analytics",
        color: "orange-text-gradient",
      },
      {
        name: "Team Management",
        color: "pink-text-gradient",
      },
    ],
    image: tsl,
    source_code_link: "https://www.thesoccerlab.pro/",
  },
  {
    name: "StoreIt",
    description:
      "Storage management platform designed to help you manage your documents, images, and files efficiently. It provides a secure and easy-to-use interface to manage your files online similar to Google Drive/Dropbox/OneDrive.",
    tags: [
      {
        name: "Auth",
        color: "blue-text-gradient",
      },
      {
        name: "File Uploads",
        color: "green-text-gradient",
      },
      {
        name: "Search",
        color: "orange-text-gradient",
      },
      {
        name: "Secure Sharing",
        color: "pink-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://cc-storeit.vercel.app/",
  },
  {
    name: "Arkanoid",
    description:
      "Classic arcade game where players control a paddle to bounce a ball and break bricks. Arkanoid offers a nostalgic yet challenging experience for gamers of all ages. Built with HTML5 Canvas and JavaScript.",
    tags: [
      {
        name: "Game Loop",
        color: "blue-text-gradient",
      },
      {
        name: "Score Tracking",
        color: "orange-text-gradient",
      },
      {
        name: "Responsive Canvas",
        color: "pink-text-gradient",
      },
    ],
    image: arkanoid,
    source_code_link: "https://cc-arkanoid.vercel.app/",
  },
];
