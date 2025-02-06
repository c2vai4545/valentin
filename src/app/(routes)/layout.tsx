'use client';

import { useMemo } from 'react';
import Carousel from '../components/Carousel';

const allImages = [
  '/imgs/IMG_3848.jpg',
  '/imgs/IMG_3849.jpg',
  '/imgs/IMG_4799.JPG',
  '/imgs/IMG_5629.JPG',
  '/imgs/IMG_5819.JPG',
  '/imgs/IMG_5829.JPG',
  '/imgs/IMG_1878.JPG',
  '/imgs/30B8CE3E-755C-434E-9ADD-71A92C6AFDF4.JPG',
  '/imgs/15f7b442-5b86-432e-8664-36ae999fdf69.JPG'
];

export default function RouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const imageSets = useMemo(() => {
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    const setSize = Math.floor(shuffled.length / 4);
    return [
      shuffled.slice(0, setSize),
      shuffled.slice(setSize, setSize * 2),
      shuffled.slice(setSize * 2, setSize * 3),
      shuffled.slice(setSize * 3)
    ];
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div id="titulo" className="col-span-5 row-span-1 bg-white rounded-lg shadow-lg p-4">
          {Array.isArray(children) ? children[0] : children}
        </div>

        <div id="foto_u_r" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
          <Carousel images={imageSets[0]} interval={6000} />
        </div>
        <div id="mensaje" className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4">
          {Array.isArray(children) ? children[1] : null}
        </div>
        <div id="foto_u_l" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
          <Carousel images={imageSets[1]} interval={7000} />
        </div>

        <div id="foto_l_r" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
          <Carousel images={imageSets[2]} interval={8000} />
        </div>
        <div id="pista" className="col-span-3 row-span-2 bg-white rounded-lg shadow-lg p-4">
          {Array.isArray(children) ? children[2] : null}
        </div>
        <div id="foto_l_l" className="col-span-1 row-span-2 bg-white rounded-lg shadow-lg p-4">
          <Carousel images={imageSets[3]} interval={5000} />
        </div>
      </div>
    </div>
  );
}