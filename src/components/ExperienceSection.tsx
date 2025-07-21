import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, UserCheck, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "employment",
      title: "Senior Backend Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of microservices architecture serving 100K+ users. Implemented event-driven systems using Apache Kafka and optimized database performance by 40%.",
      technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker", "AWS"],
      achievements: [
        "Reduced API response time by 60% through caching strategies",
        "Mentored 3 junior developers",
        "Designed scalable payment processing system"
      ]
    },
    {
      type: "employment",
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications using modern web technologies. Collaborated with cross-functional teams to deliver features on schedule.",
      technologies: ["Java", "Spring", "Angular", "MySQL", "Redis"],
      achievements: [
        "Built responsive web applications for 5+ clients",
        "Implemented real-time notifications system",
        "Improved code coverage to 85%"
      ]
    },
    {
      type: "freelance",
      title: "Freelance Software Developer",
      company: "Independent",
      period: "2019 - Present",
      description: "Providing custom software solutions for small to medium businesses. Specializing in backend APIs, database design, and system integration.",
      technologies: ["Java", "Spring Boot", "React", "Vue.js", "MongoDB"],
      achievements: [
        "Successfully delivered 15+ projects",
        "Maintained 5-star client rating",
        "Built e-commerce platform handling $500K+ transactions"
      ]
    },
    {
      type: "employment",
      title: "Junior Developer",
      company: "StartupCorp",
      period: "2018 - 2020",
      description: "Started career developing internal tools and customer-facing features. Gained experience in full-stack development and agile methodologies.",
      technologies: ["Java", "Spring MVC", "JavaScript", "MySQL"],
      achievements: [
        "Contributed to 20+ feature releases",
        "Automated manual processes saving 10 hours/week",
        "Completed advanced Java certification"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in software development, from junior developer to technical leader
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <Card className="shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {exp.type === 'employment' ? (
                          <Building className="h-5 w-5 text-primary" />
                        ) : (
                          <UserCheck className="h-5 w-5 text-accent" />
                        )}
                        <Badge variant={exp.type === 'employment' ? 'default' : 'secondary'}>
                          {exp.type === 'employment' ? 'Employment' : 'Freelance'}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;