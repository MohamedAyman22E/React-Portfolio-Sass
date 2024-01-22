import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGripfire } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { GiTargetPrize } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { LuLink } from "react-icons/lu";
import img1 from "../assets/service-1.svg";
import img2 from "../assets/service-2.svg";
import img3 from "../assets/service-3.svg";
import work1 from "../assets/work-1.svg";
import work2 from "../assets/work-2.svg";
import work3 from "../assets/work-3.svg";
import work4 from "../assets/work-4.svg";
import work5 from "../assets/work-5.svg";
import work6 from "../assets/work-6.svg";
import price1 from "../assets/price-1.svg";
import price2 from "../assets/price-2.svg";
import price3 from "../assets/price-3.svg";
import clients1 from "../assets/avatar-1.svg";
import clients2 from "../assets/avatar-3.svg";
import post1 from "../assets/blog-1.svg";
import post2 from "../assets/blog-2.svg";
import post3 from "../assets/blog-3.svg";
const home_icon = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaTwitter />,
  },
  {
    id: 4,
    icon: <FaGithub />,
  },
  {
    id: 5,
    icon: <FaLinkedin />,
  },
];
const about_title_card = [
  {
    id: 6,
    title:
      "I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.",
  },
];
const about_card_skills = [
  {
    id: 7,
    department: "Development",
    percentage: "90%",
    background: "rgb(255,209,92)",
    width: "90%",
  },
  {
    id: 8,
    department: "Ui/Ux design",
    percentage: "80%",
    background: "rgb(255,76,96)",
    width: "80%",
  },
  {
    id: 9,
    department: "photography",
    percentage: "60%",
    background: "rgb(108,108,299)",
    width: "60%",
  },
];
const about_about__subtitle = [
  {
    id: 10,
    icon: <FaGripfire />,
    numberCompleted: 198,
    title: "project completed",
  },
  {
    id: 11,
    icon: <BsCupHot />,
    numberCompleted: 5670,
    title: "cup of coffee",
  },
  {
    id: 12,
    icon: <HiUsers />,
    numberCompleted: 427,
    title: "satisfied clients",
  },
  {
    id: 13,
    icon: <GiTargetPrize />,
    numberCompleted: 35,
    title: "nominees winner",
  },
];
const service = [
  {
    id: 14,
    imgs: img1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundService: "rgb(255,209,92)",
  },
  {
    id: 15,
    imgs: img2,
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundService: "rgb(255,76,96)",
  },
  {
    id: 16,
    imgs: img3,
    title: "photography",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    backgroundService: "rgb(108,108,299)",
  },
];
const experience = [
  {
    id: 17,
    category: "left",
    date: "2019-present",
    title: "academic degree",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <FaGraduationCap />,
  },
  {
    id: 18,
    category: "left",
    date: "2013-2017",
    title: "bachelor's degree",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <FaGraduationCap />,
  },
  {
    id: 19,
    category: "left",
    date: "2009-2013",
    title: "honours degree",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <FaGraduationCap />,
  },
  {
    id: 20,
    category: "right",
    date: "web designer",
    title: "academic degree",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <IoBagHandle />,
  },
  {
    id: 21,
    category: "right",
    date: "2013-2017",
    title: "front-end-developer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <IoBagHandle />,
  },
  {
    id: 22,
    category: "right",
    date: "2009-2013",
    title: "back-end-developer",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit aenean commodo ligula eget.",
    icon: <IoBagHandle />,
  },
];
const Menu = [
  {
    id: 23,
    image: work1,
    title: "Project Management Illustration",
    category: "Design",
    link: <LuLink />,
  },
  {
    id: 24,
    image: work2,
    title: "Guest App Walkthrough Screens",
    category: "Art",
    link: <LuLink />,
  },
  {
    id: 25,
    image: work3,
    title: "Delivery App Wireframe",
    category: "Branding",
    link: <LuLink />,
  },
  {
    id: 26,
    image: work4,
    title: "Onboarding Motivation",
    category: "Design",
    link: <LuLink />,
  },
  {
    id: 27,
    image: work5,
    title: "iMac Mockup Design",
    category: "Creative",
    link: <LuLink />,
  },
  {
    id: 28,
    image: work6,
    title: "Game Store App Concept",
    category: "Art",
    link: <LuLink />,
  },
];
const Plans = [
  {
    id: 29,
    img: price1,
    title: "Basic",
    disc: "A Simple option but powerful to manage your business",
    kind: "Email support",
    number: "9",
    recommended: "",
  },
  {
    id: 30,
    img: price2,
    title: "Premium",
    disc: "Unlimited product including app integration and more features",
    kind: "Mon-Fri support",
    number: "49",
    recommended: "recommended",
  },
  {
    id: 31,
    img: price3,
    title: "Ultimate",
    disc: "A wise option for large companies and individuals",
    kind: "24/7 support",
    number: "99",
    recommended: "",
  },
];
const clients = [
  {
    id: 32,
    image: clients1,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
  {
    id: 33,
    image: clients2,
    title: "John Doe",
    subtitle: "Product designer at Dribble",
    comment:
      "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
  },
];
const lastPost = [
  {
    id: 34,
    img: post1,
    logo: "review",
    title: "5 Best App Development Tool for Your Projects",
    date: "09 february.2021 bolby",
  },
  {
    id: 35,
    img: post2,
    logo: "tutorial",
    title: "Common Misconceptions About Payment",
    date: "09 february.2022 bolby",
  },
  {
    id: 36,
    img: post3,
    logo: "business",
    title: "3 Things to know about startup business",
    date: "09 february.2021 bolby",
  },
];
export {
  home_icon,
  about_title_card,
  about_card_skills,
  about_about__subtitle,
  service,
  experience,
  Menu,
  Plans,
  clients,
  lastPost,
};
