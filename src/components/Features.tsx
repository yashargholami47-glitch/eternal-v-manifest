import { DollarSign, Users, Car, Briefcase, Shield, Building } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Custom Economy",
    description: "Dynamic market system with realistic pricing, banking, and investment opportunities",
    color: "gold",
  },
  {
    icon: Users,
    title: "Realistic Roleplay",
    description: "Immersive character development with diverse job opportunities and interactions",
    color: "primary",
  },
  {
    icon: Car,
    title: "Exclusive Vehicles",
    description: "Over 500+ custom vehicles with realistic handling and customization options",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "Advanced Jobs",
    description: "From legal businesses to underground operations - choose your path",
    color: "gold",
  },
  {
    icon: Shield,
    title: "Law Enforcement",
    description: "Join LSPD, EMS, or become a criminal mastermind in gang territories",
    color: "crimson",
  },
  {
    icon: Building,
    title: "Property System",
    description: "Own apartments, houses, and businesses across Los Santos",
    color: "primary",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-heading mb-4 glow-primary">
            SERVER FEATURES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience next-generation roleplay with cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass = {
              gold: "text-gold",
              primary: "text-primary",
              accent: "text-accent",
              crimson: "text-crimson",
            }[feature.color];

            const glowClass = {
              gold: "glow-gold",
              primary: "glow-primary",
              accent: "glow-accent",
              crimson: "",
            }[feature.color];

            return (
              <div
                key={index}
                className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(159,90,253,0.3)] group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${colorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={48} className={glowClass} />
                </div>
                <h3 className="text-xl font-heading mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
