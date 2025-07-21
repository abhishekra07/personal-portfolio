import {
  // Backend
  SiSpringboot,
  SiSpringsecurity,
  SiMicrodotblog, // closest to Microservices
  SiApollographql,
  SiApachekafka,
  SiRedis,
  SiApachemaven,
  SiGradle,
  SiJunit5,

  // Frontend
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiWebpack,
  SiVite,
  SiNpm,
  SiYarn,

  // Database
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiElasticsearch,
  SiSqlite,
  SiDatabricks, // for Data Modeling
  SiCodefactor, // for Query Optimization (approx)
  SiInfracost, // for Database Design (approx)
  SiHatenabookmark, // for H2 (fallback)

  // DevOps & Tools
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiGithubactions,
  SiSonarqube,
  SiPostman,
  SiIntellijidea,
  SiLinux,
  SiGnubash,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';

// Portfolio Configuration Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Abhishek Rathore',
    title: 'Software Developer',
    tagline:
      'Specializing in backend development with Java, Spring Boot, and modern cloud technologies. Building scalable, efficient solutions that power great user experiences.',
    location: 'India',
    email: 'abhishek.rathore@example.com',
    phone: '+91 9876543210',
    resumeFileName: 'Abhishek-Rathore-Resume',
  },

  // Social Links
  social: {
    github: 'https://github.com/abhishek-rathore',
    linkedin: 'https://linkedin.com/in/abhishek-rathore',
    email: 'mailto:abhishek.rathore@example.com',
    portfolio: 'https://abhishek-rathore.dev',
  },

  // Technical Skills
  skills: {
    backend: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'Spring Security', icon: SiSpringsecurity },
      { name: 'Microservices', icon: SiMicrodotblog },
      { name: 'RESTful APIs', icon: SiApollographql }, // closest alternative
      { name: 'GraphQL', icon: SiApollographql },
      { name: 'Apache Kafka', icon: SiApachekafka },
      { name: 'Redis', icon: SiRedis },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Gradle', icon: SiGradle },
      { name: 'JUnit', icon: SiJunit5 },
      { name: 'Mockito', icon: SiJunit5 },
    ],
    frontend: [
      { name: 'React', icon: SiReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'Vue.js', icon: SiVuedotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Webpack', icon: SiWebpack },
      { name: 'Vite', icon: SiVite },
      { name: 'npm', icon: SiNpm },
      { name: 'yarn', icon: SiYarn },
    ],
    database: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Elasticsearch', icon: SiElasticsearch },
      { name: 'H2', icon: SiHatenabookmark }, // closest substitute
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Database Design', icon: SiInfracost }, // design/infra related
      { name: 'Query Optimization', icon: SiCodefactor }, // code optimization proxy
      { name: 'Data Modeling', icon: SiDatabricks },
    ],
    devops: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'AWS', icon: FaAws },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'SonarQube', icon: SiSonarqube },
      { name: 'Postman', icon: SiPostman },
      { name: 'IntelliJ IDEA', icon: SiIntellijidea },
      { name: 'VS Code', icon: DiVisualstudio },
      { name: 'Linux', icon: SiLinux },
      { name: 'Bash', icon: SiGnubash },
    ],
  },

  // Professional Experience
  experience: [
    {
      id: 1,
      title: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      location: 'Mumbai, India',
      period: '2022 - Present',
      type: 'Full-time',
      description:
        'Leading backend development initiatives and architecting scalable microservices solutions.',
      responsibilities: [
        'Designed and implemented microservices architecture serving 100k+ daily users',
        'Led a team of 5 developers in delivering critical business features',
        'Optimized database queries resulting in 40% performance improvement',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Docker',
        'AWS',
        'Kafka',
      ],
    },
    {
      id: 2,
      title: 'Software Developer',
      company: 'Digital Innovations Pvt Ltd',
      location: 'Bangalore, India',
      period: '2020 - 2022',
      type: 'Full-time',
      description:
        'Developed and maintained enterprise-level applications with focus on performance and scalability.',
      responsibilities: [
        'Built RESTful APIs handling 50k+ requests per day',
        'Integrated third-party payment gateways and services',
        'Collaborated with frontend teams to deliver seamless user experiences',
        'Participated in code reviews and mentored junior developers',
      ],
      technologies: ['Java', 'Spring Framework', 'MySQL', 'Redis', 'Angular'],
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'StartupTech Solutions',
      location: 'Pune, India',
      period: '2019 - 2020',
      type: 'Full-time',
      description:
        'Started career focusing on full-stack development and learning modern development practices.',
      responsibilities: [
        'Developed responsive web applications using React and Node.js',
        'Participated in agile development processes',
        'Wrote unit tests and maintained code documentation',
        'Contributed to open-source projects and internal tools',
      ],
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js'],
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'E-Commerce Microservices Platform',
      description:
        'A scalable e-commerce platform built with microservices architecture, handling user management, product catalog, orders, and payments.',
      longDescription:
        'Designed and implemented a comprehensive e-commerce platform using microservices architecture. The system includes separate services for user authentication, product management, order processing, payment integration, and notification services. Implemented using Spring Boot, PostgreSQL, Redis for caching, and Apache Kafka for event-driven communication between services.',
      image: '/placeholder.svg',
      technologies: [
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Redis',
        'Apache Kafka',
        'Docker',
        'AWS',
      ],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filtering',
        'Shopping cart and order management',
        'Payment gateway integration',
        'Real-time notifications',
        'Admin dashboard for inventory management',
      ],
      githubUrl: 'https://github.com/abhishek-rathore/ecommerce-microservices',
      liveUrl: 'https://ecommerce-demo.abhishek-rathore.dev',
      status: 'Completed',
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description:
        'A modern chat application with real-time messaging, file sharing, and group chat functionality built with React and WebSocket.',
      longDescription:
        'Developed a comprehensive chat application featuring real-time messaging using WebSocket connections. The application supports private messaging, group chats, file sharing, emoji reactions, and message history. Built with a responsive design that works seamlessly across desktop and mobile devices.',
      image: '/placeholder.svg',
      technologies: [
        'React',
        'Node.js',
        'Socket.io',
        'MongoDB',
        'Express.js',
        'Tailwind CSS',
      ],
      features: [
        'Real-time messaging with WebSocket',
        'Private and group chat rooms',
        'File and image sharing',
        'Message history and search',
        'Online status indicators',
        'Responsive mobile design',
      ],
      githubUrl: 'https://github.com/abhishek-rathore/realtime-chat',
      liveUrl: 'https://chat-app.abhishek-rathore.dev',
      status: 'Completed',
    },
    {
      id: 3,
      title: 'Task Management API',
      description:
        'RESTful API for task management with authentication, role-based access control, and real-time updates.',
      longDescription:
        'Built a robust task management API with comprehensive features including user authentication, role-based access control, task assignment, project management, and real-time notifications. The API follows REST principles and includes comprehensive documentation using Swagger/OpenAPI.',
      image: '/placeholder.svg',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Security',
        'PostgreSQL',
        'JWT',
        'Swagger',
      ],
      features: [
        'JWT-based authentication',
        'Role-based access control (Admin, Manager, User)',
        'Task CRUD operations with assignments',
        'Project and team management',
        'Real-time notifications',
        'Comprehensive API documentation',
      ],
      githubUrl: 'https://github.com/abhishek-rathore/task-management-api',
      liveUrl: 'https://api-docs.abhishek-rathore.dev',
      status: 'Completed',
    },
  ],

  // Education
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Indian Institute of Technology',
      location: 'Mumbai, India',
      period: '2015 - 2019',
      grade: '8.5 CGPA',
      description:
        'Focused on software engineering, data structures, algorithms, and database management systems.',
    },
  ],

  // Certifications
  certifications: [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-SAA-123456',
    },
    {
      name: 'Oracle Certified Professional, Java SE Developer',
      issuer: 'Oracle',
      date: '2022',
      credentialId: 'OCP-JAVA-789012',
    },
    {
      name: 'Spring Professional Certification',
      issuer: 'VMware',
      date: '2021',
      credentialId: 'SPRING-PRO-345678',
    },
  ],
};

export default portfolioData;
