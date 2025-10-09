import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Clock, Shield } from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-accent/20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-primary">LULé</span>
                <br />
                Livraison
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Écologique
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Delivering Reliability Across Haut-Rhin
              </p>
              <p className="text-lg text-foreground/80">
                Transport rapide, sécurisé et centré sur le client à Mulhouse et au-delà.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Véhicules</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2023</div>
                <div className="text-sm text-muted-foreground">Fondée</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Service</div>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Véhicules &lt; 3.5T</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Livraison Express</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Assurance Incluse</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="orange" size="lg" className="group">
                Demander un Devis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Nos Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={heroTruck}
                alt="Camion de livraison LULé"
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;