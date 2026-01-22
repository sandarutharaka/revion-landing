import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";

const WaitlistSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Australia",
    car: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("You're on the list! We'll be in touch soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Racing speed lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-24 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent"
            style={{
              left: `${15 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: ["-100vh", "100vh"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2.5 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-gradient">Be First in the </span>
              <span className="text-gradient-accent">Pit Lane</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We're gearing up for our first drop in Australia.
              <span className="block mt-1">
                Join the list for early access, launch dates, and limited-run offers.
              </span>
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">You're In!</h3>
                <p className="text-muted-foreground">
                  Keep an eye on your inbox for launch updates and exclusive offers.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full h-12 rounded-md bg-background border border-border px-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="car">What do you drive? (Optional)</Label>
                    <Input
                      id="car"
                      name="car"
                      placeholder="e.g., R34 GTR, E30 M3..."
                      value={formData.car}
                      onChange={handleChange}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg btn-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join the Launch List"
                  )}
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  🔒 No spam. Just launch updates and exclusive offers.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
