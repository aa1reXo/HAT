import React from 'react';

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center px-8 md:px-24 py-20 bg-white">
      <h2 className="font-serif text-3xl mb-4 text-accent">Contact & Join</h2>
      <p className="max-w-2xl mb-6 text-center text-accent leading-relaxed">Subscribe for exclusive insights or request an invite to our private HAT community forum.</p>
      <form className="w-full max-w-lg space-y-4">
        <input type="email" placeholder="Your Email" className="w-full border p-3 text-accent"/>
        <button type="submit" className="mt-4 px-8 py-3 border border-accent font-medium hover:bg-accent hover:text-secondary transition">Subscribe</button>
      </form>
      <div className="mt-8"><a href="#" className="underline font-medium text-accent">LinkedIn Community</a></div>
    </section>
  );
}
