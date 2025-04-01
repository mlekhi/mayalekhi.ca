'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from 'react-masonry-css';
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

const breakpointColumns = {
  default: 2,
  768: 1
};

export default function DesignGallery() {
  return (
    <section className="w-full h-full flex flex-col justify-center">
      <h2 className="text-4xl font-normal mb-12 relative text-white">
        assorted design tidbits
        <span className="font-mono text-sm absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
          {`ʕ•̫͡•ʔ`}
        </span>
      </h2>
      <Masonry
        breakpointCols={breakpointColumns}
        className={styles['masonry-grid']}
        columnClassName={styles['masonry-grid_column']}
      >
        {galleryItems.map((item) => (
          <div key={item.title} className={styles['masonry-grid_item']}>
            <Link 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full"
            >
              <div className="relative w-full overflow-hidden rounded-lg z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto transition-all duration-500 hover:scale-105 rounded-lg"
                  priority={false}
                  unoptimized
                />
              </div>
            </Link>
          </div>
        ))}
      </Masonry>
    </section>
  );
} 