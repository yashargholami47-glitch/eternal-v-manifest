import { Download, Settings, PlayCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToJoin = () => {
  const steps = [
    {
      icon: Download,
      title: "Download FiveM",
      description: "First, download and install FiveM client from the official website",
      link: "https://fivem.net",
      color: "primary",
    },
    {
      icon: Settings,
      title: "Setup Your Game",
      description: "Make sure you have GTA V installed and updated to the latest version",
      color: "accent",
    },
    {
      icon: PlayCircle,
      title: "Connect to Server",
      description: "Launch FiveM and connect to: play.eternal-rp.com",
      color: "gold",
    },
    {
      icon: CheckCircle,
      title: "Create Character",
      description: "Follow the in-game tutorial to create your character and start your story",
      color: "crimson",
    },
  ];

  return (
    <section id="tutorial" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background/50" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-6xl font-heading glow-accent mb-6">
            HOW TO JOIN
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Follow these simple steps to begin your journey in Los Santos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-${step.color}/20 flex items-center justify-center`}>
                  <step.icon className={`w-8 h-8 text-${step.color}`} />
                </div>
                <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-${step.color} flex items-center justify-center text-${step.color}-foreground font-bold text-sm`}>
                  {index + 1}
                </div>
              </div>
              
              <h3 className={`text-xl font-heading text-${step.color} mb-3`}>
                {step.title}
              </h3>
              
              <p className="text-foreground/70 text-sm mb-4">
                {step.description}
              </p>
              
              {step.link && (
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full border-${step.color} text-${step.color} hover:bg-${step.color}/20`}
                  onClick={() => window.open(step.link, '_blank')}
                >
                  Download
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl text-center animate-zoom-in">
          <h3 className="text-2xl font-heading text-primary mb-4">
            NEED HELP?
          </h3>
          <p className="text-foreground/80 mb-6">
            Join our Discord community for support, guides, and to meet other players
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading shadow-[0_0_30px_rgba(0,168,255,0.5)] hover:shadow-[0_0_40px_rgba(0,168,255,0.7)] transition-all"
          >
            JOIN DISCORD
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
