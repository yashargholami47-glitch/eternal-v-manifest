import { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-11-01T00:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-heading mb-4 glow-gold">
            GRAND OPENING
          </h2>
          <p className="text-xl text-muted-foreground">
            The city awaits. Are you ready?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="glass rounded-xl p-6 text-center animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-heading mb-2 text-gold glow-gold">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="text-sm text-muted-foreground font-heading">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass inline-block px-8 py-4 rounded-lg">
            <p className="text-lg font-heading text-accent">
              SEASON 1: THE BEGINNING
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Join us for the launch event with exclusive rewards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
