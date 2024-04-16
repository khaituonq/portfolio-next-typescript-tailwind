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
import { AiOutlineGithub, AiOutlineHome, AiOutlineInstagram, AiOutlinePhone, AiOutlineUser, AiFillLinkedin } from "react-icons/ai";
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
    name: "Aranoz",
    description: "This project is an online store where customers may browse and make purchases. The website has a responsive design that functions on desktop and mobile devices and was created using contemporary web technology. Users will receive a seamless purchasing experience and a user-friendly interface as a result of this project.",
    tagsId: ['html', 'css', 'javascript', 'express_js', 'node_js', 'mongodb', 'react_js', 'sass'],
    image: 'aranoz',
    source_code_link: "https://github.com/khaituonq/aranoz-ecommerce",
    project_link: "https://aranoz-ecommerce.vercel.app/",
    order: 2
  },
  // {
  //   name: "Wall Store",
  //   description: "This project is an online store where customers may browse and make purchases. The website has a responsive design that functions on desktop and mobile devices and was created using contemporary web technology. Users will receive a seamless purchasing experience and a user-friendly interface as a result of this project.",
  //   tagsId: ['html', 'css', 'javascript', 'express_js', 'node_js', 'mongodb', 'react_js', 'next_js', 'tailwind_css'],
  //   image: 'wallstore',
  //   source_code_link: "https://github.com/khaituonq/wall-store",
  //   project_link: "https://wall-store.vercel.app/",
  //   order: 1
  // },
  {
    name: "My Portfolio",
    description: "This webpage serves as my online resume and contains details about my job and contact information.",
    tagsId: ['html', 'css', 'javascript', 'next_js', 'react_js', 'tailwind_css', 'typescript'],
    image: 'my-portfolio',
    source_code_link: "https://github.com/khaituonq/portfolio-next-typescript-tailwind",
    project_link: "https://portfolio-next-typescript-tailwind-fawn.vercel.app/",
    order: 4
  },
  {
    name: "Rent",
    description: "This website allows for online booking and renting, it includes features like adding rental homes to favourites, deleting them, creating new rentals, and making bookings.",
    tagsId: ['html', 'css', 'javascript', 'next_js', 'react_js', 'tailwind_css', 'node_js', 'mongodb', 'typescript'],
    image: 'rent',
    source_code_link: "https://github.com/khaituonq/airbnb_clone",
    project_link: "https://airbnb-clone-lemon-xi.vercel.app/",
    order: 3
  },
  {
    name: "Paid-ONTime",
    description: "Paid-ONTime is a cutting-edge platform designed to streamline construction progress payments in Ontario's prompt pay environment. Our user-friendly and efficient system simplifies the process of updating construction progress and automates time-consuming tasks. Built with contractors, owners and subcontractors in mind, our mission is to provide a fast, intuitive, and easy-to-use platform to ensure prompt payment for their hard work. By offering a seamless progress  approval process for owners, Paid-ONTime allows contractors to focus on what they do best: delivering exceptional construction projects. Discover the simplicity and reliability of Paid-ONTime today.",
    tagsId: ['html', 'css', 'javascript', 'next_js', 'react_js', 'tailwind_css', 'node_js', 'typescript'],
    image: 'paid-ontime',
    source_code_link: "",
    project_link: "https://www.paid-ontime.com/",
    order: 6
  },
  {
    name: "Amante",
    description: "Based on the existing php-written website, https://www.amante.co.kr/, Amante is a website developed in React and Node.js. The main modification is the Concept room page.",
    tagsId: ['html', 'css', 'javascript', 'react_js', 'node_js', 'bootstrap', 'mysql', 'express_js'],
    image: 'amante',
    source_code_link: "",
    project_link: "https://shopping.amante.co.kr/shop/concept_room/concept_room_lists",
    order: 5
  },
];

const aboutMe = "Greetings! I'm a seasoned full-stack developer named Tuong. My speciality is creating exceptional websites with attentive design and development. I firmly believe in the power of contemporary technology, and I have particular expertise in using state-of-the-art tools like Next.js, TypeScript, ExpressJS, Tailwind CSS, and MongoDB. I contribute a constant dedication to accuracy and excellence, making sure that every project is a seamless fusion of creativity and usability, from concept to execution. Let's work together to turn your digital concepts into outstanding web experiences."

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
    id: 'typescript',
    title: 'TypeScript',
    color: 'text-[#2f74c0]'
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
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/khaituonq/',
    icon: AiFillLinkedin
  }
]

export { images, aboutMe, navLinks, projects, categories, socialMedias };
