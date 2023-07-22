"use client"
import React, { useState, useEffect } from "react";
import { Josefin_Sans } from 'next/font/google';

const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Banner = () => {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
      const windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
        setVisible(false);
      } else {
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      }
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleClick = (e, message) => {
    e.preventDefault();
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      {alertVisible && (
        <div onClick={closeAlert} className="fixed z-50 inset-0 bg-transparent flex items-center justify-center">
          <div role="alert" className="rounded-lg border-4 border-green-500 bg-green-50 p-6">
            <strong className="block font-medium text-green-800">Available Soon!</strong>
            <p className="mt-2 text-sm text-green-700">
              {alertMessage}
            </p>
            <p className="mt-2 text-xs text-black italic">
              (Click anywhere to close this alert)
            </p>
          </div>
        </div>
      )}
      <div 
        className={`${josefinSans.className} fixed bottom-0 left-0 w-full bg-white shadow-lg transition-transform duration-400 ease-in-out ${visible ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ boxShadow: '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)' }}
      >
        <div className="flex items-center justify-between max-w-screen-xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center pl-3 sm:pl-5 lg:pl-7">
            <div onClick={(e) => handleClick(e, "Our Instagram page is coming soon...")} className="mr-4">
              <img src="/ig.svg" alt="Instagram" className="h-6 w-6" />
            </div>
            <div onClick={(e) => handleClick(e, "Our GitHub page is coming soon...")}>
              <img src="/gh.svg" alt="GitHub" className="h-6 w-6" />
            </div>
          </div>
          <div className="text-xs font-medium text-gray-600">Beta v0.1.0</div>
          <div className="pr-3 sm:pr-5 lg:pr-7">
            <div onClick={(e) => handleClick(e, "Donation feature coming soon...")} className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer">Donate</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
