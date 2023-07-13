import React from "react";
import { Josefin_Sans } from 'next/font/google'
import Banner from "../components/Banner";

const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
});

const Resources = () => {
    return (
      <div className={`${josefinSans.className} flex flex-col items-center bg-white text-black min-h-screen px-4 md:px-16`}>
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold text-red-500 mt-10 text-center">Resources</h1>
          <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
            On This page: you can explore a collection of free resources crafted by{' '}
            <span className="font-extrabold">Gentrification</span>
            <span className="font-extrabold text-red-500">.app</span>, dedicated to raising awareness about the multifaceted nature of gentrification. Here, we invite you to immerse yourself in these valuable materials, empowering yourself with a deeper understanding of gentrification and its far-reaching impacts. Feel free to utilize these resources as a stepping stone to delve further into the subject, encouraging you to embark on your own transformative projects. Let's come together and foster a community-driven movement that sheds light on gentrification and works towards inclusive and equitable urban development.
          </p>
  
          <h1 className="text-4xl font-bold text-red-500 mt-10 text-center">Gentrification 101</h1>
  
          <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
            Ruth Glass, the sociologist who coined the term "gentrification" in 1964, described it as the process of the middle class displacing the working class from inner-city neighborhoods. In her book "London: Aspects of Change," Glass observed the transformation of neighborhoods in London, where affluent individuals and families were moving into previously working-class areas.
          </p>
          <br />
          <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
            Glass highlighted the physical, social, and economic changes that occurred during gentrification. She noted the restoration of deteriorating housing stock, the influx of middle-class residents, and the displacement of the existing working-class population. Glass emphasized that this process often led to the loss of affordable housing, the erosion of the character of the neighborhood, and the displacement of long-term residents.
          </p>
          <br />
          <h1 className="text-2xl font-bold text-red-500 mt-10 text-center">Download our Gentrification 101 Report</h1>
          
          <div className="flex justify-center mt-6">
            <img src="/report.png" alt="Gentrification 101 Report" className="w-1/2" />
          </div>
  
          <br />
          <br />
        </div>
        <Banner />
      </div>
    );
  };
  
  export default Resources;