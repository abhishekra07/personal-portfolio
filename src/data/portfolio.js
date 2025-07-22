import JavaOriginal from 'devicons-react/icons/JavaOriginal';
import SpringOriginal from 'devicons-react/icons/SpringOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import AngularOriginal from 'devicons-react/icons/AngularOriginal';
import VuejsOriginal from 'devicons-react/icons/VuejsOriginal';
import NpmOriginalWordmark from 'devicons-react/icons/NpmOriginalWordmark';
import ApachekafkaOriginal from 'devicons-react/icons/ApachekafkaOriginal';
import TypescriptOriginal from 'devicons-react/icons/TypescriptOriginal';
import JavascriptOriginal from 'devicons-react/icons/JavascriptOriginal';
import Html5Original from 'devicons-react/icons/Html5Original';
import Css3Original from 'devicons-react/icons/Css3Original';
import TailwindcssOriginal from 'devicons-react/icons/TailwindcssOriginal';
import BootstrapOriginal from 'devicons-react/icons/BootstrapOriginal';
import WebpackOriginal from 'devicons-react/icons/WebpackOriginal';
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import RedisOriginal from 'devicons-react/icons/RedisOriginal';
import ElasticsearchOriginal from 'devicons-react/icons/ElasticsearchOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal';
import JenkinsOriginal from 'devicons-react/icons/JenkinsOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import GithubactionsOriginal from 'devicons-react/icons/GithubactionsOriginal';
import SonarqubeOriginal from 'devicons-react/icons/SonarqubeOriginal';
import PostmanOriginal from 'devicons-react/icons/PostmanOriginal';
import IntellijOriginal from 'devicons-react/icons/IntellijOriginal';
import MavenOriginal from 'devicons-react/icons/MavenOriginal';
import JunitOriginal from 'devicons-react/icons/JunitOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import LinuxOriginal from 'devicons-react/icons/LinuxOriginal';
import BashOriginal from 'devicons-react/icons/BashOriginal';

