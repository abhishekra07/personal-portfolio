import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-primary-foreground/80">
              Building digital solutions that make a difference
            </p>
          </div>

          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            © {currentYear} Made with <Heart className="h-4 w-4 text-red-400" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;