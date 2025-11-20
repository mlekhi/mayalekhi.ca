'use client';

import { motion } from 'framer-motion';
import MenuBar from "./components/MenuBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import DesignGallery from "./components/DesignGallery";
import FunThings from "./components/FunThings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { fadeIn, slideUp, staggerContainer } from './animations';

export default function Home() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white"
    >
      <motion.div variants={fadeIn}>
        <MenuBar isVisible={true} />
      </motion.div>
      
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.main 
          variants={staggerContainer}
          className="relative"
        >
          {/* Hero and Experience side by side */}
          <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-12 lg:gap-16 items-center">
              <Hero />
              <Experience />
            </div>
          </motion.div>

          {/* Rest of the sections with normal scroll */}
          <div className="space-y-40">
            <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center pt-20">
              <DesignGallery />
            </motion.div>

            <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[80vh] flex items-center">
              <FunThings />
            </motion.div>

            <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[80vh] flex items-center">
              <Contact />
            </motion.div>
          </div>

          <motion.footer 
            variants={slideUp}
            className="mt-24 flex items-center"
          >
            <Footer />
          </motion.footer>
        </motion.main>
      </div>
    </motion.div>
  );
}
