import React from 'react';

export default function Apply() {
  return (
    <section className="min-h-screen flex flex-col items-center px-8 md:px-24 py-20 bg-white">
      <h2 className="font-serif text-3xl mb-4 text-accent">Apply for Certification</h2>
      <p className="max-w-2xl mb-6 text-center text-accent leading-relaxed">Ready to elevate your technology? Submit your company details, and our advisory team will connect with you to begin the rigorous HAT certification journey.</p>
      <form className="w-full max-w-lg space-y-4">
        <input type="text" placeholder="Company Name" className="w-full border p-3 text-accent"/>
        <input type="email" placeholder="Contact Email" className="w-full border p-3 text-accent"/>
        <textarea placeholder="Brief Description of Tech" className="w-full border p-3 text-accent h-32"/>
        <button type="submit" className="mt-4 px-8 py-3 border border-accent font-medium hover:bg-accent hover:text-secondary transition">Start Application</button>
      </form>
    </section>
  );
}
