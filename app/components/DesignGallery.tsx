'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Preload all images immediately
    galleryItems.forEach((item, index) => {
      if (!item.image.endsWith('.gif')) {
        const img = new window.Image();
        img.src = item.image;
      }
      setLoadedImages((prev) => new Set(prev).add(index));
    });
  }, []);

  return (
    <div className={styles.masonryGrid}>
      {galleryItems.map((item, index) => (
        <div 
          key={`${item.image}-${item.title}`} 
          className={styles.masonryItem}
        >
          <Link 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full group"
          >
            <div className="relative w-full overflow-hidden aspect-auto">
              {loadedImages.has(index) ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto transition-all duration-500 hover:scale-105"
                  priority
                  loading="eager"
                  quality={75}
                  {...(!item.image.endsWith('.gif') && {
                    placeholder: "blur",
                    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  })}
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