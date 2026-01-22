import { Smartphone, Link, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Smartphone,
    step: "01",
    title: "Tap",
    description: "Someone taps their phone on your hoodie.",
  },
  {
    icon: Link,
    step: "02",
    title: "Instant Link",
    description: "Your unique car portfolio opens instantly.",
  },
  {
    icon: Users,
    step: "03",
    title: "Flex & Connect",
    description: "They see your car, socials, and how to contact you.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            How the NFC Tag Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps. No apps needed. Just tap and share your passion.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative z-10 mb-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-1/4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mb-8">
          Compatible with most modern NFC-enabled smartphones (iPhone 7+, Android 5.0+)
        </p>
        
        <div className="text-center">
          <Button asChild size="lg" className="btn-glow">
            <a href="#waitlist">Get Notified at Launch</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
