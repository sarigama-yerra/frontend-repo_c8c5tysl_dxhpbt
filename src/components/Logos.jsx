import React from 'react';

// Clean, horizontally-aligned brand logos (lookalike wordmarks/icons) as inline SVGs for crisp rendering
// All logos normalized to a consistent visual height
const logos = [
  {
    name: 'Google Ads',
    svg: (
      <svg viewBox="0 0 200 32" role="img" aria-label="Google Ads" className="h-6 w-auto">
        <defs>
          <linearGradient id="ga" x1="0" x2="1">
            <stop offset="0%" stopColor="#34A853" />
            <stop offset="50%" stopColor="#4285F4" />
            <stop offset="100%" stopColor="#FBBC05" />
          </linearGradient>
        </defs>
        <g fill="none" stroke="url(#ga)" strokeWidth="2.4" strokeLinecap="round">
          <path d="M24 6 L12 28" />
          <circle cx="32" cy="26" r="5" stroke="#34A853" />
          <path d="M46 6 L58 28" />
        </g>
        <text x="72" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          Google Ads
        </text>
      </svg>
    ),
  },
  {
    name: 'Meta Ads',
    svg: (
      <svg viewBox="0 0 200 32" role="img" aria-label="Meta Ads" className="h-6 w-auto">
        <g fill="none" stroke="#0866FF" strokeWidth="2.4" strokeLinecap="round">
          <path d="M16 24 C10 10, 4 8, 4 16 C4 24, 12 28, 16 16 C20 28, 28 24, 28 16 C28 8, 22 10, 16 24 Z" />
        </g>
        <text x="44" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          Meta Ads
        </text>
      </svg>
    ),
  },
  {
    name: 'Paved Ads',
    svg: (
      <svg viewBox="0 0 200 32" role="img" aria-label="Paved Ads" className="h-6 w-auto">
        <g fill="none" stroke="#111827" strokeWidth="2.6" strokeLinecap="round">
          <path d="M8 26 V8 H18 C23 8 26 11 26 16 C26 21 23 26 18 26 H8 Z M18 18 H8" />
        </g>
        <text x="40" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          Paved Ads
        </text>
      </svg>
    ),
  },
  {
    name: 'TikTok for Business',
    svg: (
      <svg viewBox="0 0 240 32" role="img" aria-label="TikTok for Business" className="h-6 w-auto">
        <g>
          <path d="M20 7 v12 a7 7 0 1 1 -7 -7" fill="none" stroke="#25F4EE" strokeWidth="2.4" />
          <path d="M20 7 c2 4 6 6 10 6" fill="none" stroke="#FE2C55" strokeWidth="2.4" />
          <circle cx="20" cy="7" r="2" fill="#111827" />
        </g>
        <text x="40" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.3" fill="#0F172A">
          TikTok for Business
        </text>
      </svg>
    ),
  },
  {
    name: 'YouTube Ads',
    svg: (
      <svg viewBox="0 0 220 32" role="img" aria-label="YouTube Ads" className="h-6 w-auto">
        <g>
          <rect x="6" y="6" rx="6" ry="6" width="28" height="20" fill="#FF0000" />
          <polygon points="20,16 16,13 16,19" fill="#fff" />
        </g>
        <text x="44" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          YouTube Ads
        </text>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 180 32" role="img" aria-label="Shopify" className="h-6 w-auto">
        <g>
          <path d="M10 10 l6 -2 l10 2 v16 l-16 -3 z" fill="#95BF47" />
          <path d="M16 14 c2 -6 6 -9 10 -6" fill="none" stroke="#5E8E3E" strokeWidth="1.6" />
        </g>
        <text x="40" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          Shopify
        </text>
      </svg>
    ),
  },
  {
    name: 'Klaviyo',
    svg: (
      <svg viewBox="0 0 180 32" role="img" aria-label="Klaviyo" className="h-6 w-auto">
        <g fill="none" stroke="#2FB67C" strokeWidth="2.2">
          <path d="M10 20 c6 -8 18 -8 24 0" />
          <path d="M14 20 c4 -5 12 -5 16 0" />
          <path d="M18 20 c2 -2 6 -2 8 0" />
        </g>
        <text x="44" y="24" fontFamily="Inter, system-ui, -apple-system, Arial" fontSize="18" letterSpacing="0.5" fill="#0F172A">
          Klaviyo
        </text>
      </svg>
    ),
  },
];

const Logos = () => {
  return (
    <section aria-labelledby="trusted" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="trusted" className="text-sm tracking-wider uppercase text-neutral-500 text-center">Trusted by Leading Brands</h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 items-center">
          {logos.map((item) => (
            <div key={item.name} className="flex items-center justify-center opacity-90 hover:opacity-100 transition" aria-label={item.name}>
              {item.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Logos;