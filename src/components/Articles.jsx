import React from 'react';

const posts = [
  {
    title: 'SS25 Campaign Wrap',
    excerpt:
      'Wrapped the Spring/Summer 25 campaign shoot with a bold, monochrome direction. Grateful for the team that brought it together.',
    date: 'Oct 2025',
  },
  {
    title: 'Paris Men’s Week Notes',
    excerpt:
      'Highlights from the week — elevated tailoring, soft textures, and sharp casting across the board.',
    date: 'Sep 2025',
  },
  {
    title: 'Studio Day',
    excerpt:
      'Back in the studio testing light and movement. Keeping it minimal and graphic.',
    date: 'Aug 2025',
  },
];

export default function Articles() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-20">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-black">Notes</h3>
        <p className="mt-1 text-sm text-black/60">Short updates and thoughts.</p>
      </div>
      <div className="divide-y divide-black/10 rounded-lg border border-black/10 bg-white">
        {posts.map((p, i) => (
          <article key={i} className="p-6">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-medium text-black">{p.title}</h4>
              <span className="text-xs text-black/50">{p.date}</span>
            </div>
            <p className="mt-2 text-black/70">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
