import DevOnChair from "@/public/images/svg/developer-on-chair.svg";
import DoodleSquare from "@/public/images/svg/doodle-mixed-square.svg";
import MusicMote from "@/public/images/svg/music-note.svg";
import LightBulb from "@/public/images/svg/lightbulb.svg";
import DoodleArrowUp from "@/public/images/svg/doodle-arrow-up.svg";
import DoodleFull from "@/public/images/svg/doodle-mixed-full.svg";
import DoodleArrowDown from "@/public/images/svg/doodle-arrow-down.svg";
import ArrowDown from "@/public/images/svg/arrow-down.svg";
import DoodleCircle from "@/public/images/svg/doodles-mixed-circle.svg";
import Developer from "@/public/images/svg/developer.svg";
import Keyboard from '@/public/images/svg/doodle-keyboard.svg'
import DoodleArrowDown2 from '@/public/images/svg/doodle-arrow-down2.svg'
import DeveloperWalk from '@/public/images/svg/developer-walk.svg'
import DoodleMail from '@/public/images/svg/doodle-mail.svg'
import Shadow from '@/public/images/svg/shadow.svg'
import { AiOutlineGithub, AiOutlineHome, AiOutlineInstagram, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";

const images = {
  DevOnChair,
  DoodleSquare,
  MusicMote,
  DoodleArrowUp,
  LightBulb,
  DoodleFull,
  DoodleArrowDown,
  ArrowDown,
  DoodleCircle,
  Developer,
  Keyboard,
  DoodleArrowDown2,
  DeveloperWalk,
  DoodleMail,
  Shadow
};

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        id: 'all',
        title: 'All',
        color: 'text-[#e8d44d]'
      },
      {
        id: 'javascript',
        title: 'Javascript',
        color: 'text-[#e8d44d]'
      },
      {
        id: 'html',
        title: 'HTML',
        color: 'text-[#dd4b25]'
      },
      {
        id: 'css',
        title: 'CSS',
        color: 'text-[#254bdd]'
      },
    ],
    image: 'demo-card.jpg',
    source_code_link: "https://github.com/",
    project_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        id: 'javascript',
        title: 'Javascript',
        color: 'text-[#e8d44d]'
      },
      {
        id: 'html',
        title: 'HTML',
        color: 'text-[#dd4b25]'
      },
      {
        id: 'css',
        title: 'CSS',
        color: 'text-[#254bdd]'
      },
    ],
    image: 'demo-card.jpg',
    source_code_link: "https://github.com/",
    project_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        id: 'javascript',
        title: 'Javascript',
        color: 'text-[#e8d44d]'
      },
      {
        id: 'html',
        title: 'HTML',
        color: 'text-[#dd4b25]'
      },
      {
        id: 'css',
        title: 'CSS',
        color: 'text-[#254bdd]'
      },
    ],
    image: 'demo-card.jpg',
    source_code_link: "https://github.com/",
    project_link: "https://github.com/",
  },
];

const aboutMe =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const navLinks = [
  {
    id: "home",
    title: "Home",
    icon: AiOutlineHome
  },
  {
    id: "about",
    title: "About me",
    icon: AiOutlineUser
  },
  {
    id: "work",
    title: "Work",
    icon: BsPersonWorkspace
  },
  {
    id: "contact",
    title: "Contact",
    icon: AiOutlinePhone
  },
];

const categories = [
  {
    id: 'all',
    title: 'All',
    color: ''
  },
  {
    id: 'javascript',
    title: 'Javascript',
    color: '#e8d44d'
  },
  {
    id: 'html',
    title: 'HTML',
    color: '#dd4b25'
  },
  {
    id: 'css',
    title: 'CSS',
    color: '#254bdd'
  },
  {
    id: 'react_js',
    title: 'ReactJS',
    color: '#087ea4'
  },
  {
    id: 'next_js',
    title: 'NextJS',
    color: '#000000'
  },
  {
    id: 'node_js',
    title: 'NodeJS',
    color: '#026e00'
  },
  {
    id: 'express_js',
    title: 'ExpressJS',
    color: '#8dbf40'
  },
  {
    id: 'mongodb',
    title: 'mongoDB',
    color: '#116149'
  },
  {
    id: 'mysql',
    title: 'mySQL', 
    color: '#3e6e93'
  },
  {
    id: 'sass',
    title: 'Sass',
    color: '#bf4080'
  },
  {
    id: 'tailwind_css', 
    title: 'TailwindCSS',
    color: '#38bdf8'
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap',
    color: '#7532fa'
  },
];

const socialMedias = [
  {
    id: 'facebook',
    link: 'https://www.facebook.com/nguyenkhaituonq/',
    icon: FiFacebook
  },
  {
    id: 'instagram',
    link: 'https://www.instagram.com/khai.tuonq/',
    icon: AiOutlineInstagram
  },
  {
    id: 'github',
    link: 'https://github.com/khaituonq',
    icon: AiOutlineGithub
  }
]

export { images, aboutMe, navLinks, projects, categories, socialMedias };
