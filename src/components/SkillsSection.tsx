import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import SkillsCarousel from '@/components/SkillsCarousel';
import { portfolioData } from '@/data/portfolio';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    {
      id: 'all',
      label: 'All',
      count: Object.values(portfolioData.skills).flat().length,
    },
    {
      id: 'backend',
      label: 'Backend',
      count: portfolioData.skills.backend.length,
    },
    {
      id: 'frontend',
      label: 'Frontend',
      count: portfolioData.skills.frontend.length,
    },
    {
      id: 'database',
      label: 'Database',
      count: portfolioData.skills.database.length,
    },
    {
      id: 'devops',
      label: 'DevOps',
      count: portfolioData.skills.devops.length,
    },
    {
      id: 'tools',
      label: 'Tools',
      count: portfolioData.skills.tools.length,
    },
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(portfolioData.skills).flat();
    }
    return (
      portfolioData.skills[
        activeCategory as keyof typeof portfolioData.skills
      ] || []
    );
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section id="skills" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Technologies and tools I use to build robust, scalable applications
          </p>
        </div>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animation-delay-400">
          {categories.map((category) => (
            <Badge
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'secondary'}
              className={`
                px-6 py-2 text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-105
                ${
                  activeCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-colored'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-current/20">
                {category.count}
              </span>
            </Badge>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="max-w-5xl mx-auto">
          <SkillsCarousel activeCategory={activeCategory} />
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">
              {getFilteredSkills().length}{' '}
              {activeCategory === 'all'
                ? 'Total'
                : categories.find((c) => c.id === activeCategory)?.label}{' '}
              Skills
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
