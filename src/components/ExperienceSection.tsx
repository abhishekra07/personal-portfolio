import { useState } from 'react';
import CollapsibleExperience from '@/components/CollapsibleExperience';
import { portfolioData } from '@/data/portfolio';

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <CollapsibleExperience
              key={exp.id}
              experience={exp}
              isExpanded={expandedId === exp.id}
              onToggle={() => toggleExpanded(exp.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;