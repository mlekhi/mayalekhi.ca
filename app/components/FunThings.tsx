'use client';

import { motion } from 'framer-motion';

interface FunThing {
  parts: {
    text: string;
    style?: 'italic' | 'underline';
    href?: string;
  }[];
}

const funThings: FunThing[] = [
  {
    parts: [
      { text: "i created a " },
      { text: "250+ member coworking community", style: "underline", href: "https://momentum.place" },
      { text: " for hobbyists and side project hustlers in london, ontario." },
    ]
  },
  {
    parts: [
      { text: "i am " },
      { text: "obsessed", style: "italic" },
      { text: " with " },
      { text: "severance", style: "underline", href: "https://www.apple.com/tv-pr/originals/severance/" },
      { text: " fan theories." }
    ]
  },
  {
    parts: [
      { text: "i've thrown a " },
      { text: "series of matchmaking events", style: "underline", href: "https://www.instagram.com/p/DAq9h5bSiG1/?img_index=1" },
      { text: ", which started because i wanted two of my friends to date." },
    ]
  },
  {
    parts: [
      { text: "i am a " },
      { text: "crazy", style: "italic" },
      { text: " pokemon fan. i own a " },
      { text: "4ft tall" },
      { text: " plush of " },
      { text: "snorlax", style: "underline", href: "https://www.pokemon.com/us/pokedex/snorlax" },
      { text: "." }
    ]
  },
  {
    parts: [
      { text: "i most recently worked on building a " },
      { text: "mind-controlled robot", style: "underline", href: "https://x.com/maya_l39/status/1935737360236658710/" },
      { text: "." }
    ]
  }
];

export default function FunThings() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <h2 className="text-4xl font-medium mb-12 relative text-white">
        fun facts
      </h2>
      <div className="space-y-4">
        {funThings.map((thing, index) => (
          <div key={index} className="group/item relative">
            <div className="flex gap-6">
              <span className="text-md text-white/60 font-mono uppercase">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <p className="text-base text-white leading-normal">
                {thing.parts.map((part, partIndex) => (
                  part.href ? (
                    <a 
                      key={partIndex}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      {part.text}
                    </a>
                  ) : (
                    <span 
                      key={partIndex} 
                      className={part.style === 'italic' ? 'italic' : ''}
                    >
                      {part.text}
                    </span>
                  )
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 