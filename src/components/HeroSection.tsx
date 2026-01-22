import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-hoodie.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Orange glow effect */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-glow text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Coming Soon to Australia
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-gradient">Scan Me.</span>
              <br />
              <span className="text-gradient-accent">Reveal the Ride.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Revion is an NFC-powered hoodie that links straight to your car portfolio.
              <span className="block mt-2 text-foreground/80">
                One tap. Your builds, mods, and stories — all in one place.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-glow text-lg h-14 px-8">
                <a href="#waitlist">
                  Join the Launch List
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg h-14 px-8 border-border hover:bg-secondary"
              >
                <a href="#how-it-works">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </a>
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Revion NFC Hoodie"
                className="w-full h-full object-cover"
              />
              
              {/* NFC Tag indicator */}
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 nfc-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Callout label */}
              <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-auto">
                <div className="bg-background/90 backdrop-blur-md border border-border rounded-lg px-4 py-3">
                  <p className="text-sm font-medium text-primary">NFC Tag Here</p>
                  <p className="text-xs text-muted-foreground">Tap with your phone</p>
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
