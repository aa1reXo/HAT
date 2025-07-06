import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  const pillars = ['Autonomy','Empathy','Cognition','Sustainability','Trust','Privacy','Transparency','Equity','Resilience','Inspiration'];
  return (
    <section className="px-8 md:px-24 py-20 bg-accent text-secondary">
      <h2 className="font-serif text-3xl mb-8 text-center">The 10 Pillars of Human-Aligned Tech</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((p,i)=>(
          <motion.div key={p} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}} className="p-6 border border-secondary bg-secondary text-accent">
            <h3 className="font-serif text-xl mb-2">{p}</h3>
            <p className="text-sm leading-snug">A foundational ethos ensuring that every bit of code and every user journey reflects humanity’s highest aspirations.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
