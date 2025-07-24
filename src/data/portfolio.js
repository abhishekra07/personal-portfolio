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
import VitejsOriginal from 'devicons-react/icons/VitejsOriginal';
import PostgresqlOriginal from 'devicons-react/icons/PostgresqlOriginal';
import MysqlOriginal from 'devicons-react/icons/MysqlOriginal';
import MongodbOriginal from 'devicons-react/icons/MongodbOriginal';
import RedisOriginal from 'devicons-react/icons/RedisOriginal';
import DockerOriginal from 'devicons-react/icons/DockerOriginal';
import KubernetesOriginal from 'devicons-react/icons/KubernetesOriginal';
import GitOriginal from 'devicons-react/icons/GitOriginal';
import GithubactionsOriginal from 'devicons-react/icons/GithubactionsOriginal';
import SonarqubeOriginal from 'devicons-react/icons/SonarqubeOriginal';
import PostmanOriginal from 'devicons-react/icons/PostmanOriginal';
import IntellijOriginal from 'devicons-react/icons/IntellijOriginal';
import MavenOriginal from 'devicons-react/icons/MavenOriginal';
import JunitOriginal from 'devicons-react/icons/JunitOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import JqueryOriginal from 'devicons-react/icons/JqueryOriginal';
import VscodeOriginal from 'devicons-react/icons/VscodeOriginal';
import SocketioOriginal from 'devicons-react/icons/SocketioOriginal';
import HibernateOriginal from 'devicons-react/icons/HibernateOriginal';
import GooglecloudOriginal from 'devicons-react/icons/GooglecloudOriginal';

import {
  Server,
  Database,
  Zap,
  BotIcon,
  ServerIcon,
  TrophyIcon,
} from 'lucide-react';

