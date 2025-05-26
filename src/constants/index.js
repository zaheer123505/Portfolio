import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.png";
import project5 from '../assets/projects/project-5.png'

// export const HERO_CONTENT = `I am a motivated and creative full stack developer with a strong foundation in front-end and back-end technologies. With hands-on experience in projects using HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB, I enjoy building user-friendly and efficient web applications. My goal is to leverage my skills to develop impactful tech solutions, continuously learn new tools, and contribute meaningfully to innovation.`;
export const HERO_CONTENT = `I am a motivated and creative frontend developer with a solid foundation in building engaging and responsive user interfaces. Proficient in HTML, CSS, JavaScript, and ReactJS, I specialize in crafting seamless and intuitive web experiences. I am passionate about continuously enhancing my frontend skills while expanding my knowledge of backend technologies like Node.js and MongoDB, with the goal of evolving into a full stack developer. My aim is to deliver impactful, user-centric solutions and contribute meaningfully to innovative projects.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer passionate about creating impactful and user-centric web applications. My technical experience spans across HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB, with an academic background in Computer Science and Engineering from NIT Silchar. I have successfully built real-time applications like a Script Monitoring Tool at Bosch and several independent projects like NITS-SHOP and a Sorting Visualizer. I enjoy learning new technologies, collaborating in teams, and solving real-world problems with code. Outside of development, I love sketching anime, playing Kabaddi and Handball, and exploring creative hobbies like guitar.`;


export const EXPERIENCES = [
  {
    year: "May 2024 – July 2024",
    role: "Software Development Intern",
    company: "Bosch",
    description: `Developed and maintained a React-based Script Monitoring Application to streamline frontend monitoring and improve developer workflow. Designed reusable UI components and integrated RESTful APIs, resulting in a 25% improvement in responsiveness. Built a dashboard for debugging and issue tracking that reduced resolution time by 40%.`,
    technologies: ["ReactJS", "JavaScript", "REST API", "HTML", "CSS", "Git"],
  }
];

export const PROJECTS = [
  {
    title: "NITS-SHOP",
    image: project1,
    description:
      "A web platform that allows NIT Silchar students to buy and sell items within the college community. Focused on responsive UI and efficient browsing using ReactJS and Bootstrap.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS", "Bootstrap"],
  },
  {
    title: "CodeLens",
    image: project5, // Replace with your actual import or path
    description:
      "An AI-powered code review web app built using React and Gemini AI API. Users can paste code, receive instant feedback on bugs and improvements, toggle between dark/light mode, view visual code diffs, and download suggestions. Includes Monaco Editor, toast notifications, and JavaScript execution support.",
    technologies: ["React", "Tailwind CSS", "Gemini AI API", "Monaco Editor", "JavaScript"]
  },
  {
    title: "NITS Kabaddi Club Website",
    image: project2,
    description:
      "A club portal for Kabaddi players to track their performance, upload match videos, and share workout routines. Includes player accounts and statistics dashboard.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "React"],
  },
  {
    title: "Sorting Visualizer",
    image: project3,
    description:
      "An interactive visualizer for learning sorting algorithms like Bubble, Insertion, Merge, and Quick Sort. Includes a dynamic array size slider and visual feedback for each operation.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  // {
  //   title: "E-Library Management System",
  //   image: project4,
  //   description:
  //     "A desktop application developed in C# using ASP.NET to manage book records, track issued books, and generate reports for an academic library.",
  //   technologies: ["C#", "ASP.NET", "SQL Server"],
  // },
  {
    title: "Nike Shoe Store Clone",
    image: project4, // Make sure to import/add the image
    description:
      "A responsive e-commerce website clone of Nike's shoe store, featuring product listings, customer reviews, and a login system. Built with modern frontend technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Font Awesome"],
  
},


];





export const CONTACT = {
  address: "NIT Silchar, Assam, India",
  phoneNo: "+91-7075671585",
  // email: "shaik21_ug@cse.nits.ac.in",
  email:"sonyzaheer1585@gmail.com"
};

