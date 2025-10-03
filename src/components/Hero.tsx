import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-new.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 animate-bounce-in">
          <h1 className="text-7xl md:text-9xl font-logo glow-primary tracking-widest animate-glow-pulse">
            ETERNAL
          </h1>
          
          <p className="text-2xl md:text-4xl font-heading text-accent glow-accent animate-slide-up">
            YOUR STORY BEGINS IN LOS SANTOS
          </p>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Experience the most immersive GTA V Roleplay server. Build your empire, forge alliances, and create your legacy in the city that never sleeps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 animate-zoom-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading text-lg px-8 py-6 shadow-[0_0_30px_rgba(159,90,253,0.5)] hover:shadow-[0_0_40px_rgba(159,90,253,0.7)] transition-all hover:scale-110"
            >
              JOIN NOW
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="glass hover:bg-accent/20 border-accent text-accent font-heading text-lg px-8 py-6 hover:scale-110 transition-all"
            >
              LEARN MORE
            </Button>
          </div>

          <div className="pt-12">
            <div className="glass inline-block px-6 py-3 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">CONNECT TO</p>
              <p className="font-mono text-lg font-semibold text-accent">play.eternal-rp.com</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
