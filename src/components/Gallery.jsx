import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop',
    alt: 'Editorial portrait in studio lighting',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    alt: 'Street style look with tailored coat',
  },
  {
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1200&auto=format&fit=crop',
    alt: 'Monochrome studio profile',
  },
  {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop',
    alt: 'Runway backstage moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?q=80&w=1200&auto=format&fit=crop',
    alt: 'Classic suit editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    alt: 'Minimalist studio pose',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-3xl">Portfolio</h2>
          <p className="mt-1 text-sm text-black/60">A curated selection of recent work.</p>
        </div>
        <a href="#admin" className="text-sm text-black/60 underline-offset-4 hover:text-black hover:underline">
          Admin
        </a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((img, idx) => (
          <figure key={idx} className="group relative overflow-hidden rounded-lg bg-white">
            <img
              src={img.src}
              alt={img.alt}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-3 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
