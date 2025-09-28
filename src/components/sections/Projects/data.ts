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
    date: '2024-06-01',
    title: 'Automotive Manifest System',
    github: '#',
    demo: '#',
    tech: ['Neo4j', 'GraphQL', 'C#', '.NET', 'Azure'],
    showInProjects: true,
    description: 'Large-scale vehicle data processing system with Neo4j graph database backend and GraphQL unified API for automotive manifest ingestion at Volvo Cars.',
  },
  {
    date: '2024-06-01',
    title: 'AI Support Chatbot',
    github: '#',
    demo: '#',
    tech: ['RAG', 'AI/ML', 'C#', 'Azure Functions', 'OpenAI'],
    showInProjects: true,
    description: 'AI-powered support chatbot using Retrieval-Augmented Generation (RAG) achieving 20% automation of support cases with proactive issue resolution.',
  },
  {
    date: '2024-06-01',
    title: 'Monitoring Infrastructure',
    github: '#',
    demo: '#',
    tech: ['Grafana', 'Prometheus', 'Azure', 'Microservices'],
    showInProjects: true,
    description: 'Real-time performance metrics and monitoring infrastructure with Grafana & Prometheus integration supporting multi-team debugging.',
  },
  {
    date: '2021-06-01',
    title: 'Sports Wagering Platform',
    github: '#',
    demo: '#',
    tech: ['GraphQL', 'Microservices', 'AWS', 'CI/CD'],
    showInProjects: true,
    description: 'Interactive sports betting web application with federated GraphQL microservices and AWS CI/CD pipeline generating $2M+ revenue.',
  },
  {
    date: '2023-02-01',
    title: 'E-learning Platform API',
    github: '#',
    demo: '#',
    tech: ['RESTful API', 'Multi-tenant', 'Node.js', 'PostgreSQL'],
    showInProjects: true,
    description: 'Comprehensive RESTful API with multi-tenant architecture for educational content management and learning platform operations.',
  },
  {
    date: '2023-04-01',
    title: 'Sport Field Management',
    github: '#',
    demo: '#',
    tech: ['React', 'Node.js', 'Real-time', 'Dashboard'],
    showInProjects: true,
    description: 'Booking & scheduling system with real-time availability tracking and comprehensive manager dashboard for sport field operations.',
  },
];

export default projects;
