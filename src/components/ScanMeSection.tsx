import { motion } from "framer-motion";

const phrases = [
  "Scan me to see what I drive.",
  "Tap to view my build sheet.",
  "Scan to know my garage.",
  "Tap to find my secrets.",
  "Scan for the full story.",
  "Tap to unlock the build.",
];

const ScanMeSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <motion.div 
        className="container mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gradient">
          Fun Ways to Wear It
        </h2>
      </motion.div>
      
      {/* Horizontal scrolling badges */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="flex gap-4 animate-scroll">
          {[...phrases, ...phrases].map((phrase, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 px-8 py-5 rounded-full bg-card border border-border hover:border-primary/50 transition-colors cursor-default"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-lg font-medium whitespace-nowrap">
                <span className="text-primary">"</span>
                {phrase}
                <span className="text-primary">"</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ScanMeSection;
