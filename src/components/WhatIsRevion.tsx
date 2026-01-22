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
  return (
    <section id="about" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            What's Revion?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Revion is a smart hoodie with a built-in NFC tag that opens your customized car portfolio.
            <span className="block mt-2 text-foreground/90">
              Instead of explaining your build every time — just say <span className="text-primary font-semibold">"scan me"</span>.
            </span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRevion;
