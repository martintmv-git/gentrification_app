"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div 
      className={`${josefinSans.className} fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-400 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
      style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)' }}
    >
      <div className="flex items-center justify-between max-w-screen-xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center pl-3 sm:pl-5 lg:pl-7">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img src="/ig.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="/gh.svg" alt="GitHub" className="h-6 w-6" />
          </a>
        </div>
        <div className="pr-3 sm:pr-5 lg:pr-7">
          <Link href="/donate">
            <div className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer">Donate</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
