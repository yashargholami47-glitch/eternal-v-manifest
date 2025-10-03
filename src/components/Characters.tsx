import { useState } from "react";
import michaelImg from "@/assets/michael.jpg";
import franklinImg from "@/assets/franklin.jpg";
import trevorImg from "@/assets/trevor.jpg";
import lamarImg from "@/assets/lamar.jpg";

const characters = [
  {
    name: "Michael",
    role: "Former Bank Robber",
    image: michaelImg,
    story: "A career criminal who made a deal with the FIB to start a new life. Now living in luxury but haunted by his past.",
    abilities: ["Expert Marksman", "Strategic Planning", "Business Acumen"],
  },
  {
    name: "Franklin",
    role: "Street Hustler",
    image: franklinImg,
    story: "A young gangster trying to escape the streets of South Los Santos and make it to the big leagues.",
    abilities: ["Expert Driver", "Street Smart", "Loyal Friend"],
  },
  {
    name: "Trevor",
    role: "Psychotic Criminal",
    image: trevorImg,
    story: "An unhinged criminal with a violent temper. Runs a small-time operation in Blaine County.",
    abilities: ["Fearless", "Unpredictable", "Survival Expert"],
  },
  {
    name: "Lamar",
    role: "Gang Member",
    image: lamarImg,
    story: "Franklin's best friend and fellow gang member, always looking for the next big score.",
    abilities: ["Street Connections", "Hustler", "Loyal Partner"],
  },
];

const Characters = () => {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="characters" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-heading mb-4 glow-accent">
            MEET THE LEGENDS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every character has a story. What will yours be?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => (
            <div
              key={index}
              className="relative h-[500px] perspective-1000 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setFlipped(index)}
              onMouseLeave={() => setFlipped(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flipped === index ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="glass rounded-xl overflow-hidden h-full hover:shadow-[0_0_30px_rgba(0,168,255,0.3)] transition-all duration-300">
                    <div className="relative h-full">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-heading mb-1">{character.name}</h3>
                        <p className="text-accent text-sm">{character.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="glass rounded-xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-heading mb-2 text-accent">{character.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{character.story}</p>
                      
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gold mb-2">Abilities:</p>
                        {character.abilities.map((ability, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span className="text-sm">{ability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Characters;
