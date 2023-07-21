"use client"
import Link from 'next/link';
import React, { useState } from "react";
import { Josefin_Sans } from 'next/font/google'

const josefinSans = Josefin_Sans({
  weight: '400', // Specify the weight if 'Josefin Sans' is not available as a variable font.
  subsets: ['latin'],
});

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`${josefinSans.className} bg-white relative shadow-lg sticky top-0 z-50`}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center lg:justify-start lg:w-1/2">
            <a className="block flex items-center" href="/">
              <span className="sr-only">Home</span>
              <img className="h-12 mr-2" src="/Logo.svg" alt="Logo" />
              <span className="text-black text-lg font-bold">Gentrification</span>
              <span className="text-red-600 text-lg font-bold">.app</span>
            </a>
          </div>

          <form className="mb-0 hidden custom:flex w-2/5 mr-4">
            <div className="relative w-full">
            <input
  class="h-10 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-400 focus:z-10 w-full disabled:bg-gray-200 cursor-not-allowed"
  placeholder="Coming Soon..."
  type="text"
  disabled
/>


              <button
                type="submit"
                className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                disabled
              >
                <span className="sr-only">Submit Search</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="md:flex md:items-center custom:w-1/2 justify-end">
            <div className="flex items-center gap-6">
              <nav aria-label="Global" className="hidden custom:flex">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <div onClick={closeMenu}>
                      <Link href="/about-us" className="text-gray-500 transition hover:text-gray-500/75">
                        About Us
                      </Link>
                    </div>
                  </li>

                  <li>
                    <div onClick={closeMenu}>
                      <Link href="/resources" className="text-gray-500 transition hover:text-gray-500/75">
                        Resources
                      </Link>
                    </div>
                  </li>

                  <li>
                  <div onClick={closeMenu}>
              <Link href="/faq" className="text-gray-500 transition hover:text-gray-500/75">
                FAQ
              </Link>
            </div>
                  </li>
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/"
                    >
                      Login / Sign Up
                    </a>
                  </div>
                </ul>
              </nav>
              <div className="flex items-center gap-4">
                <div className="block custom:hidden">
                  <button 
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Global" className={`${isMenuOpen ? 'flex' : 'hidden'} custom:hidden bg-white w-full shadow-lg sticky top-0 z-50`}>
        <ul className="flex flex-col items-center gap-6 text-sm w-full py-4">
          <li>
            <form className="w-full mb-4">
              <div className="relative w-full">
                <input
                  className="py-2 px-20 rounded-lg border-gray-400 text-sm placeholder-gray-300 focus:z-10 w-full"
                  placeholder="Coming Soon..."
                  type="text"
                  disabled
                />

                <button
                  type="submit"
                  className="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
                  disabled
                >
                  <span className="sr-only">Submit Search</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </li>
          <li>
            <div onClick={closeMenu}>
              <Link href="/about-us" className="text-gray-500 transition hover:text-gray-500/75">
                About Us
              </Link>
            </div>
          </li>

          <li>
            <div onClick={closeMenu}>
              <Link href="/resources" className="text-gray-500 transition hover:text-gray-500/75">
                Resources
              </Link>
            </div>
          </li>

          <li>
          <div onClick={closeMenu}>
              <Link href="/faq" className="text-gray-500 transition hover:text-gray-500/75">
                FAQ
              </Link>
            </div>
          </li>
          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-red-600 py-2 px-20 text-sm font-medium text-white shadow"
              href="/"
            >
              Login / Sign Up
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
