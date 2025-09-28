const commands = {
    'whoami': 'Ezedin Fedlu - Senior Software Engineer @ Volvo Cars',
    'about': `Innovative Software Engineer with 9+ Years of Experience transforming business challenges into technological solutions.

Currently architecting large-scale automotive systems at Volvo Cars, specializing in AI-powered solutions, full-stack development, and cloud architecture.

Key Strengths:
• Strategic Problem-Solving & Client-Focused Solutions
• Technology Versatility across Multiple Stacks
• Microservices & Cloud Infrastructure Expertise
• AI & Machine Learning Integration`,
    
    'experience': `CURRENT ROLE:
Senior Software Engineer @ Volvo Cars (June 2024 - Present)
• Architected automotive manifest ingestion system with GraphQL API
• Built AI-powered support chatbot (20% automation rate)
• Developed monitoring infrastructure with Grafana & Prometheus
• Implemented event-driven architecture with Azure Service Bus

RECENT EXPERIENCE:
• Full Stack Engineer @ Bluering (Jan-May 2024)
• Cloud Consultant @ Nedamco Africa (Feb 2023-Mar 2024)
• Full Stack Engineer @ PUSHIT (Apr 2023-Feb 2024)
• Back End Developer @ Develhope (Feb-Sep 2023)

Use 'experience --details' for complete work history.`,

    'experience --details': `COMPLETE WORK HISTORY:

🚗 Volvo Cars - Senior Software Engineer (June 2024 - Present)
   • Automotive manifest ingestion system with Neo4j & GraphQL
   • AI chatbot with RAG reducing support cases by 20%
   • Monitoring infrastructure with Grafana & Prometheus

💼 Telescope Services AB - Senior Software Engineer (May 2024 - Present)

💰 Bluering - Full Stack Engineer (Jan-May 2024)
   • Java Spring Boot & Angular applications
   • SQL optimization & database operations

☁️ Nedamco Africa - Cloud Consultant (Feb 2023-Mar 2024)
   • Cloud infrastructure design & consultation

⚽ PUSHIT - Full Stack Engineer (Apr 2023-Feb 2024)
   • Sport field management APIs & dashboard

🎓 Develhope - Back End Developer (Feb-Sep 2023)
   • Educational platform RESTful API development

💻 Excellerent Solutions - Full Stack Engineer (Apr 2021-Sep 2023)
   • Loan decision API development at Security Finance

📹 Pencil Spaces - Senior Software Engineer (Apr-Aug 2022)
   • Video call system with 16-tile support
   • Real-time chat & whiteboard features

🔧 KAPSYS - Senior Software Engineer (Jan-Aug 2022)
   • GraphQL API development & AWS deployment

👮 Ethiopian Federal Police - Senior Software Engineer (Jul 2021-Feb 2022)
   • Team leadership (8 developers)

🎰 Birrbet PLC - Senior Software Engineer (June 2019-Apr 2021)
   • Sports wagering application with microservices

🧠 iCog Labs - Software Engineer (Dec 2020-Mar 2021)
   • Japanese Kids E-learning platform API

🌱 ICT4Development - Software Engineer (June 2017-May 2019)
   • Agricultural platform & e-commerce development

🐄 Nuexchange - Software Engineer (May 2015-June 2017)
   • Livestock auction web application`,

    'skills': `PROGRAMMING LANGUAGES:
• JavaScript/TypeScript • C# • Java • Python • Rust • Kotlin

FRONTEND TECHNOLOGIES:
• React • Angular • Blazor • Windows Applications

BACKEND TECHNOLOGIES:
• .NET Framework • Node.js • Express.js • Spring Boot • Django
• Laravel • Koa.js

DATABASES:
• SQL/NoSQL • PostgreSQL • MongoDB • Neo4j • Redis

CLOUD & DEVOPS:
• AWS • Azure • Google Kubernetes Engine (GKE)
• Docker • Kubernetes • Jenkins • Terraform

SPECIALIZATIONS:
• Microservices Architecture • Event-Driven Systems
• GraphQL APIs • AI/ML Integration • OWASP Security`,

    'projects': `FEATURED PROJECTS:

🚗 Automotive Manifest System (Volvo Cars)
   • Large-scale vehicle data processing
   • Neo4j graph database backend
   • GraphQL unified API

🤖 AI Support Chatbot (Volvo Cars)
   • RAG (Retrieval-Augmented Generation)
   • 20% automation of support cases
   • Proactive issue resolution

📊 Monitoring Infrastructure (Volvo Cars)
   • Grafana & Prometheus integration
   • Real-time performance metrics
   • Multi-team debugging support

🎰 Sports Wagering Platform (Birrbet)
   • Interactive web application
   • Federated GraphQL microservices
   • AWS CI/CD pipeline

📚 E-learning Platform API (Develhope)
   • Comprehensive RESTful API
   • Multi-tenant architecture
   • Educational content management

⚽ Sport Field Management (PUSHIT)
   • Booking & scheduling system
   • Real-time availability tracking
   • Manager dashboard`,

    'education': `🎓 EDUCATION & CERTIFICATIONS:

FORMAL EDUCATION:
• New York University - Artificial Intelligence
• Addis Ababa University - Bachelor's, Computer Software Engineering  
• Udacity - Cloud Developer Nanodegree

CERTIFICATIONS:
• Microsoft Certified: Azure Fundamentals
• AWS Cloud Practitioner
• Neo4j Certified Professional
• Algorithms on Strings & Graphs
• Concurrent Programming with Go
• English Speaking - C1 Level`,

    'contact': 'CONTACT_INFO',
    
    'location': `📍 CURRENT LOCATION:
Gothenburg, Västra Götaland County, Sweden

🌍 WORK EXPERIENCE LOCATIONS:
• Sweden (Current - Volvo Cars)
• Lebanon (Remote - Bluering)
• Israel (Remote - PUSHIT)
• Italy (Remote - Develhope) 
• United States (Excellerent, Pencil Spaces)
• Austria (Remote - KAPSYS)
• Ethiopia (Multiple companies)

💼 WORK ARRANGEMENT:
Available for on-site, hybrid, and remote opportunities`,

    'achievements': `🏆 KEY ACHIEVEMENTS:

PERFORMANCE METRICS:
• Improved operational efficiency by 30% at Volvo Cars
• Built AI chatbot with 20% support case automation
• Reduced debugging time by 50% across teams
• Achieved 99.9% system uptime reliability

LEADERSHIP:
• Led team of 8 developers at Ethiopian Federal Police
• Mentored junior developers across multiple organizations
• Conducted comprehensive code reviews & best practices

TECHNICAL IMPACT:
• Architected event-driven systems serving multiple teams
• Published library to package manager (KAPSYS)
• Built video conferencing supporting 500+ concurrent users
• Generated $2M+ revenue with sports betting platform`,

    'technologies': `🔧 TECHNOLOGY STACK BREAKDOWN:

CURRENT FOCUS (2024):
• C# & .NET Framework (Volvo Cars)
• Neo4j Graph Database
• Azure Service Bus & Functions  
• Grafana & Prometheus Monitoring
• AI/RAG Implementation

BACKEND EXPERTISE:
• .NET Core/Framework • Spring Boot • Node.js/Express
• Django • Laravel • Koa.js

FRONTEND MASTERY:
• React (Advanced) • Angular (Expert) • Blazor
• TypeScript/JavaScript ES6+

CLOUD PLATFORMS:
• Microsoft Azure (Certified)
• Amazon Web Services (Practitioner)
• Google Kubernetes Engine

DATABASE SYSTEMS:
• PostgreSQL • MongoDB • Neo4j • Redis • SQL Server

ARCHITECTURE PATTERNS:
• Microservices • Event-Driven • SOA • Serverless`,

    'help': `AVAILABLE COMMANDS:

PERSONAL INFO:
• whoami          - Basic introduction
• about           - Detailed professional summary  
• contact         - Contact information

PROFESSIONAL:
• experience      - Recent work experience
• experience --details - Complete work history
• skills          - Technical skills overview
• technologies    - Detailed tech stack
• projects        - Featured projects
• achievements    - Key accomplishments

BACKGROUND:
• education       - Education & certifications
• location        - Current location & work history

SYSTEM:
• clear           - Clear terminal
• help            - Show this help menu
• exit            - Close terminal

TIP: Click on any command to execute it automatically!`,

    'clear': 'CLEAR_TERMINAL',
    'exit': 'EXIT_TERMINAL'
  };

export default commands;