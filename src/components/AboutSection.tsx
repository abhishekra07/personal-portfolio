import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { portfolioData } from '@/data/portfolio';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-medium animate-fade-in animation-delay-400">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  Introduction
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate software developer with over 5 years of experience in building 
                  scalable, efficient, and user-centric applications. My journey in technology began 
                  with a curiosity about how things work behind the scenes, and it has evolved into 
                  a deep expertise in backend development, cloud technologies, and modern software 
                  architecture.
                </p>
              </div>

              <Separator className="bg-border/50" />

              {/* What I Do */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  What I Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  I specialize in backend development using Java and Spring Boot, creating robust 
                  microservices architectures that can handle high-traffic loads. My expertise extends 
                  to modern frontend frameworks, database optimization, and cloud infrastructure on AWS.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether it's designing RESTful APIs, implementing event-driven architectures with 
                  Apache Kafka, or optimizing database performance, I enjoy solving complex technical 
                  challenges that make a real difference for users and businesses.
                </p>
              </div>

              <Separator className="bg-border/50" />

              {/* Philosophy */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  My Philosophy
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code that not only works today but can 
                  evolve with changing requirements. I'm a strong advocate for test-driven development, 
                  continuous learning, and knowledge sharing. Every project is an opportunity to learn 
                  something new and push the boundaries of what's possible.
                </p>
              </div>

              <Separator className="bg-border/50" />

              {/* When I'm Not Coding */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                  Beyond Code
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or writing technical blogs to share knowledge with the 
                  community. I also enjoy hiking, photography, and experimenting with new cooking 
                  recipes - activities that help me maintain a creative mindset and fresh perspective 
                  on problem-solving.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;