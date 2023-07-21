  "use client"
  import React, { useEffect, useState } from 'react';
  import maplibre from 'maplibre-gl'; 
  import { Josefin_Sans } from 'next/font/google';
  import db from '../lib/firebase'; 
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
  import Link from 'next/link';  // Import the Link component from Next.js
  
  const josefinSans = Josefin_Sans({
    weight: '400',
    subsets: ['latin'],
  });
  
  function MapComponent() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
  
    useEffect(() => {
      const map = new maplibre.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/streets/style.json?key=yqoBKpegIKzfVwh70q12',
        center: [4.9041, 52.3676],
        zoom: 5,
        attributionControl: false,
      });
  
      map.addControl(new maplibre.NavigationControl());
  
      const mapContainer = document.getElementById('map');
      mapContainer.style.position = 'relative';
  
      return () => {
        map.remove(); 
      };
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!email.includes('@')) {
        setErrorMessage('Please enter a valid email address.');
        return;
      }
  
      try {
        const docRef = await addDoc(collection(db, 'subscribers'), {
          email: email,
          timestamp: serverTimestamp()
        });
        setEmail('');
        setErrorMessage('');
        setIsSubscribed(true);
      } catch (error) {
        console.error('Error adding email: ', error);
      }
    };
  
    return (
      <div id="map" className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40" style={{ pointerEvents: 'none' }}></div>
        <div className={`${josefinSans.className} flex flex-col items-center text-black w-full h-3/4 sm:h-5/6 md:h-5/6 lg:max-w-2xl xl:max-w-3xl rounded-lg absolute top-1/4 sm:top-1/3 md:top-1/3 lg:top-1/4 xl:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-20 sm:py-24 md:py-28 lg:py-32 px-2 sm:px-4 md:px-16 custom-css`}>
          <br></br>
          <section className="bg-white">
            <div className="p-2 sm:p-4 md:p-8 lg:p-12 xl:p-24">
              <div className="mx-auto max-w-lg text-center">
                {isSubscribed ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Success!</h2>
                    <br></br>
                    <p className="text-gray-500 sm:mt-4 text-center max-w-md mx-auto">
  You've successfully subscribed to our updates! We'll send you an email when <span className="font-extrabold text-black">Gentrification</span>
            <span className="font-extrabold text-red-500">.app</span> is live.
</p>
<br></br>
<p className="text-gray-500 sm:mt-4 text-center max-w-md mx-auto">
  In the meantime, explore our website and learn more about our project.
</p>
<br></br>
<div className="text-center">
  <Link href="/about-us">
    <button className="group mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto">
      <span className="text-sm font-medium">Explore</span>
    </button>
  </Link>
</div>


                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                      Stay Updated with 
                      <span className="font-extrabold"> Gentrification</span>
                      <span className="font-extrabold text-red-500">.app</span>
                    </h2>
  
                    <p className="text-gray-500 sm:mt-4 text-center max-w-md mx-auto">
                      Welcome to Gentrification.app, a platform dedicated to creating awareness and fostering understanding about the impacts of gentrification. Our project is still under development, but you can stay informed about our progress and not miss our upcoming launch by signing up for our newsletter. Your involvement matters.
                    </p>
  
                    <div className="mx-auto mt-8 max-w-xl">
                      <form action="#" className="sm:flex sm:gap-4" onSubmit={handleSubmit}>
                        <div className="sm:flex-1">
                          <label htmlFor="email" className="sr-only">Email</label>
  
                          <input
                            type="email"
                            placeholder="Email address"
                            className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
  
                        <button
                          type="submit"
                          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                        >
                          <span className="text-sm font-medium"> Sign Up </span>
  
                          <svg
                            className="h-5 w-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
  
                        {errorMessage && (
                          <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
                        )}
                      </form>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  
  export default MapComponent;
  