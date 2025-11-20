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
      className="min-h-screen bg-black text-white relative"
    >
      {/* Fixed progressive blur overlay at top */}
      <div className="fixed top-0 left-0 right-0 h-14 pointer-events-none z-10">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backdropFilter: 'blur(0.078125px)', WebkitBackdropFilter: 'blur(0.078125px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, backdropFilter: 'blur(0.15625px)', WebkitBackdropFilter: 'blur(0.15625px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, backdropFilter: 'blur(0.3125px)', WebkitBackdropFilter: 'blur(0.3125px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 4, backdropFilter: 'blur(0.625px)', WebkitBackdropFilter: 'blur(0.625px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, backdropFilter: 'blur(1.25px)', WebkitBackdropFilter: 'blur(1.25px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 6, backdropFilter: 'blur(2.5px)', WebkitBackdropFilter: 'blur(2.5px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 7, backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 8, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)', pointerEvents: 'none' }} />
      </div>
      
      {/* Fixed progressive blur overlay at bottom */}
      <div className="fixed bottom-0 left-0 right-0 h-14 pointer-events-none z-10">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, backdropFilter: 'blur(0.078125px)', WebkitBackdropFilter: 'blur(0.078125px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, backdropFilter: 'blur(0.15625px)', WebkitBackdropFilter: 'blur(0.15625px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 3, backdropFilter: 'blur(0.3125px)', WebkitBackdropFilter: 'blur(0.3125px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 4, backdropFilter: 'blur(0.625px)', WebkitBackdropFilter: 'blur(0.625px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 5, backdropFilter: 'blur(1.25px)', WebkitBackdropFilter: 'blur(1.25px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 6, backdropFilter: 'blur(2.5px)', WebkitBackdropFilter: 'blur(2.5px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 7, backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, zIndex: 8, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%)', pointerEvents: 'none' }} />
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
