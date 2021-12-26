interface Experience {
  title: string;
  company: string;
  location: string;
  range: [string, string];
  things: Array<string>;
  skills: Array<string>;
}

const experiences: Array<Experience> = [
  {
    title: "Full Stack Engineer",
    company: "Ethiopian Federal Police Commission",
    location: "Addis Ababa, Ethiopia",
    range: ["July,2021", " - Present"],
    things: [
      "Developing highly performant Material Management system for managing weapons and other things",
      "Developing and Maintaining different Restful APIs for different applications",
    ],
    skills: [
      "Microsoft Windows",
      "IIS",
      "Entity Framework",
      ".NET core",
      "SQL Server",
      "Angular",
      "Ngrx",
      "Angular Material",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "Excellerent Technology Solutions",
    location: "Addis Ababa, Ethiopia",
    range: ["Apr,2021", " - Present"],
    things: [
      "Developed and shipped highly performant Loan decision API for security finance",
      "Developing and Maintaining different Restful APIs for different applications and clients for security finance",
    ],
    skills: ["Microsoft Windows", "IIS", "Dapper", ".NET core", "SQL Server"],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Birrbet PLC",
    location: "Addis Ababa, Ethiopia",
    range: ["Jun,2019", " - Apr,2021"],
    things: [
      "Developed and shipped highly interactive sport wagering web application for Birrbet",
      "Built and shipped mirco services with federated Graphql API for Birrbet sport betting application",
      "Architected and implemented sport wagering application",
      "Built CI/CD pipeline and deployed on AWS cloud",
    ],
    skills: [
      "Microsoft Windows",
      "IIS",
      "Entity Framework",
      ".NET core",
      "SQL Server",
      "React",
      "Material UI",
    ],
  },
  {
    title: "Senior Backend Engineer",
    company: "I-cog Labs",
    location: "Addis Ababa, Ethiopia",
    range: ["Dec,2020", " - Mar,2021"],
    things: [
      "Developed and shipped performant Restful API for Japanese Kids E-learning platform",
      "Designed and Architected Database Tables",
    ],
    skills: ["Linux", "AWS EC2", "AWS Lamda", "AWS SES", "MySQL", "Redis"],
  },
  {
    title: "Full Stack Engineer",
    company: "ICT4Dev Consulting PLC",
    location: "Addis Ababa, Ethiopia",
    range: ["Jan,2017", " - May,2019"],
    things: [
      "Developed and shipped highly interactive Web based monitoring and evaluation system for VITA (irish aided NGO)",
      "Developed and shipped highly interactive web supply and demand agricultural input aggregation platform local farm centers",
      "Developed and shipped highly interactive ecommerce application called malladdis ",
    ],
    skills: [
      "Linux",
      "Cpanel",
      "Laravel",
      "Nodejs",
      "MySQL",
      "Angular",
      "React",
      "Mongodb",
      "Nginx",
      "Apache",
      "Chart.js",
      "D3.js",
    ],
  },
  {
    title: "Full stack Mobile Developer",
    company: "Roulette6",
    location: "Mumbai, India",
    range: ["Mar,2016", " - Dec,2017"],
    things: [
      "Developed and shipped highly interactive android based mobile casino multiplier game",
      "Designed and Architected Database Tables, APIs and so on",
    ],
    skills: [
      "Linux Ubuntu",
      "nginx",
      "Nodejs",
      "Mongodb",
      "MySQL",
      "Java",
      "Android",
      "Andengine",
      "SQLite",
    ],
  },
  {
    title: "Full stack Engineer",
    company: "NuExchange",
    location: "Addis Ababa, Ethiopia",
    range: ["May,2015", " - Aug,2015"],
    things: [
      "Developed and shipped highly interactive web based livestock auction amd sales trading platform",
      "Designed and Architected Database Tables, APIs and so on",
    ],
    skills: ["Linux", "Apache", "Laravel", "MySQL", "Materialize CSS"],
  },
];

export default experiences;
