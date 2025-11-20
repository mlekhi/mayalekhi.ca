'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './DesignGallery.module.css';

type GalleryItem = {
  title: string;
  image: string;
  link: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Momentum",
    image: "/gallery/momentum2.png",
    link: "https://momentum.place/"
  },
  {
    title: "Mustangs Network",
    image: "/gallery/mustangs.png",
    link: "https://mustangs.network/"
  },
  {
    title: "Afore Grants",
    image: "/gallery/afore.png",
    link: "https://grants.afore.vc/"
  },
  {
    title: "Alchemy",
    image: "/gallery/alchemy.png",
    link: "https://lu.ma/75qc0lv2/"
  },
  {
    title: "SOLO",
    image: "/gallery/SOLO.gif",
    link: "https://solo-founding.vercel.app/"
  },
  {
    title: "Momentum",
    image: "/gallery/momentum.gif",
    link: "https://momentum.place/"
  },
  {
    title: "Empa",
    image: "/gallery/empa.png",
    link: "https://github.com/mlekhi/empa"
  },
  {
    title: "Alchemy",
    image: "/gallery/alchemy-2.png",
    link: "https://lu.ma/75qc0lv2/"
  },
  {
    title: "House Western",
    image: "/gallery/houseWestern.png",
    link: "https://www.housewestern.ca/"
  },
  {
    title: "Stupid Hackathon",
    image: "/gallery/stupid-hackathon.gif",
    link: "https://luma.com/9qwilan6"
  }
];

export default function DesignGallery() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setLoadedImages((prev) => new Set(prev).add(index));
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '200px', // Start loading 200px before image enters viewport
          threshold: 0.01,
        }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className={styles.masonryGrid}>
      {galleryItems.map((item, index) => (
        <div 
          key={`${item.image}-${item.title}`} 
          className={styles.masonryItem}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
        >
          <Link 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full group"
          >
            <div className="relative w-full overflow-hidden aspect-auto">
              {loadedImages.has(index) || index < 2 ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto transition-all duration-500 hover:scale-105"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={85}
                  unoptimized={item.image.endsWith('.gif')}
                />
              ) : (
                <div className="w-full aspect-video bg-gray-900 animate-pulse" />
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
} 