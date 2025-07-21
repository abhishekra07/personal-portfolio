import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Globe, Database, Settings } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        "Java", "Spring Boot", "Spring Security", "Microservices",
        "RESTful APIs", "GraphQL", "Apache Kafka", "Redis",
        "Maven", "Gradle", "JUnit", "Mockito"
      ]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      skills: [
        "React", "Angular", "Vue.js", "TypeScript", "JavaScript",
        "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
        "Webpack", "Vite", "npm", "yarn"
      ]
    },
    {
      icon: Database,
      title: "Databases & Storage",
      skills: [
        "PostgreSQL", "MySQL", "MongoDB", "Redis",
        "Elasticsearch", "H2", "SQLite",
        "Database Design", "Query Optimization", "Data Modeling"
      ]
    },
    {
      icon: Settings,
      title: "DevOps & Tools",
      skills: [
        "Docker", "Kubernetes", "AWS", "Jenkins",
        "Git", "GitHub Actions", "SonarQube", "Postman",
        "IntelliJ IDEA", "VS Code", "Linux", "Bash"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build robust, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-medium transition-all duration-300 animate-fade-in border-border"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;