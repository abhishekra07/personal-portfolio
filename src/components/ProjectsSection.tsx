import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Server,
  Globe,
  Database,
  Zap,
} from 'lucide-react';
import ImageSlider from './ImageSlider';

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const frontendProjects = [
    {
      title: 'Simply Minds',
      description:
        'Inventory management system allowing users to manage, track, and analyze stock efficiently.',
      images: ['/projects/simply-minds-1.png'],
      technologies: ['React', 'TypeScript'],
      demoUrl: 'https://simply-minds.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/simply-minds',
      features: [
        'Inventory tracking',
        'Real-time updates',
        'Simple and intuitive UI',
      ],
    },
    {
      title: 'Logi Truck',
      description:
        'Logistics management platform designed to handle transportation fleet and operational tasks.',
      images: ['/projects/logi-truck-1.png'],
      technologies: ['React'],
      demoUrl: 'https://logi-track.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/transport-app',
      features: ['Fleet tracking', 'Task scheduling', 'Freelancer-friendly UI'],
    },
    {
      title: 'TeeCraft',
      description:
        'Interactive t-shirt designer that lets users add logos, stickers, and text, and download the final design.',
      images: ['/projects/teecraft-1.png'],
      technologies: ['React', 'Fabric.js'],
      demoUrl: 'https://teecraft.netlify.app/',
      githubUrl: 'https://github.com/abhishekra07/tshirt-designer#',
      features: [
        'Drag-and-drop design tools',
        'Sticker and text customization',
        'Downloadable high-quality output',
      ],
    },
  ];

  const backendProjects = [
    {
      id: 'banking-api',
      title: 'Banking API System',
      description:
        'Secure RESTful API for banking operations with transaction processing and account management.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
      githubUrl: '#',
      icon: Database,
      expandedContent: {
        overview:
          'A comprehensive banking API system designed to handle high-volume financial transactions with enterprise-level security and compliance.',
        responsibilities: [
          'Architected microservices for account management, transactions, and notifications',
          'Implemented JWT-based authentication with role-based access control',
          'Designed database schema with proper indexing for optimal performance',
          'Integrated with third-party payment gateways and fraud detection systems',
        ],
        approach:
          'Built using Domain-Driven Design principles with CQRS pattern for separating read/write operations. Implemented event sourcing for audit trails and used Redis for caching frequently accessed data.',
        challenges: [
          'Ensuring ACID compliance for financial transactions',
          'Implementing real-time fraud detection without impacting performance',
          'Managing distributed transactions across microservices',
        ],
        outcome:
          'Successfully processed over 1M transactions with 99.9% uptime and sub-200ms response times. Reduced operational costs by 30% through automated processes.',
      },
    },
    {
      id: 'event-streaming',
      title: 'Event Streaming Platform',
      description:
        'High-throughput event streaming platform using Apache Kafka for real-time data processing.',
      technologies: [
        'Java',
        'Spring Boot',
        'Apache Kafka',
        'MongoDB',
        'Kubernetes',
      ],
      githubUrl: '#',
      icon: Zap,
      expandedContent: {
        overview:
          'A scalable event streaming platform designed to handle millions of events per second with guaranteed delivery and exactly-once processing semantics.',
        responsibilities: [
          'Designed event schema and partitioning strategy for optimal throughput',
          'Implemented consumer groups with automatic failover and rebalancing',
          'Built monitoring dashboard for tracking message lag and throughput',
          'Created data pipeline for ETL operations and analytics',
        ],
        approach:
          'Utilized Kafka Streams for stateful stream processing and implemented the Saga pattern for managing distributed transactions. Used Schema Registry for evolution of event schemas.',
        challenges: [
          'Handling backpressure during traffic spikes',
          'Ensuring message ordering across partitions',
          'Implementing exactly-once semantics without performance degradation',
        ],
        outcome:
          'Platform processes 5M+ events daily with 99.99% availability. Reduced data processing latency from hours to seconds, enabling real-time business decisions.',
      },
    },
    {
      id: 'ml-pipeline',
      title: 'ML Model Pipeline',
      description:
        'Automated machine learning pipeline for model training, validation, and deployment.',
      technologies: [
        'Java',
        'Spring Boot',
        'Python',
        'Docker',
        'Jenkins',
        'AWS',
      ],
      githubUrl: '#',
      icon: Server,
      expandedContent: {
        overview:
          'End-to-end machine learning pipeline that automates the entire ML lifecycle from data ingestion to model deployment and monitoring.',
        responsibilities: [
          'Built REST APIs for model inference with auto-scaling capabilities',
          'Implemented data validation and preprocessing pipelines',
          'Created model versioning and A/B testing framework',
          'Designed monitoring system for model drift detection',
        ],
        approach:
          'Adopted MLOps practices with CI/CD pipelines for model deployment. Used containerization for consistent environments and implemented blue-green deployment strategy.',
        challenges: [
          'Managing different model versions in production',
          'Handling varying data schemas and feature engineering',
          'Implementing real-time model performance monitoring',
        ],
        outcome:
          'Reduced model deployment time from weeks to hours. Achieved 95% model accuracy with automated retraining when performance degrades.',
      },
    },
  ];

  const toggleProject = (projectId: string) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise across frontend and backend
            development
          </p>
        </div>

        <Tabs defaultValue="backend" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              Backend Projects
            </TabsTrigger>
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Frontend Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="frontend">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frontendProjects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-video rounded-t-lg overflow-hidden">
                    <ImageSlider images={project.images} alt="Images" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend">
            <div className="space-y-6">
              {backendProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className="hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <project.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold">
                            {project.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleProject(project.id)}
                        className="ml-4"
                      >
                        {expandedProject === project.id ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>

                    {expandedProject === project.id && (
                      <div className="mt-6 space-y-6 border-t border-border pt-6 animate-fade-in">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Project Overview
                          </h4>
                          <p className="text-muted-foreground">
                            {project.expandedContent.overview}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            My Responsibilities
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.expandedContent.responsibilities.map(
                              (resp, idx) => (
                                <li key={idx}>{resp}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Technical Approach
                          </h4>
                          <p className="text-muted-foreground">
                            {project.expandedContent.approach}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Challenges & Solutions
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {project.expandedContent.challenges.map(
                              (challenge, idx) => (
                                <li key={idx}>{challenge}</li>
                              )
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2">
                            Outcome & Impact
                          </h4>
                          <p className="text-muted-foreground">
                            {project.expandedContent.outcome}
                          </p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
