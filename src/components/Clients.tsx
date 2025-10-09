import { Card, CardContent } from "@/components/ui/card";

const Clients = () => {
  const clients = [
    { name: "E.Leclerc", logo: "🏪" },
    { name: "Carrefour", logo: "🛒" },
    { name: "Amazon", logo: "📦" },
    { name: "La Poste", logo: "📮" },
    { name: "DHL", logo: "🚚" },
    { name: "Chronopost", logo: "⏱️" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nos <span className="text-blue">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ils nous font confiance pour leurs besoins logistiques
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card transition-all duration-300 border-border/50 hover:border-blue/30 bg-background/50 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center h-24">
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {client.logo}
                </div>
                <p className="text-xs font-medium text-muted-foreground group-hover:text-blue transition-colors">
                  {client.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
