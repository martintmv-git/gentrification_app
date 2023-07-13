import React from "react";
import { Josefin_Sans } from "next/font/google";
import Banner from "../components/Banner";

const josefinSans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
});

const FAQ = () => {
  return (
    <div
      className={`${josefinSans.className} flex flex-col items-center bg-white text-black min-h-screen px-4 md:px-16`}
    >
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl md:text-4xl font-bold text-red-500 mt-10 text-center">
          FAQ
        </h1>
        <br></br>
        <br></br>
        <div className="space-y-4">
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3.5 rounded-lg bg-gray-50 p-4 text-gray-900 min-w-full">
              <h2 className="text-2xl md:text-3xl font-medium ">
              <span className="text-red-500">What Is </span>
               <span className="font-extrabold">Gentrification</span>
                <span className="font-extrabold text-red-500">.app ?</span>
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
              Gentrification.app is an online platform dedicated to raising
              awareness about gentrification. It provides resources and
              interactive tools to help individuals understand and visualize the
              impacts of gentrification on communities. Users can explore maps,
              visualizations, and educational materials to gain insights into
              this complex process. The platform also encourages users to
              actively participate by contributing their own experiences and
              documenting instances of gentrification in their neighborhoods. By
              fostering community engagement and knowledge sharing,
              gentrification.app aims to empower individuals and drive
              collective action towards more equitable urban development.
            </p>
          </details>
          <br></br>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 min-w-full">
              <h2 className="text-2xl md:text-3xl font-medium text-red-500">
                Why Google Street View ?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
          <br></br>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 min-w-full">
              <h2 className="text-2xl md:text-3xl font-medium text-red-500">
                How Can I Participate ?
              </h2>

              <svg
                className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>

            <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
        <br />
        <br />
      </div>
      <Banner />
    </div>
  );
};

export default FAQ;
