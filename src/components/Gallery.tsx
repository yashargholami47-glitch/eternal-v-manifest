import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      title: "Downtown Los Santos",
      category: "City Life",
      placeholder: "bg-gradient-to-br from-primary to-accent",
    },
    {
      title: "Custom Vehicles",
      category: "Vehicles",
      placeholder: "bg-gradient-to-br from-gold to-crimson",
    },
    {
      title: "Bank Heist",
      category: "Roleplay",
      placeholder: "bg-gradient-to-br from-accent to-primary",
    },
    {
      title: "Luxury Properties",
      category: "Properties",
      placeholder: "bg-gradient-to-br from-crimson to-gold",
    },
    {
      title: "Gang Territory",
      category: "Roleplay",
      placeholder: "bg-gradient-to-br from-primary to-crimson",
    },
    {
      title: "Police Chase",
      category: "City Life",
      placeholder: "bg-gradient-to-br from-accent to-gold",
    },
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/95" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-heading mb-4 glow-primary">
            GALLERY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what awaits you in Los Santos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="glass rounded-xl overflow-hidden aspect-video">
                <div className={`w-full h-full ${image.placeholder} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <p className="text-2xl font-heading mb-2">{image.title}</p>
                      <p className="text-sm text-accent">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs">
                    {image.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Screenshots from our community members
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-accent">More coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
