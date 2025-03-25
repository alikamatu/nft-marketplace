import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "fade" | "pulse" | "spin" | "bounce";
}

// Define a type for the variant structure
interface AnimationVariant {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    rotate?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    rotate?: number;
    transition: {
      delay: number;
      duration: number;
      ease?: string;
      repeat?: number;
      repeatType?: "reverse" | "loop" | "mirror";
      type?: "spring";
      bounce?: number;
    };
  };
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "fade",
}: AnimatedTextProps) {
  const variants: Record<string, AnimationVariant> = {
    fade: {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.8, ease: "easeOut" },
      },
    },
    pulse: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { delay, duration: 0.6, repeat: Infinity, repeatType: "reverse" },
      },
    },
    spin: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { delay, duration: 1 },
      },
    },
    bounce: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.5, type: "spring", bounce: 0.5 },
      },
    },
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants[type]}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
