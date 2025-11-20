'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import MenuBar from "./components/MenuBar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import DesignGallery from "./components/DesignGallery";
import FunThings from "./components/FunThings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { fadeIn, slideUp, staggerContainer } from './animations';

export default function Home() {
  const [showBlur, setShowBlur] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowBlur(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: '400px 0px 400px 0px', // Start 400px before and end 400px after the gallery
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white relative"
    >
      {/* Fixed progressive blur overlay at top */}
      <div className={`fixed top-0 left-0 right-0 h-14 pointer-events-none z-50 transition-opacity duration-500 ${showBlur ? 'opacity-100' : 'opacity-0'}`}>
        {/* Strongest blur at the very top - fades smoothly */}
        <div 
          className="absolute top-0 left-0 right-0 h-14 backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 20%, transparent 100%)',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 100%)'
          }}
        />
        {/* Medium blur layer - overlapping for smooth transition */}
        <div 
          className="absolute top-0 left-0 right-0 h-12 backdrop-blur-md"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 70%)'
          }}
        />
        {/* Light blur layer - extends further */}
        <div 
          className="absolute top-0 left-0 right-0 h-10 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 50%)'
          }}
        />
      </div>
      
      {/* Fixed progressive blur overlay at bottom */}
      <div className={`fixed bottom-0 left-0 right-0 h-14 pointer-events-none z-50 transition-opacity duration-500 ${showBlur ? 'opacity-100' : 'opacity-0'}`}>
        {/* Strongest blur at the very bottom - fades smoothly */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-14 backdrop-blur-xl"
          style={{
            maskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 30%, transparent 100%)'
          }}
        />
        {/* Medium blur layer - overlapping for smooth transition */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-12 backdrop-blur-md"
          style={{
            maskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 80%)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 70%)'
          }}
        />
        {/* Light blur layer - extends further */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-10 backdrop-blur-sm"
          style={{
            maskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 60%)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)'
          }}
        />
      </div>
      
      <motion.div variants={fadeIn}>
        <MenuBar isVisible={true} />
      </motion.div>
      
      <div className="max-w-[1920px] mx-auto px-8 sm:px-12 md:px-16 lg:px-20">
        <motion.main 
          variants={staggerContainer}
          className="relative"
        >
          {/* Hero and Experience side by side */}
          <div className="min-h-[90vh] flex items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-12 lg:gap-16 items-center">
              <motion.div variants={slideUp} viewport={{ once: true }}>
                <Hero />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Experience />
              </motion.div>
            </div>
          </div>

          {/* Rest of the sections with normal scroll */}
          <div className="space-y-40">
            <motion.div ref={galleryRef} variants={slideUp} viewport={{ once: true }} className="min-h-[90vh] flex items-center pt-20">
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
