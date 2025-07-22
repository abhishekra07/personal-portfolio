import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

interface CollapsibleExperienceProps {
  experience: ExperienceItem;
  isExpanded: boolean;
  onToggle: () => void;
}

const CollapsibleExperience = ({ experience, isExpanded, onToggle }: CollapsibleExperienceProps) => {
  return (
    <Card className="group hover:shadow-colored transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/80 backdrop-blur-sm">
      <div className="p-6">
        {/* Header - Always Visible */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{experience.period}</span>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="self-start md:self-center hover:bg-primary/10 hover:text-primary"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} className="mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown size={16} className="mr-1" />
                Show More
              </>
            )}
          </Button>
        </div>

        {/* Tech Stack - Always Visible */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-xs bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={cn(
            'overflow-hidden transition-all duration-500 ease-in-out',
            isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="space-y-4 pt-4 border-t border-border/50">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Overview
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <div className="w-1 h-4 bg-primary rounded-full"></div>
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CollapsibleExperience;