import { Users, Globe, Award, Zap } from "lucide-react";

const AboutServer = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Active Players",
      color: "text-primary",
    },
    {
      icon: Globe,
      value: "24/7",
      label: "Online Server",
      color: "text-accent",
    },
    {
      icon: Award,
      value: "#1",
      label: "Best RP Server",
      color: "text-gold",
    },
    {
      icon: Zap,
      value: "99%",
      label: "Uptime",
      color: "text-crimson",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-heading glow-primary mb-6">
            ABOUT ETERNAL RP
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Eternal RP is the premier GTA V Roleplay experience, offering an immersive and realistic environment where you can live out your dreams in Los Santos. Our server features custom scripts, active staff, and a dedicated community.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300 animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className={`text-3xl md:text-4xl font-heading ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="glass p-8 md:p-12 rounded-2xl animate-slide-left">
          <h3 className="text-2xl md:text-3xl font-heading text-accent mb-6">
            WHY CHOOSE ETERNAL?
          </h3>
          <div className="space-y-4 text-foreground/80">
            <p className="text-lg">
              ✦ <span className="text-primary font-semibold">Active Community:</span> Join hundreds of active players creating stories every day
            </p>
            <p className="text-lg">
              ✦ <span className="text-accent font-semibold">Custom Content:</span> Exclusive vehicles, properties, and scripts you won't find anywhere else
            </p>
            <p className="text-lg">
              ✦ <span className="text-gold font-semibold">Professional Staff:</span> Experienced admins and moderators ensuring fair play
            </p>
            <p className="text-lg">
              ✦ <span className="text-crimson font-semibold">Regular Updates:</span> New features and content added weekly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServer;
