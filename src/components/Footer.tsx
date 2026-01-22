import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Follow Revion for sneak peeks and drop announcements.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Revion" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-foreground">REV</span>
              <span className="text-primary">ION</span>
            </span>
          </Link>
          
          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact Us
          </Link>
          
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© Revion 2026. All rights reserved.</p>
            <p className="mt-1">Made for car enthusiasts in Australia 🇦🇺</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
