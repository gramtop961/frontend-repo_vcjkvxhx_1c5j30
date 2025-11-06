import React from 'react';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import Bio from './components/Bio.jsx';
import Articles from './components/Articles.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="text-lg font-semibold tracking-tight">LA</a>
        <nav className="flex items-center gap-6 text-sm text-black/70">
          <a href="#gallery" className="hover:text-black">Gallery</a>
          <a href="#about" className="hover:text-black">About</a>
          <a href="#notes" className="hover:text-black">Notes</a>
        </nav>
      </header>

      <main>
        <Hero />
        <Gallery />
        <Bio />
        <div id="notes">
          <Articles />
        </div>
      </main>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-black/60">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Leon Avery — Portfolio</p>
          <p>
            Built with a minimalist aesthetic. Images from Unsplash for demo purposes.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
