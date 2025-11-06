import React from 'react';

export default function Bio() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-14">
      <h3 className="text-xl font-semibold text-black">About</h3>
      <p className="mt-3 text-base leading-relaxed text-black/70">
        Leon Avery is a New York–based fashion model known for refined minimalism and
        versatile runway presence. He has collaborated with luxury houses and
        emerging designers across editorials, lookbooks, and runway. Outside of
        work, Leon enjoys photography, cycling, and exploring modern architecture.
      </p>
      <div className="mt-6 grid gap-3 text-sm text-black/60 sm:grid-cols-2">
        <div className="rounded-md border border-black/10 p-4">
          <p className="font-medium text-black">Height</p>
          <p>188 cm / 6'2"</p>
        </div>
        <div className="rounded-md border border-black/10 p-4">
          <p className="font-medium text-black">Suit</p>
          <p>38R</p>
        </div>
        <div className="rounded-md border border-black/10 p-4">
          <p className="font-medium text-black">Waist</p>
          <p>31"</p>
        </div>
        <div className="rounded-md border border-black/10 p-4">
          <p className="font-medium text-black">Shoes</p>
          <p>44 EU / 10.5 US</p>
        </div>
      </div>
    </section>
  );
}
