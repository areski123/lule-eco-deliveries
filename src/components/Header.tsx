import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">L</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LULé</h1>
              <p className="text-xs text-muted-foreground">Logistique Urbaine</p>
            </div>
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
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone size={16} />
                <span>+33 6 51 88 81 44</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin size={16} />
                <span>Mulhouse</span>
              </div>
            </div>
            <Button variant="contact" size="sm">
              Devis Gratuit
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;