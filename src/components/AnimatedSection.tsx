import { motion } from "framer-motion";

// This interface Props are used to define the properties for the AnimatedSection component
interface Props {
  children: React.ReactNode; // The children elements to be rendered within the animated section
  delay?: number; // Optional delay before the animation starts
}

export default function AnimatedSection({ children, delay = 0 }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.section>
  );
}
