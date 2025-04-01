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
      { text: "250+ member " },
      { text: "coworking community", style: "underline", href: "https://momentum.place" },
      { text: " for " },
      { text: "hobbyists & side project hustlers", style: "italic" },
      { text: " in london, ontario." }
    ]
  },
  {
    parts: [
      { text: "i am " },
      { text: "deeply obsessed", style: "italic" },
      { text: " with " },
      { text: "severance", style: "underline", href: "https://www.apple.com/tv-pr/originals/severance/" },
      { text: " fan theories." }
    ]
  },
  {
    parts: [
      { text: "i've thrown a series of " },
      { text: "matchmaking events", style: "underline", href: "https://www.instagram.com/p/DAq9h5bSiG1/?img_index=1" },
      { text: ", which started because i wanted " },
      { text: "two of my friends", style: "italic" },
      { text: " to date." }
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
      { text: "i'm currently working on building a " },
      { text: "mind controlled robot", style: "italic" },
      { text: "." }
    ]
  }
];

export default function FunThings() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <h2 className="text-4xl font-medium mb-12 relative text-white">
        fun things
        <span className="font-mono text-sm absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
          {`ʕ•̫͡•ʔ`}
        </span>
      </h2>
      <div className="space-y-8">
        {funThings.map((thing, index) => (
          <div key={index} className="group/item relative">
            <div className="flex gap-6">
              <span className="text-md text-white/60 font-mono">
                {String(index + 1).padStart(2, '0')}
              </span>
              
              <p className="text-base text-white leading-relaxed">
                {thing.parts.map((part, partIndex) => (
                  part.href ? (
                    <a 
                      key={partIndex}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white underline decoration-[1px] underline-offset-2 hover:decoration-2 hover:text-blue-400 transition-all"
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
            <span className="font-mono text-sm absolute -right-8 top-0 opacity-0 group-hover/item:opacity-100 transition-opacity text-gray-400">
              {`ʕ•̫͡•ʔ`}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
} 