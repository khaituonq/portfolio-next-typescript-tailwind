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
    name: "Aranoz API",
    description: "This is an api of Aranoz, it is an ecommerce website, using modern technologies as ExpressJS, Mongoose",
    tagsId: ['javascript', 'express_js', 'node_js', 'mongodb'],
    image: 'aranoz-api',
    source_code_link: "https://github.com/khaituonq/mern-amazon/tree/main/backend",
    project_link: "https://aranoz-api.onrender.com/api/product",
    order: 4
  },
  {
    name: "Aranoz ecommerce",
    description: "This project is an eCommerce website that allows users to browse and purchase products online. The website is built with modern web technologies and features a responsive design that works on desktop and mobile devices. The goal of this project is to provide users with a seamless shopping experience and a user-friendly interface.",
    tagsId: ['html', 'css', 'javascript', 'express_js', 'node_js', 'mongodb', 'react_js', 'sass'],
    image: 'aranoz-website',
    source_code_link: "https://github.com/khaituonq/aranoz-ecommerce",
    project_link: "https://aranoz-ecommerce.vercel.app/",
    order: 2
  },
  {
    name: "Wall store",
    description: "This is an ecommerce website, using modern technologies as ExpressJS, NextJS, MongoDB, TailwindCSS",
    tagsId: ['html', 'css', 'javascript', 'express_js', 'node_js', 'mongodb', 'react_js', 'next_js', 'tailwind_css'],
    image: 'wall-store',
    source_code_link: "https://github.com/khaituonq/wall-store",
    project_link: "https://wall-store.vercel.app/",
    order: 3
  },
  {
    name: "My portfolio",
    description: "This is my portfolio",
    tagsId: ['html', 'css', 'javascript', 'next_js', 'react_js', 'tailwind_css'],
    image: 'my-portfolio',
    source_code_link: "https://github.com/khaituonq/portfolio-next-typescript-tailwind",
    project_link: "https://portfolio-next-typescript-tailwind-fawn.vercel.app/",
    order: 1
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
  {
    id: 'react_js',
    title: 'ReactJS',
    color: 'text-[#087ea4]'
  },
  {
    id: 'next_js',
    title: 'NextJS',
    color: 'text-[#000000]'
  },
  {
    id: 'node_js',
    title: 'NodeJS',
    color: 'text-[#026e00]'
  },
  {
    id: 'express_js',
    title: 'ExpressJS',
    color: 'text-[#8dbf40]'
  },
  {
    id: 'mongodb',
    title: 'mongoDB',
    color: 'text-[#116149]'
  },
  {
    id: 'mysql',
    title: 'mySQL',
    color: 'text-[#3e6e93]'
  },
  {
    id: 'sass',
    title: 'Sass',
    color: 'text-[#bf4080]'
  },
  {
    id: 'tailwind_css',
    title: 'TailwindCSS',
    color: 'text-[#38bdf8]'
  },
  {
    id: 'bootstrap',
    title: 'Bootstrap',
    color: 'text-[#7532fa]'
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
