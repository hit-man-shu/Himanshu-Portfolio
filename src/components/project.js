import KBC from "../assets/KBCProject.png";
import Tastybites from "../assets/TastybitesProject.png";
import ProjectManager from "../assets/ProjectManagerProject.png";
import HimanshuDine from "../assets/Himanshu'sDine.png";

export const projects = [
  {
    id: 1,
    name: "KBC",
    description:
      " Experience the thrill of the iconic quiz show with our KBC-inspired app. Test your knowledge, challenge your friends, and win big prizes! Built using React with useState and useEffect hooks.",
    image: KBC,
    url: "https://hitmanshu-kbc.netlify.app/",
    github: "https://github.com/hit-man-shu/KBC-Project",
  },
  {
    id: 2,
    name: "Himanshu's Dine",
    description:
      "Welcome to 'Himanshu's Dine'! Our project blends React's frontend finesse with Context API for state management, custom hooks for data fetching, and reusable modals. With a dummy Express backend, we serve up a seamless dining experience, combining tech savvy with a dash of flavor! 🍲🚀",
    image: HimanshuDine,
    url: "https://hitmanshu-s-dine.netlify.app/",
    github: "https://github.com/hit-man-shu/Himanshu-s-Dine",
  },
  {
    id: 3,
    name: "Project Manager",
    description:
      " Stay organized and on top of your projects with our Project Manager tool. Effortlessly manage tasks, deadlines, and collaborators, ensuring smooth project execution every time. Built using React with useState hooks for a simple yet effective solution.",
    image: ProjectManager,
    url: "https://hitmanshu-projectmanager.netlify.app/",
    github: "https://github.com/hit-man-shu/Project-Manager",
  },
  {
    id: 4,
    name: "TastyBites",
    description:
      "Indulge in a culinary adventure with TastyBites, a mini food cart app. Browse mouthwatering dishes, add your favorites to cart, and satisfy your cravings in a few clicks. Built using React with useState, useReducer, and Context API.",
    image: Tastybites,
    url: "https://hitmanshu-tastybites.netlify.app/",
    github: "https://github.com/hit-man-shu/TastyBites-Project",
  },
];
