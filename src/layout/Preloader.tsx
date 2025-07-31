'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    // Animation du SVG (opacité + montée)
    tl.fromTo(
      svgRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 }
    );

    // Disparition du préloader après 2,5s
    tl.to(
      containerRef.current,
      { y: '-100%', duration: 1, delay: 1 },
      '+=0.5'
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white text-blue-700 font-bold overflow-hidden"
    >
      <svg
        ref={svgRef}
        width="200"
        height="80"
        viewBox="0 0 400 100"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-black"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="42"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          color='color'
        >
          Changement...
        </text>
      </svg>
    </div>
  );
}
