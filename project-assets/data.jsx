import { nanoid } from "nanoid";
import { FaGitSquare, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTypescript } from "react-icons/si";
export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-blue-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-blue-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <FaGitSquare className="h-16 w-16 text-blue-500" />,
    text: "I excel in working with Git, demonstrating proficiency in version control, branching, merging, and conflict resolution. My expertise ensures a seamless and collaborative approach to managing code repositories.",
  },
  {
    id: nanoid(),
    title: "TypeScript",
    icon: <SiTypescript className="h-16 w-16 text-blue-500" />,
    text: "I excel in TypeScript, showcasing proficiency in building scalable and maintainable applications with strong typing and object-oriented principles. My expertise in TypeScript extends to implementing interfaces, leveraging advanced features like decorators, and ensuring type safety for robust codebases.",
  },
  // {
  //   id: nanoid(),
  //   title: "Node JS",
  //   icon: <FaNodeJs className="h-16 w-16 text-blue-500" />,
  //   text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  // },
  // {
  //   id: nanoid(),
  //   title: "MongoDB",
  //   icon: <SiMongodb className="h-16 w-16 text-blue-500" />,
  //   text: "Advanced proficiency in MongoDB, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  // },
  // {
  //   id: nanoid(),
  //   title: "Express JS",
  //   icon: <SiExpress className="h-16 w-16 text-blue-500" />,
  //   text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  // },
];

export const projects = [
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://cocktail-koushik.netlify.app",
    github: "https://github.com/devkoushiik/cocktail_hub",
    title: "Cocktail",
    text: "This is a practice project, based on Cocktail DB Api",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/459762/pexels-photo-459762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://gamehubxkoushik.netlify.app/",
    github: "https://github.com/devkoushiik/GameHub",
    title: "GameHub",
    text: "This is a practice project, based on rawg Api.",
  },
  {
    id: nanoid(),
    img: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "https://pizzaxkoushik.netlify.app/",
    github: "https://github.com/devkoushiik/Pizza_shop",
    title: "Pizza Shop",
    text: "This is a pizza delivery website.",
  },
];
