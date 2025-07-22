import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { downloadResume } from '@/utils/resumeDownload';
import { portfolioData } from '@/data/portfolio';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
    { href: '/blog', label: 'Blog', isExternal: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // External route
      window.location.href = href;
    } else {
      // Internal section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={cn(
            "text-xl font-bold transition-all duration-300",
            isScrolled
              ? "bg-gradient-primary bg-clip-text text-transparent"
              : "text-white drop-shadow-lg"
          )}>
            {portfolioData.personal.name}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "transition-colors duration-200 relative group",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  isScrolled ? "bg-primary" : "bg-white"
                )}></span>
              </button>
            ))}
            <ThemeToggle />
            <Button 
              variant="outline" 
              size="sm" 
              onClick={downloadResume}
              className={cn(
                "transition-all duration-300",
                !isScrolled && "border-white/30 text-white hover:bg-white hover:text-foreground"
              )}
            >
              Download Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <ThemeToggle />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadResume}
                  className="flex-1"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