// Portfolio Configuration Data
export const portfolioData = {
  // Personal Information
  personal: {
    name: 'Abhishek Rathore',
    title: 'Software Developer',
    // tagline: 'Specializing in backend development with Java, Spring Boot, and modern cloud technologies. Building scalable, efficient solutions that power great user experiences.',
    tagline:
      'Backend-focused developer specializing in Java, Spring Boot, and cloud-native architectures — building scalable systems that deliver real business value.',
    // tagline: 'Specializing in Java and Spring Boot, I build reliable backend systems and cloud-native solutions that scale with business needs.',
    // tagline: 'Engineer focused on Java-based backend systems, microservices, and cloud infrastructure — creating performant APIs and scalable business solutions.',
    // tagline: 'Java backend developer building scalable APIs, microservices, and cloud-native solutions with Spring Boot.',
    location: 'india',
    email: 'abhira719@gmail.com',
    phone: '+91 8839705239',
    resumeFileName: 'Abhishek-Rathore-Resume',
  },
  // about: {
  //   introduction:
  //     "I'm a dedicated software developer with over 5 years of experience building scalable, efficient, and reliable backend systems. My journey began with a fascination for how distributed systems work, and today I specialize in designing enterprise-grade applications using Java, Spring Boot, Kafka, and cloud-native technologies.",
  //   whatIDo:
  //     "My expertise lies in backend development, microservices architecture, and performance optimization. I excel at crafting robust APIs, integrating with third-party systems, and enabling real-time data flows using event-driven patterns. Additionally, I’ve worked on frontend development using React and Vue, and have built DevOps pipelines for CI/CD, containerization, and cloud deployments on AWS and GCP.",
  //   philosophy:
  //     "I believe in writing clean, modular, and well-tested code that’s built to evolve. I'm a strong advocate for design patterns, code reusability, and automation. Whether it's test-driven development, debugging production issues, or leading architecture discussions — I focus on delivering long-term value through maintainability and performance.",
  //   beyondCode:
  //     "Outside of development, I enjoy exploring new frameworks, contributing to technical blogs, and mentoring junior developers. When I’m not immersed in code, I like hiking, experimenting with cooking, and following emerging trends in AI/ML and system design — keeping my perspective wide and fresh."
  // },
  about: {
    introduction: `I'm a software engineer with over 5 years of hands-on experience building robust backend systems, scalable microservices, and efficient cloud-native applications. My expertise lies in Java, Spring Boot, RESTful APIs, and modern backend architecture. Having worked across mid-size product teams and agile enterprise environments, I enjoy solving real-world problems through clean, maintainable code.`,
    whatIDo: `In my current role, I lead backend initiatives using Java, Spring Boot, Kafka, and PostgreSQL. I'm experienced in designing secure APIs, implementing microservices, and optimizing performance across systems serving thousands of users daily. I also have solid experience in Redis caching, Dockerized deployments, and CI/CD pipeline setup via Jenkins and GitHub Actions. On the frontend, I’ve worked with React, Angular, and TypeScript when needed.`,
    philosophy: `I believe in writing code that’s built to last. I'm a strong proponent of clean code practices, meaningful reviews, and performance-first thinking. I regularly engage in refactoring, automated testing (JUnit/Mockito), and using metrics to guide performance improvements. For me, engineering is not just about writing code — it’s about building systems that are reliable, testable, and user-centric.`,
    beyondCode: `Outside of work, I enjoy learning emerging tools and exploring how AI and LLMs are reshaping the software development landscape. I occasionally contribute to personal projects, technical blogs, and open-source when time permits. I'm also passionate about sharing knowledge and have mentored junior developers within teams. Beyond tech, I find balance through fitness, travel, and the occasional cricket match.`,
  },

  // Social Links
  social: {
    github: 'https://github.com/abhishekra07',
    linkedin: 'https://www.linkedin.com/in/abhishek-rathore-666972127',
    email: 'abhira719@gmail.com',
    portfolio: 'https://abhishek-developer-portfolio.netlify.app/',
  },

  // Technical Skills
  // Skills (refined for clarity)
  skills: {
    backend: [
      { name: 'Java', icon: JavaOriginal },
      { name: 'Spring Boot', icon: SpringOriginal },
      { name: 'Spring Security', icon: SpringOriginal },
      { name: 'JPA/Hibernate', icon: HibernateOriginal },
      { name: 'Microservices', icon: SpringOriginal },
      { name: 'REST APIs', icon: PostmanOriginal },
      { name: 'Kafka', icon: ApachekafkaOriginal },
      { name: 'Redis', icon: RedisOriginal },
      { name: 'AWS', icon: AmazonwebservicesOriginalWordmark },
      { name: 'GCP', icon: GooglecloudOriginal },
      { name: 'Maven', icon: MavenOriginal },
      { name: 'JUnit', icon: JunitOriginal },
      { name: 'WebSocket', icon: SocketioOriginal },
      { name: 'Node.js', icon: JavascriptOriginal },
      { name: 'npm', icon: NpmOriginalWordmark },
    ],
    frontend: [
      { name: 'React', icon: ReactOriginal },
      { name: 'Angular', icon: AngularOriginal },
      { name: 'Vue.js', icon: VuejsOriginal },
      { name: 'TypeScript', icon: TypescriptOriginal },
      { name: 'JavaScript', icon: JavascriptOriginal },
      { name: 'JQuery', icon: JqueryOriginal },
      { name: 'HTML5', icon: Html5Original },
      { name: 'CSS3', icon: Css3Original },
      { name: 'Tailwind CSS', icon: TailwindcssOriginal },
      { name: 'Vite', icon: VitejsOriginal },
    ],
    database: [
      { name: 'MySQL', icon: MysqlOriginal },
      { name: 'PostgreSQL', icon: PostgresqlOriginal },
      { name: 'MongoDB', icon: MongodbOriginal },
    ],
    devops: [
      { name: 'Docker', icon: DockerOriginal },
      { name: 'Kubernetes', icon: KubernetesOriginal },
      { name: 'Git', icon: GitOriginal },
      { name: 'GitHub Actions', icon: GithubactionsOriginal },
      { name: 'SonarQube', icon: SonarqubeOriginal },
    ],
    tools: [
      { name: 'IntelliJ IDEA', icon: IntellijOriginal },
      { name: 'VS Code', icon: VscodeOriginal },
      { name: 'Postman', icon: PostmanOriginal },
    ],
  },

  // Professional Experience
  experience: [
    {
      id: 1,
      title: 'Associate Staff Engineer',
      company: 'Nagarro',
      location: 'India',
      period: 'Mar 2022 – July 2025',
      type: 'Full-time',
      description:
        'Led and contributed to multiple enterprise-level backend systems with a focus on microservices and distributed architecture.',
      responsibilities: [
        'Designed and implemented automated cron jobs for calculating store-to-region distances daily, optimizing logistics and operational planning.',
        'Conducted root cause analysis for critical defects and production issues, improving bug resolution speed and software stability.',
        'Supported manual QA testing on the COP module, significantly contributing to the reduction of QA backlog and on-time release of features.',
        'Architected and implemented feature-specific microservices, aligning with project goals and ensuring high availability and scalability.',
        'Developed a shared utility library used across services, enhancing maintainability and reducing code duplication.',
        'Integrated multi-language support across services, enabling seamless internationalization and localization.',
        'Managed end-to-end communication protocols between client systems and the adapter application, improving system reliability and performance.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Redis',
        'Kafka',
        'Microservices',
        'Git',
        'CI/CD',
        'JUnit',
      ],
    },
    {
      id: 2,
      title: 'Analyst',
      company: 'Deloitte',
      location: 'India',
      period: 'Jul 2021 – Mar 2022',
      type: 'Full-time',
      description:
        'Worked on large-scale enterprise web applications and contributed to frontend and backend system optimization.',
      responsibilities: [
        'Developed reusable web components using micro frontend architecture, reducing development effort by 60%.',
        'Designed and implemented dynamic user interfaces that improved user engagement and responsiveness.',
        'Refactored monolithic components into modular on-demand apps, improving load times by 30% and enhancing scalability.',
        'Built reactive microservices with Spring Boot, deployed on PCF (Pivotal Cloud Foundry), ensuring fault-tolerant systems.',
        'Collaborated in the debugging and resolution of Java code issues during the SDLC, improving development velocity.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'React',
        'PCF',
        'Micro Frontends',
        'Git',
      ],
    },
    {
      id: 3,
      title: 'System Engineer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'India',
      period: 'Jun 2019 – Mar 2021',
      type: 'Full-time',
      description:
        'Contributed to the modernization and migration of legacy applications into scalable cloud-native architectures.',
      responsibilities: [
        'Collaborated with architects to migrate a legacy pharmacy application to microservices hosted on Google Cloud App Engine.',
        'Developed asynchronous data processing mechanisms for DB/network I/O, significantly improving system throughput and resilience.',
        'Led a team of 6 developers to ensure the successful third-party service integration and migration.',
        'Co-developed a Selenium-based test automation framework, reducing manual QA effort and increasing test coverage.',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'GCP',
        'Microservices',
        'Selenium',
        'Git',
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 'simply-minds',
      title: 'Simply Minds',
      description:
        'Inventory management system allowing users to manage, track, and analyze stock efficiently.',
      images: [
        '/projects/simply-minds-1.png',
        '/projects/simply-minds-2.png',
        '/projects/simply-minds-3.png',
      ],
      technologies: ['React', 'TypeScript'],
      liveUrl: 'https://simply-minds.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/simply-minds',
      features: [
        'Inventory tracking',
        'Real-time updates',
        'Simple and intuitive UI',
      ],
    },
    {
      id: 'logi-truck',
      title: 'Logi Truck',
      description:
        'Logistics management platform designed to handle transportation fleet and operational tasks.',
      images: [
        '/projects/logi-truck-1.png',
        '/projects/logi-truck-2.png',
        '/projects/logi-truck-3.png',
      ],
      technologies: ['React'],
      liveUrl: 'https://logi-track.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/transport-app',
      features: ['Fleet tracking', 'Task scheduling', 'Freelancer-friendly UI'],
    },
    {
      id: 'tee-craft',
      title: 'TeeCraft',
      description:
        'Interactive t-shirt designer that lets users add logos, stickers, and text, and download the final design.',
      images: [
        '/projects/tee-craft-1.png',
        '/projects/tee-craft-2.png',
        '/projects/tee-craft-3.png',
        '/projects/tee-craft-4.png',
      ],
      technologies: ['React', 'Fabric.js'],
      liveUrl: 'https://teecraft.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/tshirt-designer#',
      features: [
        'Drag-and-drop design tools',
        'Sticker and text customization',
        'Downloadable high-quality output',
      ],
    },
    {
      id: 4,
      title: 'Voice Assistant News App',
      description:
        'A React-based voice-controlled news app using Alan AI for searching and reading news aloud.',
      longDescription:
        'Users can use voice commands to interact with the app for reading news based on keywords, channels, or sources. Enhances accessibility and hands-free interaction using Alan AI voice assistant.',
      images: [],
      technologies: ['ReactJS', 'Alan AI', 'JavaScript'],
      features: [
        'Voice-controlled search',
        'Live news updates',
        'Accessible UI',
      ],
      githubUrl: 'https://github.com/abhishekra07/Voice-Assistant-News-App',
      liveUrl: '',
      status: 'Completed',
    },
    {
      id: 5,
      title: 'Income-Expense Tracker',
      description:
        'React-based app to track income and expenses with category-wise filtering and visual analysis.',
      longDescription:
        'The tracker supports adding income/expenses, categorizing them with hashtags, and shows ratio-based analysis using charts and modern UI components.',
      images: [],
      technologies: ['ReactJS', 'Material UI', 'JavaScript'],
      features: [
        'Category-based tracking',
        'Hashtag tagging',
        'Expense analysis UI',
      ],
      githubUrl: 'https://github.com/abhishekra07/income-expense-tracker',
      liveUrl: '',
      status: 'Completed',
    },
    {
      id: 6,
      title: 'Wildfire Tracker',
      description:
        'A React app that integrates NASA EONET API to visualize wildfire data on Google Maps.',
      longDescription:
        'This real-time wildfire tracker fetches incident data using NASA EONET APIs and marks their geolocation on Google Maps to help users track wildfire spread.',
      images: [],
      technologies: ['ReactJS', 'Google Maps API', 'NASA EONET API'],
      features: [
        'Real-time wildfire data',
        'Google Maps integration',
        'Marker visualization',
      ],
      githubUrl: 'https://github.com/abhishekra07/wildfire-tracker',
      liveUrl: '',
      status: 'Completed',
    },
  ],

  // Backend Projects
  backend: [
    {
      id: 'therapy-chat-assistant',
      title: 'AI-Powered Therapy Support Chat System',
      description:
        'Voice and text-based chat system to assist dialysis patients using AI-driven summarization and response generation.',
      technologies: [
        'Node.js',
        'LangChain',
        'OpenAI',
        'Google Cloud',
        'TypeScript',
      ],
      githubUrl: '#',
      icon: BotIcon, // use appropriate icon
      expandedContent: {
        overview:
          'Developed a personalized chat assistant for a dialysis therapy platform where users could upload post-session summaries and ask questions in natural language.',
        responsibilities: [
          'Integrated LangChain with OpenAI to enable document-aware conversation support.',
          'Implemented Google Cloud Text-to-Speech and Speech-to-Text APIs for voice-based interactions.',
          'Enabled summarization, red-flag detection, and explanation of medical terms in layman language.',
          'Supported both real-time and follow-up Q&A through document embeddings and vector search.',
        ],
        approach:
          'Used document loaders and vector storage to provide relevant context to LLM. Ensured secure handling of user health data.',
        challenges: [
          'Handling large and unstructured user-uploaded therapy summaries.',
          'Maintaining conversation relevance across context windows.',
          'Building an intuitive interface for non-technical patients.',
        ],
        outcome:
          'Enabled non-clinical users to understand and engage with their therapy data, improving follow-up adherence by 40%.',
      },
    },
    {
      id: 'clinic-microservices',
      title: 'Clinic Platform Microservices System',
      description:
        'Microservices-based backend architecture for clinic platform with Kafka-based communication and document generation.',
      technologies: [
        'Java',
        'Spring Boot',
        'Apache Kafka',
        'PostgreSQL',
        'Docker',
      ],
      githubUrl: '#',
      icon: ServerIcon,
      expandedContent: {
        overview:
          'Designed and implemented scalable backend services for a clinic platform, focusing on modularity, event-driven design, and automation.',
        responsibilities: [
          'Developed secure authentication and authorization service for multi-role access.',
          'Designed microservices architecture supporting asynchronous Kafka communication.',
          'Built PDF document generation service using Puppeteer for dynamic clinical reports.',
          'Implemented batch log processing for therapy device data using Kafka consumers.',
          'Led schema design and DevOps setup for CI/CD and production deployments.',
        ],
        approach:
          'Used event-driven design with Kafka for loose coupling. Adopted REST APIs with token-based security. Built async task workers for heavy processing.',
        challenges: [
          'Coordinating distributed microservices for real-time user workflows.',
          'Designing extensible data models for evolving medical data schemas.',
          'Implementing secure document storage and access.',
        ],
        outcome:
          'Successfully supported onboarding of multiple clinics and thousands of therapy logs per day. Reduced support overhead with automated log reports.',
      },
    },
    {
      id: 'fantasy-cricket-platform',
      title: 'Fantasy Cricket App Backend (Dream11 Clone)',
      description:
        'Backend system replicating key features of fantasy sports apps like Dream11 with user engagement and scoring modules.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
      githubUrl: '#',
      icon: TrophyIcon, // Choose a trophy or sports icon
      expandedContent: {
        overview:
          'Built a fantasy sports backend that allowed users to register, create teams for live matches, and track scores based on real-time updates.',
        responsibilities: [
          'Created user registration, authentication, and team-building APIs.',
          'Integrated match schedule and player stats ingestion pipeline.',
          'Handled live scoring updates with Redis-based caching for scalability.',
          'Implemented leaderboard calculation and prize distribution logic.',
        ],
        approach:
          'Designed RESTful services using Express, with Redis to minimize latency during peak traffic. Adopted modular service structure for easy future extension.',
        challenges: [
          'Simulating real-time updates and point calculations accurately.',
          'Preventing cheating or score tampering with strict validations.',
          'Handling concurrent requests during match start times.',
        ],
        outcome:
          'Delivered a fully working fantasy app prototype used by internal stakeholders for demo and testing. Scaled to handle 10k+ user actions per match.',
      },
    },
  ],

  // Education
  education: [
    {
      degree: 'Bachelor of Engineering in Electronics & Communication',
      institution: 'Medicaps Institute of Technology & Management',
      location: 'Indore, India',
      period: '2015 - 2019',
      grade: '',
      description:
        'Focused on embedded systems, electronics fundamentals, and software development including Java and full-stack web technologies.',
    },
    {
      degree: 'Class XII',
      institution: 'Govt. Boys Higher Secondary School',
      location: 'India',
      period: '2014 - 2015',
      grade: '',
      description: 'Completed higher secondary education in science stream.',
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
    title: "AI in Today's World: Transforming Industries and Daily Life",
    slug: 'ai-in-todays-world',
    excerpt:
      'Exploring how artificial intelligence is revolutionizing various industries and becoming an integral part of our daily lives.',
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
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop',
  },
  {
    id: 2,
    title: 'Java for Beginners: Your Gateway to Programming',
    slug: 'java-for-beginners',
    excerpt:
      'A comprehensive guide to getting started with Java programming, covering fundamentals and best practices.',
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
    image:
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=450&fit=crop',
  },
  {
    id: 3,
    title: 'Java Multithreading: Mastering Concurrent Programming',
    slug: 'java-multithreading-guide',
    excerpt:
      'Deep dive into Java multithreading concepts, best practices, and common pitfalls to avoid.',
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
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=450&fit=crop',
  },
  {
    id: 4,
    title: 'Apache Kafka: Building Real-time Data Pipelines',
    slug: 'apache-kafka-guide',
    excerpt:
      'Learn how to use Apache Kafka for building robust, scalable real-time data streaming applications.',
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
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
  },
  {
    id: 5,
    title: 'Modern Frontend Development with React and TypeScript',
    slug: 'modern-frontend-development',
    excerpt:
      'Exploring modern frontend development practices using React, TypeScript, and contemporary tooling.',
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
    image:
      'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&h=450&fit=crop',
  },
  {
    id: 6,
    title: 'DevOps Best Practices: CI/CD with Docker and Kubernetes',
    slug: 'devops-best-practices',
    excerpt:
      'Implementing robust CI/CD pipelines using Docker containerization and Kubernetes orchestration.',
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
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop',
  },
];

export default portfolioData;
