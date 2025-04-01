'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuBar from "./components/MenuBar";
import DesignGallery from "./components/DesignGallery";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import FunThings from "./components/FunThings";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { fadeIn, slideUp, staggerContainer } from './animations';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <motion.div 
        initial="hidden"
        animate={showContent ? "show" : "hidden"}
        className="min-h-screen bg-black text-white"
      >
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div variants={fadeIn}>
            <MenuBar isVisible={!isLoading} />
          </motion.div>
          
          <motion.main 
            variants={staggerContainer}
            className="relative"
          >
            {/* Hero with snap scroll */}
            <div className="h-screen snap-y snap-mandatory overflow-y-auto">
              <motion.div variants={slideUp} viewport={{ once: true }} className="snap-start min-h-[90vh] flex items-center">
                <Hero />
              </motion.div>
            </div>

            {/* Rest of the sections with normal scroll */}
            <div className="space-y-40">
              <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center">
                <Experience />
              </motion.div>

              <motion.div variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center">
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
    </>
  );
}
