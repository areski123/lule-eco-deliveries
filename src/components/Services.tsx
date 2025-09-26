import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Building2, Zap, Home, ArrowRight } from "lucide-react";
import expressIcon from "@/assets/express-delivery-icon.jpg";
import businessIcon from "@/assets/business-logistics-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Transport de Colis",
      description: "Livraison sécurisée de vos colis avec suivi en temps réel",
      features: ["Véhicules < 3.5T", "Suivi GPS", "Assurance incluse"],
      image: expressIcon,
    },
    {
      icon: Building2,
      title: "Logistique d'Entreprise",
      description: "Solutions logistiques sur-mesure pour votre entreprise",
      features: ["Livraisons régulières", "Devis personnalisé", "Service dédié"],
      image: businessIcon,
    },
    {
      icon: Zap,
      title: "Livraison Express",
      description: "Service de livraison express pour vos urgences",
      features: ["Livraison sous 2h", "Disponible 24/7", "Priorité absolue"],
    },
    {
      icon: Home,
      title: "Déménagements",
      description: "Déménagements particuliers et professionnels",
      features: ["Équipe expérimentée", "Matériel de protection", "Devis gratuit"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nos <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solutions de transport flexibles adaptées à vos besoins dans le Haut-Rhin
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                {service.image ? (
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                )}
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-muted-foreground">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Tiers */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Nos Formules
            </h3>
            <p className="text-muted-foreground">
              Choisissez la formule qui correspond à vos besoins
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-background/50 border border-border/50">
              <h4 className="text-xl font-semibold text-foreground">Standard</h4>
              <p className="text-muted-foreground">
                Livraison dans les délais standards avec service client de qualité
              </p>
              <div className="space-y-2 text-sm text-foreground/80">
                <div>✓ Livraison sous 24-48h</div>
                <div>✓ Suivi en ligne</div>
                <div>✓ Support client</div>
              </div>
              <Button variant="outline" className="mt-4">
                En savoir plus
              </Button>
            </div>

            {/* Express */}
            <div className="text-center space-y-4 p-6 rounded-xl bg-gradient-primary/10 border border-primary/20 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Le plus populaire
                </span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Express</h4>
              <p className="text-muted-foreground">
                Service prioritaire pour vos livraisons urgentes
              </p>
              <div className="space-y-2 text-sm text-foreground/80">
                <div>✓ Livraison sous 2h</div>
                <div>✓ Suivi temps réel</div>
                <div>✓ Support prioritaire</div>
                <div>✓ Disponible 24/7</div>
              </div>
              <Button variant="logistics" className="mt-4 group">
                Choisir Express
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;