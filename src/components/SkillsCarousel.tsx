import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface SkillsCarouselProps {
  activeCategory: string;
}

const SkillsCarousel = ({ activeCategory }: SkillsCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const skillsPerPage = 15;

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
  const totalPages = Math.ceil(filteredSkills.length / skillsPerPage);
  const currentSkills = filteredSkills.slice(
    currentPage * skillsPerPage,
    (currentPage + 1) * skillsPerPage
  );

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  if (filteredSkills.length <= skillsPerPage) {
    // If skills fit in one page, show them all without carousel
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredSkills.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.name}
              className="group p-4 bg-card border border-border rounded-lg hover:shadow-colored transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-in hover:bg-primary/5"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <div className="flex items-center justify-center h-12 mb-2 text-4xl group-hover:scale-110 transition-transform duration-300 text-primary">
                  <IconComponent size="40" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Skills Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[100px]">
          {currentSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={`${skill.name}-${currentPage}`}
                className="group p-4 bg-card border border-border rounded-lg hover:shadow-colored transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-in hover:bg-primary/5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 mb-2 text-4xl group-hover:scale-110 transition-transform duration-300 text-primary">
                    <IconComponent size="40" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={prevPage}
              disabled={totalPages === 1}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
              onClick={nextPage}
              disabled={totalPages === 1}
            >
              <ChevronRight size={20} />
            </Button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-primary shadow-colored scale-110'
                  : 'bg-muted hover:bg-primary/50'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Page Info */}
      {totalPages > 1 && (
        <div className="text-center text-sm text-muted-foreground">
          Showing {currentPage * skillsPerPage + 1}-
          {Math.min((currentPage + 1) * skillsPerPage, filteredSkills.length)}{' '}
          of {filteredSkills.length} skills
        </div>
      )}
    </div>
  );
};

export default SkillsCarousel;
