import React from 'react';
import { motion } from 'framer-motion';
import badgeImage from '../assets/badge.png';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-secondary">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center px-4">
        <img src={badgeImage} alt="HAT Badge" className="w-32 h-32 mx-auto mb-6"/> 
        <h1 className="font-serif text-4xl md:text-5xl text-accent">Human Aligned Technology</h1>       
        {/* <h2 className="font-serif text-2xl md:text-3xl text-accent">Human Aligned Technology</h2> */}
        <p className="mt-4 max-w-xl mx-auto text-accent leading-relaxed">The HAT Foundation awards excellence in human-centric innovation—ensuring every certified technology amplifies human well-being, autonomy, and future potential.</p>
        <a href="#about" className="mt-8 inline-block px-8 py-3 border border-accent font-medium hover:bg-accent hover:text-secondary transition">What is HAT?</a>
      </motion.div>
    </section>
  );
}
