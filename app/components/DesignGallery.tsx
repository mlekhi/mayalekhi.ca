'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './DesignGallery.module.css';

type GalleryItem = {
  title: string;
  image: string;
  link: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Alchemy",
    image: "/gallery/alchemy.png",
    link: "https://lu.ma/75qc0lv2/"
  },
  {
    title: "Momentum",
    image: "/gallery/momentum.png",
    link: "https://momentum.place"
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
    title: "Momentum",
    image: "/gallery/momentum-2.png",
    link: "https://momentum.place/"
  },
  {
    title: "House Western",
    image: "/gallery/houseWestern.png",
    link: "https://www.housewestern.ca/"
  },
];

export default function DesignGallery() {
  return (
    <div className={styles.masonryGrid}>
      {galleryItems.map((item) => (
        <div key={`${item.image}-${item.title}`} className={styles.masonryItem}>
          <Link 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full group"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto transition-all duration-500 hover:scale-105"
                priority={false}
                unoptimized
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
} 