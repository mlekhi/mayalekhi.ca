'use client';

import { motion } from 'framer-motion';
import MenuBar from "../components/MenuBar";
import DesignGallery from "../components/DesignGallery";
import Footer from "../components/Footer";
import { fadeIn, slideUp } from '../animations';

export default function Works() {
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white"
    >
      <motion.div variants={fadeIn}>
        <MenuBar isVisible={true} />
      </motion.div>
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.main 
          className="relative"
        >
          <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center pt-20">
            <DesignGallery />
          </motion.div>

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

