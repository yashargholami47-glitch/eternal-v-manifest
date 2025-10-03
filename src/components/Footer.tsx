import { Heart, MessageCircle, Users, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: MessageCircle, label: "Discord", value: "15.2K", color: "text-accent" },
    { icon: Users, label: "Forum", value: "8.5K", color: "text-primary" },
    { icon: Youtube, label: "YouTube", value: "24K", color: "text-crimson" },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading mb-4 glow-primary">ETERNAL RP</h3>
            <p className="text-muted-foreground mb-4">
              The most immersive GTA V Roleplay experience. Join thousands of players in Los Santos.
            </p>
            <div className="glass inline-block px-4 py-2 rounded-lg">
              <p className="font-mono text-sm">play.eternal-rp.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-accent transition-colors">Features</a></li>
              <li><a href="#characters" className="hover:text-accent transition-colors">Characters</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#rules" className="hover:text-accent transition-colors">Server Rules</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-4">COMMUNITY</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    className="flex items-center space-x-3 glass p-3 rounded-lg hover:scale-105 transition-transform duration-300 group"
                  >
                    <Icon className={`${social.color} group-hover:scale-110 transition-transform`} size={20} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{social.label}</p>
                      <p className="text-xs text-muted-foreground">{social.value} members</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>© 2025 ETERNAL RP. All rights reserved.</p>
            <p className="flex items-center space-x-1 mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="text-crimson" size={16} fill="currentColor" />
              <span>by the ETERNAL team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
