import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, MapPin, Calendar, Zap, Users, Trophy } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            My journey in software development, building scalable solutions and leading teams
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={exp.id}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Card className="overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-colored transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            <Building className="h-5 w-5" />
                          </div>
                          <Badge variant="outline" className="border-primary/20 text-primary">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </CardTitle>
                        
                        <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Responsibilities */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground">Key Achievements</h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
                            <Zap className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-4 w-4 text-primary" />
                        <h4 className="font-semibold text-foreground">Technologies Used</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm bg-accent/10 text-accent border border-accent/20 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;