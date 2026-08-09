import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xl font-bold tracking-tighter text-white hover:text-cyan-400 transition-colors duration-300 font-mono"
    >
      DIEGO<span className="text-cyan-400">.</span>ORTIZ
    </motion.a>
  );
}

export default Logo;
