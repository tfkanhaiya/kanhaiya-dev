import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";


import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
  RiGithubLine,
  RiBrushLine,
  RiBrainLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Kanhaiya Kumar",
  role: "Frontend Developer",
  subheading:
    "Technology is the art of turning ideas into reality, where code shapes the future and innovation drives progress. Build, create, and inspire—one line at a time. 🚀",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Gemini Clone",
    description:
      "Built a generative AI app utilizing the Google Gemini API to create dynamic and interactive user experiences. Integrated real-time AI responses and interactions using React JS for seamless user engagement.",
    techStack: ["React", "Tailwind CSS", "Gemini API"],
    imgSrc: project1,
    link: "https://geminixd.netlify.app/",
    github: "https://github.com/tfkanhaiya",
    demo: "https://geminixd.netlify.app/",
  },
  {
    id: 2,
    title: "VirtualR",
    description:
      "Developed VirtualR, an advanced virtual platform with a modern, responsive landing page. Built using React.js, optimized with Vite for fast development, and styled with Tailwind CSS for a seamless user experience.",
    techStack: ["React", "Vite", "Tailwind CSS"],
    imgSrc: project2,
    link: "https://virtualr-red.vercel.app/",
    github: "https://github.com/tfkanhaiya/virtualr",
    demo: "https://virtualr-red.vercel.app/",
  },
  {
    id: 3,
    title: "Movie Watchlist",
    description:
      "Developed a movie watchlist app using TypeScript, SCSS, and the OMDB API. Incorporated local storage to save user preferences, enabling a personalized and seamless movie browsing experience for users.",
    techStack: ["Typescript", "SCSS", "OMDBAPI"],
    imgSrc: project3,
    link: "https://m-ovie-wa-tc-h-list.vercel.app/",
    github: "https://github.com/tfkanhaiya/mOvie-WaTcHList",
    demo: "https://m-ovie-wa-tc-h-list.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Blog Platform",
  //   description:
  //     "A blogging platform with a content management system, user authentication, and an intuitive editor.",
  //   techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "SCSS"],
  //   imgSrc: project4,
  //   link: "https://example-blogplatform.com",
  //   github: "https://github.com/your-repo/project-one",
  //   demo: "https://project-one-demo.com",
  // },
  // {
  //   id: 5,
  //   title: "Task Management App",
  //   description:
  //     "A task management tool with user authentication, reminders, and collaboration features.",
  //   techStack: ["Angular", "Firebase", "Material UI", "SCSS"],
  //   imgSrc: project5,
  //   link: "https://example-taskapp.com",
  //   github: "https://github.com/your-repo/project-one",
  //   demo: "https://project-one-demo.com",
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project6,
  //   link: "https://example-learningplatform.com",
  //   github: "https://github.com/your-repo/project-one",
  //   demo: "https://project-one-demo.com",
  // },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "MySQL",
    icon: <RiDatabaseLine className="text-blue-600" />,
  },
  {
    name: "Next.js",
    icon: <RiReactjsLine className="text-gray-600" />, 
  },
  {
    name: "Appwrite",
    icon: <RiCodeSSlashLine className="text-purple-500" />, 
  },
  {
    name: "TypeScript",
    icon: <RiJavascriptLine className="text-blue-700" />, 
  },
  {
    name: "VS Code",
    icon: <RiCodeSSlashLine className="text-darkblue-500" />, 
  },
  {
    name: "Git",
    icon: <RiGitBranchLine className="text-orange-500" />, 
  },
  {
    name: "GitHub",
    icon: <RiGithubLine className="text-black" />, 
  },
  {
    name: "Canva",
    icon: <RiBrushLine className="text-pink-500" />,
  }, 
  {
    name: "Gen AI",
    icon: <RiBrainLine className="text-indigo-500" />,
  },     
];

export const EXPERIENCES = [
  {
    yearRange: "Aug - Sept 2024",
    role: "Full-Stack Developer Intern",
    company: "CodeAlpha",
    description:
      "Developed a social media app with user profiles, post likes & comments, friend connections, and real-time messaging.Created an eCommerce website featuring product listings, shopping cart, and user authentication.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    yearRange: "Sept - Nov 2023",
    role: "Software Engineer Intern",
    company: "Shoppeal Tech",
    description:
      "Developed the frontend of the company's personal code editor website.Collaborated with frontend and backend teams for seamless integration.Enhanced user experience through responsive design and performance optimization.",
    techStack: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma"],
  },
  {
    yearRange: "Sept - Oct 2023",
    role: "Web Developer Intern",
    company: "CodSoft",
    description:
      "Built a responsive tribute page using HTML and Tailwind CSS framework.Developed a task management app with features for task creation, tracking, and status updates.",
    techStack: ["HTML", "CSS", "React.js", "TailwindCSS"],
  },
  // {
  //   yearRange: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "PayPal",
  //   description:
  //     "Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.",
  //   techStack: ["Ruby", "Rails", "PHP", "SQLite"],
  // },
];

export const ABOUT_ME = {
  name: "Kanhaiya Kumar",
  // profession: "Frontend Developer",
  description: "Hey there👋🏼, I'm a frontend developer with a B.Tech in Computer Science and Engineering from NSHM Knowledge Campus, Durgapur. I specialize in building scalable web applications using React, Next.js, and backend technologies. With experience in AI-powered applications and modern web frameworks, I am passionate about creating innovative solutions.",
  location: "📍 Durgapur, West Bengal",
};


// export const EDUCATION = [
//   {
//     id: 1,
//     degree: "Bachelor of Technology with Honors in Computer Science & Engineering",
//     institution: "NSHM Knowledge Campus Durgapur",
//     duration: "2020-2024",
//     description:
//       "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development.",
//   },
//   {
//     id: 2,
//     degree: "Introduction to Software Product Management",
//     institution: "University of Alberta",
//     duration: "2022",
//     description:
//       "The Introduction to Software Product Management course covers essential skills for managing software products effectively.",
//   },
//   {
//     id: 3,
//     degree: "Certified in Cloud Core",
//     institution: "IBM",
//     duration: "2023",
//     description:
//       "Earned a certification in Cloud Core, demonstrating expertise in cloud technologies.",
//   },
// ];

// export const TESTIMONIAL = {
//   name: "Sarah Doe",
//   title: "CEO, TechCorp",
//   quote:
//     "Working with David was a game-changer. His expertise in full-stack development helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
//   image: personImage,
// };
