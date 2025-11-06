import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to ensure text readability over the Spline scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 pt-24 pb-16 sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1 text-xs tracking-wide text-black/70 backdrop-blur-sm">
          Modern • Minimal • Portfolio
        </span>
        <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl md:text-6xl">
          Leon Avery
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg">
          Male fashion model based in New York. Clean lines, timeless silhouettes, and a camera-forward aesthetic.
        </p>
        <div className="mt-2 flex items-center gap-4">
          <a
            href="#gallery"
            className="rounded-full border border-black px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            View Gallery
          </a>
          <a
            href="#about"
            className="text-sm font-medium text-black/70 underline-offset-4 hover:underline"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
