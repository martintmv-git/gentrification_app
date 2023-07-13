import React from "react";
import { Josefin_Sans } from 'next/font/google'
import Banner from "../components/Banner";

const josefinSans = Josefin_Sans({
  weight: '400',
  subsets: ['latin'],
});

const AboutUs = () => {
    return (
      <div className={`${josefinSans.className} flex flex-col items-center bg-white text-black min-h-screen px-4 md:px-16`}>
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold text-red-500 mt-10 text-center">About Us</h1>
          <p className="text-left text-lg sm:text-xl lg:text-2xl mt-6">
            <span className="font-extrabold text-black">Gentrification</span>
            <span className="font-extrabold text-red-500">.app</span> is a counter-mapping and crowdsourced initiative born from the collaboration of two passionate designers who connected online. Our mission is to raise awareness about the global impact of gentrification. While the term 'gentrification' may be confined to academic circles, its effects are palpable on the streets, touching lives worldwide. We believe that people possess an inherent understanding of gentrification, recognizing its manifestations and how it shapes their communities. However, they may be unaware that a word exists to describe it. Harnessing the power of online open-sources like Google Street View, we have created <span className="font-extrabold text-black-500">Gentrification</span><span className="font-extrabold text-red-500">.app</span> as a platform for individuals to identify and showcase gentrified areas worldwide. Together, we illuminate the transformations unfolding in neighborhoods through the lens of gentrification.
          </p>
          <h1 className="text-4xl font-bold text-red-500 mt-10 text-center">Team</h1>
        
          <div className="flex flex-col md:flex-row justify-between items-start mt-6">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/3 flex-shrink-0">
              <a href="https://giuliaandronico.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start">
                <h2 className="text-2xl font-bold text-red-500 whitespace-nowrap">Giulia Andronico</h2>
                <span className="ml-2 text-red-500">↗</span>
              </a>
              <img className="w-9/10 md:w-full object-cover" src="/giulia.png" alt="Giulia Andronico Image" />
            </div>
            <p className="mt-6 md:mt-0 md:ml-8 text-left text-lg sm:text-xl lg:text-2xl flex-grow">
            Giulia Andronico is a graphic designer based in Amsterdam. With a unique blend of graphic design expertise and a background in urban planning, for her capstone project at The New School in New York City she challenged herself on how to “document gentrification”. Drawing inspiration from her personal experience in São Paulo's Vila Madalena neighborhood, Giulia documented the gentrification unfolding in her community. Through timelapse videos, she unveiled the changes occurring within the neighborhood, discovering the power that such visual storytelling holds in shedding light on the global impact of gentrification. Fueled by her passion, Giulia strives to create an online community where individuals can connect and share their diverse experiences, collectively raising awareness about the profound effects of gentrification.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="flex flex-col md:flex-row justify-between items-start mt-6">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 flex-shrink-0">
            <a href="https://martintomov.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start">
              <h2 className="text-2xl font-bold text-red-500 whitespace-nowrap">Martin Tomov</h2>
              <span className="ml-2 text-red-500">↗</span>
            </a>
            <img className="w-9/10 md:w-full object-cover" src="/martin.png" alt="Martin Tomov Image" />
          </div>
          <p className="mt-6 md:mt-0 md:ml-8 text-left text-lg sm:text-xl lg:text-2xl flex-grow">
            Martin Tomov is a dedicated developer and designer hailing from Sofia, Bulgaria, but currently residing in Eindhoven, Netherlands. As a student at Fontys UAS Eindhoven, he possesses a profound passion for crafting software solutions that improve people's lives and address pertinent issues. Motivated by the challenges posed by gentrification and excessive construction in his hometown, Martin aspires to leverage his skills to drive positive change in the community.
            <br></br><br></br> Martin actively engages with open-source projects, constantly exploring various opportunities to carve out his path within the vast landscape of the tech industry.
          </p>
        </div>
        <br></br>
        <br></br>
      </div>
      <Banner />
    </div>
  );
};

export default AboutUs;