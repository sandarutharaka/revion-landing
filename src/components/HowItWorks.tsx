import { motion } from "framer-motion";
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
      
      {/* Racing speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-32 bg-gradient-to-b from-primary/30 via-primary/50 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            How the NFC Tag Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps. No apps needed. Just tap and share your passion.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title} 
              className="relative text-center group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Connector line with animation */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                />
              )}
              
              <motion.div 
                className="relative z-10 mb-6"
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-1/4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                  {step.step}
                </span>
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-bold mb-3"
                whileHover={{ scale: 1.05 }}
              >
                {step.title}
              </motion.h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
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
