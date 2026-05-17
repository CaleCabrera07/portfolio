import { lanwi, tsl, storeit, arkanoid } from "../assets";

export const projects = [
  {
    name: "⭐ Lanwi",
    description:
      "A complete language learning platform built to replace multiple subscriptions with one seamless experience. Designed for retention and engagement, Lanwi takes learners from zero to confident speaker without switching tools.",
    tags: [
      {
        name: "Language Learning",
        color: "blue-text-gradient",
      },
      {
        name: "SaaS Platform",
        color: "green-text-gradient",
      },
      {
        name: "Personalized UX",
        color: "orange-text-gradient",
      },
    ],
    image: lanwi,
    source_code_link: "https://lanwi.app/",
  },
  {
    name: "⚽ The Soccer Lab",
    description:
      "A management platform built for soccer academies to eliminate spreadsheets and scattered communication. Coaches and admins get a single system to track players, manage matches, and monitor performance, saving hours every week.",
    tags: [
      {
        name: "Academy Management",
        color: "blue-text-gradient",
      },
      {
        name: "Player Analytics",
        color: "orange-text-gradient",
      },
      {
        name: "Role-Based Access",
        color: "pink-text-gradient",
      },
    ],
    image: tsl,
    source_code_link: "https://www.thesoccerlab.pro/",
  },
  {
    name: "📂 StoreIt",
    description:
      "A secure cloud storage solution for businesses that need a simple, reliable way to manage and share documents online. Built with enterprise-grade security and a clean interface that any team member can use without training.",
    tags: [
      {
        name: "Cloud Storage",
        color: "blue-text-gradient",
      },
      {
        name: "Secure Sharing",
        color: "green-text-gradient",
      },
      {
        name: "File Management",
        color: "orange-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://cc-storeit.vercel.app/",
  },
  {
    name: "🎮 Arkanoid",
    description:
      "A fully playable browser-based arcade game built to demonstrate that great UX and high performance apply beyond business software. If we can make this feel smooth and fun, we can make your product feel the same way.",
    tags: [
      {
        name: "Browser Game",
        color: "blue-text-gradient",
      },
      {
        name: "Interactive UX",
        color: "orange-text-gradient",
      },
      {
        name: "Zero Install",
        color: "pink-text-gradient",
      },
    ],
    image: arkanoid,
    source_code_link: "https://cc-arkanoid.vercel.app/",
  },
];
