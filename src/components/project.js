import KBC from "../assets/KBCProject.png";
import ProjectManager from "../assets/ProjectManagerProject.png";
import HimanshuDine from "../assets/Himanshu'sDine.png";
import HimanshuEvent from "../assets/himanshu'seventshub.png";
import Himanshublog from "../assets/blogapp.png";

export const projects = [
  {
    id: 5,
    name: "Himanshu's Blog",
    description:
      "Built Himanshu's Blog App, a single-page application (SPA) leveraging React's component-driven architecture for a dynamic and user-friendly experience. Implemented React Router v6 to create an intuitive navigation system, allowing users to seamlessly explore blog content. Employed Tanstack Query's latest methods for efficient data fetching and caching, optimizing API calls and ensuring a smooth and responsive user interface.  Incorporated a secure user authentication system using JSON Web Tokens (JWT) for login and access control.",
    image: Himanshublog,
    url: "https://hitmanshu-bloghub.netlify.app/",
    github: "https://github.com/hit-man-shu/Himanshu-s-Bloghub",
  },
  {
    id: 1,
    name: "Himanshu's EventsHub",
    description:
      "Himanshu's EventsHub is a dynamic and user-friendly frontend application built with React that empowers event organizers and participants. Leverages the power of React Router DOM's advanced features to deliver a seamless user experience with loaders and data fetching actions. Integrates React Tanstack Query v5 for efficient and robust data management, ensuring smooth interactions and a responsive UI.",
    image: HimanshuEvent,
    url: "https://hitmanshu-eventshub.netlify.app/",
    github: "https://github.com/hit-man-shu/Himanshu-s-EventsHub",
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
    name: "KBC",
    description:
      " Experience the thrill of the iconic quiz show with our KBC-inspired app. Test your knowledge, challenge your friends, and win big prizes! Built using React with useState and useEffect hooks.",
    image: KBC,
    url: "https://hitmanshu-kbc.netlify.app/",
    github: "https://github.com/hit-man-shu/KBC-Project",
  },
  {
    id: 4,
    name: "Project Manager",
    description:
      " Stay organized and on top of your projects with our Project Manager tool. Effortlessly manage tasks, deadlines, and collaborators, ensuring smooth project execution every time. Built using React with useState hooks for a simple yet effective solution.",
    image: ProjectManager,
    url: "https://hitmanshu-projectmanager.netlify.app/",
    github: "https://github.com/hit-man-shu/Project-Manager",
  },
];
