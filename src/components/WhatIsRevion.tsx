import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wifi, Sparkles, Shield } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "NFC-Powered",
    description: "Tap with a phone to open your custom portfolio site.",
  },
  {
    icon: Sparkles,
    title: "Limited Launch",
    description: "Early drops only. Each hoodie is tied to a unique digital identity.",
  },
  {
    icon: Shield,
    title: "Your Identity",
    description: "Control what people see. Your builds, your story, your way.",
  },
];

const WhatIsRevion = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient - same as HeroSection */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Orange glow effect - same as HeroSection */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Centered Header */}
        <motion.div 
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block">
            <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              About Revion
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gradient">What's</span>{" "}
            <span className="text-gradient-accent">Revion?</span>
          </h2>
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p className="leading-relaxed">
              Revion is a smart hoodie with a built-in NFC tag that opens your customized car portfolio.
            </p>
            <p className="leading-relaxed text-foreground/90">
              Instead of explaining your build every time — just say{" "}
              <span className="text-primary font-semibold">"scan me"</span>.
            </p>
          </div>
        </motion.div>
        
        {/* Large centered visual card */}
        <motion.div 
          className="relative mb-16"
          style={{ y, opacity }}
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50 animate-pulse-glow" />
            
            {/* Main card */}
            <div className="relative bg-card border border-border/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              {/* NFC Icon at top */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-2 border-primary/30">
                    <Wifi className="w-12 h-12 text-primary" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" style={{ animationDuration: '3s' }} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-3xl font-bold text-center mb-4 text-gradient-accent">
                One Tap. Instant Connection.
              </h3>
              
              {/* Description */}
              <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
                No apps needed. No QR codes. Just tap your phone on the hoodie and your portfolio opens instantly.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Features - Stacked vertically with alternating layout */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex items-center gap-6 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRevion;
