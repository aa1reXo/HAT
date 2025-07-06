import React from 'react';
import badgeImage from '../assets/badge.png';

export default function Badge() {
  const companies = [{name:'NovaTech',year:'2025'},{name:'Lumina AI',year:'2025'},{name:'Ethos Systems',year:'2025'}];
  return (
    <section className="min-h-screen flex flex-col items-center px-8 md:px-24 py-20 bg-secondary">
      <img src={badgeImage} alt="HAT Badge" className="w-40 h-40 mb-6"/>
      <h2 className="font-serif text-3xl mb-4 text-accent">The HAT Badge</h2>
      <p className="max-w-3xl mb-6 text-center text-accent leading-relaxed">Our seal of approval signifies rigorous evaluation across ethical impact, technical integrity, and user-centric design. Certified organizations uphold human dignity and future stewardship.</p>
      <details className="mb-8 text-accent"><summary className="cursor-pointer text-lg font-medium">Evaluation Process</summary>
        <ol className="mt-2 list-decimal list-inside space-y-2">
          <li><strong>Submission & Discovery:</strong> Companies submit detailed whitepapers.</li>
          <li><strong>Ethical Impact Assessment:</strong> Third-party panel reviews human metrics.</li>
          <li><strong>Technical Alignment Review:</strong> Architecture & data practices audited.</li>
          <li><strong>Board Approval:</strong> Founders’ council ratifies certification.</li>
        </ol>
      </details>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {companies.map(({name,year})=>(<div key={name} className="p-6 border border-accent bg-white text-center"><div className="font-serif text-xl mb-2 text-accent">{name}</div><div className="text-sm text-gray-600">Certified {year}</div></div>))}
      </div>
    </section>
  );
}
