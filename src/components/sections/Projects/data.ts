export interface Project {
  date: string;
  title: string;
  github: string;
  demo: string;
  tech: Array<string>;
  showInProjects: boolean;
  description: string;
}

const projects: Array<Project> = [
  {
    date: '2020-12-01',
    title: 'Exam Prep',
    github: 'https://github.com/ezedinff/exam-prep',
    demo: 'https://exam-prep-jet.vercel.app/',
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Hygraph'],
    showInProjects: true,
    description: 'A web app for prearing for professional certifications exams. it has curated questions and answers for the most popular exams.',
  },
  {
    date: "2020-03-27",
    title: "Appzoid",
    github: "https://github.com/ezedinff/appzoid",
    demo: "https://appzoid.herokuapp.com/",
    tech: ["goland", "fiber", "postgres db"],
    showInProjects: true,
    description:
      "Appzoid is a Backend-as-a-Service — BaaS — that provides web and mobile developers with a set of easy-to-use and satisfy their core backend needs.",
  },
  {
    date: "2020-03-27",
    title: "Adrash",
    github: "https://github.com/ezedinff/Adrash-Frontend",
    demo: "https://elastic-varahamihira-4b6ce0.netlify.app/",
    tech: [
      "Ionic",
      "React",
      "Firebase",
      "Location API",
      "leaflet js",
      "Google Map",
      "Socket.io",
      "Express",
      "NestJS",
    ],
    showInProjects: true,
    description:
      "Most of us want to find a shortest taxi route that takes us to where we want to. In addition, when a new visitor arrives in our capital city Addis Ababa, he/she wants to know where to take a taxi and where its destination would be. There are a number of problems that prevent this from happening...",
  },
  {
    date: "2020-03-27",
    title: "CoroAlarm",
    github: "https://github.com/ezedinff/coroalarm",
    demo: "#",
    tech: [
      "Flutter",
      "Firebase",
      "Stripe headless CMS",
      "Beautiful soap",
      "Web scrapping",
    ],
    showInProjects: true,
    description:
      "I'm trying to confront the situation with the corona pandemic, and do what I can to ease the burdens it creates. in this flutter application, it helps people by addressing news about the situation in their language, especially in Amharic, Oromofia, and English.",
  },
  {
    date: "2020-03-27",
    title: "Ez-Learn",
    github: "https://github.com/ez-learn/web",
    demo: "#",
    tech: ["Nextjs", "React", "Tailwind css", "Material-ui", "Firebase"],
    showInProjects: true,
    description:
      "E-learning platform highly inspired by Pluralsight (my favorite learning site)",
  },
  {
    date: "2020-03-27",
    title: "E-zoom",
    github: "https://github.com/ezedinff/ezoom",
    demo: "https://ezoom.herokuapp.com/",
    tech: ["react", "material-ui", "firebase", "WebRTC", "Canvas", "WebGL"],
    showInProjects: true,
    description:
      "Video conferencing application highly inspired by zoom which mainly used for E-learning",
  },
];

export default projects;