// Portfolio Configuration Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Abhishek Rathore',
    title: 'Software Developer',
    tagline:
      'Specializing in backend development with Java, Spring Boot, and modern cloud technologies. Building scalable, efficient solutions that power great user experiences.',
    location: 'india',
    email: 'abhira719@gmail.com',
    phone: '+91 9876543210',
    resumeFileName: 'Abhishek-Rathore-Resume',
  },

  // Social Links
  social: {
    github: 'https://github.com/abhishekra07',
    linkedin: 'www.linkedin.com/in/abhishek-rathore-666972127',
    email: 'mailto:abhira719@gmail.com',
    portfolio: 'https://abhishek-rathore.dev',
  },

  // Technical Skills
  skills: {
    backend: [
      { name: 'Java', icon: JavaOriginal },
      { name: 'Spring Boot', icon: SpringOriginal },
      { name: 'Spring Security', icon: SpringOriginal },
      { name: 'Microservices', icon: SpringOriginal },
      { name: 'RESTful APIs', icon: PostmanOriginal },
      { name: 'Apache Kafka', icon: ApachekafkaOriginal },
      { name: 'Redis', icon: RedisOriginal },
      { name: 'Maven', icon: MavenOriginal },
      { name: 'JUnit', icon: JunitOriginal },
      { name: 'Mockito', icon: JunitOriginal },
    ],
    frontend: [
      { name: 'React', icon: ReactOriginal },
      { name: 'Angular', icon: AngularOriginal },
      { name: 'Vue.js', icon: VuejsOriginal },
      { name: 'TypeScript', icon: TypescriptOriginal },
      { name: 'JavaScript', icon: JavascriptOriginal },
      { name: 'HTML5', icon: Html5Original },
      { name: 'CSS3', icon: Css3Original },
      { name: 'Tailwind CSS', icon: TailwindcssOriginal },
      { name: 'Bootstrap', icon: BootstrapOriginal },
      { name: 'Webpack', icon: WebpackOriginal },
      { name: 'Vite', icon: VitejsOriginal },
      { name: 'npm', icon: NpmOriginalWordmark },
    ],
    database: [
      { name: 'PostgreSQL', icon: PostgresqlOriginal },
      { name: 'MySQL', icon: MysqlOriginal },
      { name: 'MongoDB', icon: MongodbOriginal },
      { name: 'Redis', icon: RedisOriginal },
      { name: 'Elasticsearch', icon: ElasticsearchOriginal },
      { name: 'H2', icon: MysqlOriginal }, // fallback
      { name: 'Database Design', icon: MongodbOriginal }, // proxy
      { name: 'Query Optimization', icon: PostgresqlOriginal },
      { name: 'Data Modeling', icon: MongodbOriginal },
    ],
    devops: [
      { name: 'Docker', icon: DockerOriginal },
      { name: 'Kubernetes', icon: KubernetesOriginal },
      { name: 'AWS', icon: AmazonwebservicesOriginalWordmark },
      { name: 'Jenkins', icon: JenkinsOriginal },
      { name: 'Git', icon: GitOriginal },
      { name: 'GitHub Actions', icon: GithubactionsOriginal },
      { name: 'SonarQube', icon: SonarqubeOriginal },
      { name: 'Postman', icon: PostmanOriginal },
      { name: 'IntelliJ IDEA', icon: IntellijOriginal },
      { name: 'VS Code', icon: IntellijOriginal }, // fallback
      { name: 'Linux', icon: LinuxOriginal },
      { name: 'Bash', icon: BashOriginal },
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
      images: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=450&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop'
      ],
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

// Blog Data
export const blogData = [
  {
    id: 1,
    title: 'AI in Today\'s World: Transforming Industries and Daily Life',
    slug: 'ai-in-todays-world',
    excerpt: 'Exploring how artificial intelligence is revolutionizing various industries and becoming an integral part of our daily lives.',
    content: `
      <h2>The AI Revolution</h2>
      <p>Artificial Intelligence has moved from science fiction to reality, transforming how we work, live, and interact with technology. From recommendation algorithms on Netflix to autonomous vehicles, AI is everywhere.</p>
      
      <h3>Key Areas of Impact</h3>
      <ul>
        <li><strong>Healthcare:</strong> AI-powered diagnostics and treatment recommendations</li>
        <li><strong>Finance:</strong> Fraud detection and algorithmic trading</li>
        <li><strong>Transportation:</strong> Autonomous vehicles and traffic optimization</li>
        <li><strong>Entertainment:</strong> Content recommendation and creation</li>
      </ul>
      
      <h3>The Future of AI</h3>
      <p>As we look ahead, AI will continue to evolve, bringing both opportunities and challenges. The key is to harness its power responsibly while addressing ethical concerns and ensuring equitable access to AI benefits.</p>
      
      <h3>Practical Applications</h3>
      <p>In software development, AI is already helping developers write better code through tools like GitHub Copilot, automated testing, and intelligent debugging. The integration of AI in development workflows is becoming essential for modern software teams.</p>
    `,
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'Technology', 'Future'],
    publishedDate: 'Dec 15, 2024',
    readTime: '8 min read',
    likes: 245,
    views: 1250,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop'
  },
  {
    id: 2,
    title: 'Java for Beginners: Your Gateway to Programming',
    slug: 'java-for-beginners',
    excerpt: 'A comprehensive guide to getting started with Java programming, covering fundamentals and best practices.',
    content: `
      <h2>Why Choose Java?</h2>
      <p>Java remains one of the most popular programming languages, known for its "write once, run anywhere" philosophy. It's an excellent choice for beginners and professionals alike.</p>
      
      <h3>Setting Up Your Environment</h3>
      <p>Before diving into Java programming, you'll need to set up your development environment:</p>
      <ol>
        <li>Install the Java Development Kit (JDK)</li>
        <li>Choose an Integrated Development Environment (IDE) like IntelliJ IDEA or Eclipse</li>
        <li>Write your first "Hello World" program</li>
      </ol>
      
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Object-Oriented Programming:</strong> Classes, objects, inheritance, and polymorphism</li>
        <li><strong>Data Types:</strong> Primitive and reference types</li>
        <li><strong>Control Structures:</strong> Loops, conditionals, and decision-making</li>
        <li><strong>Exception Handling:</strong> Try-catch blocks and error management</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>As you learn Java, focus on writing clean, readable code. Follow naming conventions, comment your code appropriately, and practice object-oriented design principles.</p>
    `,
    category: 'Java',
    tags: ['Java', 'Programming', 'Beginners', 'Tutorial'],
    publishedDate: 'Dec 10, 2024',
    readTime: '12 min read',
    likes: 189,
    views: 980,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop'
  },
  {
    id: 3,
    title: 'Java Multithreading: Mastering Concurrent Programming',
    slug: 'java-multithreading-guide',
    excerpt: 'Deep dive into Java multithreading concepts, best practices, and common pitfalls to avoid.',
    content: `
      <h2>Understanding Multithreading</h2>
      <p>Multithreading is a powerful feature in Java that allows concurrent execution of multiple threads within a single program, enabling better resource utilization and improved performance.</p>
      
      <h3>Thread Lifecycle</h3>
      <p>A thread in Java goes through various states:</p>
      <ul>
        <li><strong>NEW:</strong> Thread created but not started</li>
        <li><strong>RUNNABLE:</strong> Thread executing or ready to execute</li>
        <li><strong>BLOCKED:</strong> Thread blocked waiting for a monitor lock</li>
        <li><strong>WAITING:</strong> Thread waiting indefinitely for another thread</li>
        <li><strong>TERMINATED:</strong> Thread has exited</li>
      </ul>
      
      <h3>Synchronization</h3>
      <p>When multiple threads access shared resources, synchronization becomes crucial to prevent data corruption and ensure thread safety.</p>
      
      <h3>Best Practices</h3>
      <ol>
        <li>Use thread-safe collections from java.util.concurrent package</li>
        <li>Avoid deadlocks by acquiring locks in a consistent order</li>
        <li>Use executor frameworks instead of creating threads manually</li>
        <li>Implement proper exception handling in threads</li>
      </ol>
      
      <h3>Modern Approaches</h3>
      <p>Consider using modern concurrency tools like CompletableFuture, parallel streams, and the Fork/Join framework for better performance and maintainability.</p>
    `,
    category: 'Java',
    tags: ['Java', 'Multithreading', 'Concurrency', 'Performance'],
    publishedDate: 'Dec 5, 2024',
    readTime: '15 min read',
    likes: 156,
    views: 745,
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop'
  },
  {
    id: 4,
    title: 'Apache Kafka: Building Real-time Data Pipelines',
    slug: 'apache-kafka-guide',
    excerpt: 'Learn how to use Apache Kafka for building robust, scalable real-time data streaming applications.',
    content: `
      <h2>What is Apache Kafka?</h2>
      <p>Apache Kafka is a distributed streaming platform that excels at handling real-time data feeds. It's designed to be fast, scalable, and fault-tolerant.</p>
      
      <h3>Core Concepts</h3>
      <ul>
        <li><strong>Topics:</strong> Categories of messages</li>
        <li><strong>Producers:</strong> Applications that publish messages</li>
        <li><strong>Consumers:</strong> Applications that subscribe to topics</li>
        <li><strong>Brokers:</strong> Kafka servers that store and serve data</li>
        <li><strong>Partitions:</strong> Scalability units within topics</li>
      </ul>
      
      <h3>Use Cases</h3>
      <p>Kafka is commonly used for:</p>
      <ol>
        <li>Real-time analytics and monitoring</li>
        <li>Event sourcing and CQRS patterns</li>
        <li>Log aggregation and centralized logging</li>
        <li>Microservices communication</li>
        <li>Data integration between systems</li>
      </ol>
      
      <h3>Spring Boot Integration</h3>
      <p>Integrating Kafka with Spring Boot is straightforward using Spring Kafka. You can easily create producers and consumers with minimal configuration.</p>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Design your topics with proper partitioning strategy</li>
        <li>Implement proper error handling and retry mechanisms</li>
        <li>Monitor consumer lag and cluster health</li>
        <li>Use schemas for message serialization</li>
      </ul>
    `,
    category: 'Backend',
    tags: ['Kafka', 'Streaming', 'Microservices', 'Real-time'],
    publishedDate: 'Nov 28, 2024',
    readTime: '10 min read',
    likes: 201,
    views: 1100,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'
  },
  {
    id: 5,
    title: 'Modern Frontend Development with React and TypeScript',
    slug: 'modern-frontend-development',
    excerpt: 'Exploring modern frontend development practices using React, TypeScript, and contemporary tooling.',
    content: `
      <h2>The Modern Frontend Landscape</h2>
      <p>Frontend development has evolved significantly with the introduction of modern frameworks, tooling, and development practices that prioritize developer experience and application performance.</p>
      
      <h3>Why React + TypeScript?</h3>
      <p>This combination offers several advantages:</p>
      <ul>
        <li><strong>Type Safety:</strong> Catch errors at compile time</li>
        <li><strong>Better Developer Experience:</strong> Enhanced IntelliSense and refactoring</li>
        <li><strong>Component-Based Architecture:</strong> Reusable and maintainable code</li>
        <li><strong>Rich Ecosystem:</strong> Extensive library support</li>
      </ul>
      
      <h3>Essential Tools</h3>
      <ol>
        <li><strong>Vite:</strong> Fast build tool and dev server</li>
        <li><strong>ESLint & Prettier:</strong> Code quality and formatting</li>
        <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
        <li><strong>React Query:</strong> Data fetching and caching</li>
      </ol>
      
      <h3>Best Practices</h3>
      <ul>
        <li>Use custom hooks for reusable logic</li>
        <li>Implement proper error boundaries</li>
        <li>Optimize rendering with useMemo and useCallback</li>
        <li>Follow accessibility guidelines</li>
        <li>Write comprehensive tests</li>
      </ul>
    `,
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Frontend', 'Modern Development'],
    publishedDate: 'Nov 20, 2024',
    readTime: '9 min read',
    likes: 178,
    views: 892,
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=450&fit=crop'
  },
  {
    id: 6,
    title: 'DevOps Best Practices: CI/CD with Docker and Kubernetes',
    slug: 'devops-best-practices',
    excerpt: 'Implementing robust CI/CD pipelines using Docker containerization and Kubernetes orchestration.',
    content: `
      <h2>DevOps in the Modern Era</h2>
      <p>DevOps practices have become essential for delivering software efficiently and reliably. Container technologies like Docker and orchestration platforms like Kubernetes are at the forefront of this transformation.</p>
      
      <h3>Docker Fundamentals</h3>
      <p>Docker provides:</p>
      <ul>
        <li>Consistent environments across development, testing, and production</li>
        <li>Lightweight virtualization</li>
        <li>Easy application packaging and distribution</li>
        <li>Simplified dependency management</li>
      </ul>
      
      <h3>Kubernetes Orchestration</h3>
      <p>Kubernetes helps manage containerized applications at scale:</p>
      <ol>
        <li><strong>Service Discovery:</strong> Automatic load balancing</li>
        <li><strong>Auto-scaling:</strong> Horizontal and vertical scaling</li>
        <li><strong>Self-healing:</strong> Automatic container replacement</li>
        <li><strong>Rolling Updates:</strong> Zero-downtime deployments</li>
      </ol>
      
      <h3>CI/CD Pipeline Structure</h3>
      <p>A typical pipeline includes:</p>
      <ul>
        <li>Source code management (Git)</li>
        <li>Automated testing (unit, integration, e2e)</li>
        <li>Security scanning</li>
        <li>Container image building</li>
        <li>Deployment automation</li>
        <li>Monitoring and alerts</li>
      </ul>
      
      <h3>Security Considerations</h3>
      <p>Implement security at every stage: secure base images, vulnerability scanning, secrets management, and network policies.</p>
    `,
    category: 'DevOps',
    tags: ['DevOps', 'Docker', 'Kubernetes', 'CI/CD'],
    publishedDate: 'Nov 15, 2024',
    readTime: '13 min read',
    likes: 234,
    views: 1340,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop'
  }
];

export default portfolioData;
