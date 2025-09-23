import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full bg-black/80 backdrop-blur-sm border-t border-gray-800"
    >
      <div className="w-full px-8 h-10 flex items-center justify-center">
        <a 
          href="https://github.com/mlekhi/mayalekhi.ca" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs font-semibold tracking-tight text-white hover:text-gray-300 transition-colors"
        >
          made by maya with ♡
        </a>
      </div>
    </motion.footer>
  );
} 