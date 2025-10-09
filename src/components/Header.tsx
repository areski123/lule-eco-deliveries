import { Button } from "@/components/ui/button";
import { Phone, MapPin, Package as PackageIcon, Users } from "lucide-react";
import luleLogo from "@/assets/lule-logo.png";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={luleLogo} 
              alt="LULé Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#fleet" className="text-foreground hover:text-primary transition-colors">
              Flotte
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-blue hover:text-blue-light">
                <PackageIcon className="mr-2 h-4 w-4" />
                Suivi de livraison
              </Button>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light">
                <Users className="mr-2 h-4 w-4" />
                Devenir franchise
              </Button>
            </div>
            <Button variant="orange" size="sm">
              Devis Gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;