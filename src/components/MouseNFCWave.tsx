import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MouseNFCWave = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Center the element (subtract half of width/height which is 32px for 64px total)
  const x = useTransform(cursorXSpring, (x) => x - 32);
  const y = useTransform(cursorYSpring, (y) => y - 32);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{
        x,
        y,
      }}
      initial={false}
    >
      {/* NFC Wave Rings - Similar to Hero Section */}
      <div className="relative w-16 h-16">
        {/* First Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "hsl(var(--primary) / 0.3)",
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 2.5, 2.5],
            opacity: [1, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        {/* Second Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "hsl(var(--primary) / 0.2)",
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: [1, 2.5, 2.5],
            opacity: [1, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            ease: "easeOut",
          }}
        />
        
        {/* Center Circle - Reduced opacity */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 rounded-full bg-primary/15"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default MouseNFCWave;

