import React from 'react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-8 md:px-24 py-20 bg-white">
      <h2 className="font-serif text-3xl mb-6 text-accent">About HAT</h2>
      <p className="max-w-3xl mb-6 leading-relaxed text-accent">The HAT Foundation certifies and awards companies whose technology aligns with human values, cognitive autonomy, and long-term flourishing. We champion autonomy, empathy, sustainability, and trust as the pillars of responsible innovation.</p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {['Autonomy', 'Empathy', 'Cognition', 'Sustainability', 'Trust'].map((v) => (
          <li key={v} className="flex items-start"><span className="mr-3 font-serif text-xl text-accent">•</span><span className="text-accent leading-snug">{v}</span></li>
        ))}
      </ul>
      <blockquote className="border-l-4 border-accent pl-6 italic font-serif text-accent">“Alignment is not a feature. It is the foundation.”</blockquote>
    </section>
  );
}
