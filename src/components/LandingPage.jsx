import React, { useState } from 'react';
import LaptopImg from '../assets/laptop.png';
import ScreenImg from '../assets/screen.png';
import FiBudgLogo from '../assets/logo.png';
import MobileScreen from '../assets/mobilescreen.png';
import CompanyLogos from '../assets/CompanyLogo5.png';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#102741] min-h-screen">
      {/* Navigation */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <nav className="py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={FiBudgLogo} alt="FiBudg Logo" className="h-6 sm:h-8 mr-2" />
              <span className="text-white text-xl sm:text-2xl font-bold">FiBudg</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-gray-300">HOME</a>
              <a href="#" className="text-white hover:text-gray-300">ABOUT</a>
              <a href="#" className="text-white hover:text-gray-300">PRICING</a>
              <a href="#" className="text-white hover:text-gray-300">CONTACT US</a>
            </div>
            <button className="hidden md:block bg-[#A0B7CC] text-white px-6 py-2 rounded-full font-medium">
              DOWNLOAD APP
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-[#1E3851] rounded-lg p-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-white hover:text-gray-300">HOME</a>
                <a href="#" className="text-white hover:text-gray-300">ABOUT</a>
                <a href="#" className="text-white hover:text-gray-300">PRICING</a>
                <a href="#" className="text-white hover:text-gray-300">CONTACT US</a>
                <button className="bg-[#A0B7CC] text-white px-6 py-2 rounded-full font-medium w-full">
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between py-8 md:py-16">
          {/* Left Column - Text */}
          <div className="w-full md:w-[45%] text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              About Us
            </h1>
            <div className="space-y-4 md:space-y-6">
              <p className="text-white text-base sm:text-lg leading-relaxed px-4 md:px-0">
                At FiBudg, financial freedom begins with simplicity. We empower individuals and families with user-friendly tools for effortless budgeting, saving, and planning. Combining innovation with practicality, FiBudg offers an all-in-one platform featuring automated expense tracking, AI-powered insights, and customizable dashboards—tailored to your unique financial needs.
              </p>
              <p className="text-white text-base sm:text-lg leading-relaxed px-4 md:px-0">
                More than a budgeting tool, FiBudg is your personal financial partner. With gamification, expert-backed education, and collaborative features, we make managing money rewarding and accessible. Committed to security and transparency, FiBudg equips you to achieve your goals and build a smarter financial future—anytime, anywhere.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
              <button className="bg-[#1E3851] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-opacity-90">
                DOWNLOAD APP
              </button>
              <button className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10">
                VIEW PRICING
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-[45%] relative">
            <img 
              src={LaptopImg} 
              alt="Laptop" 
              className="w-full h-auto"
            />
            <img 
              src={ScreenImg} 
              alt="Screen Content"
              className="absolute top-[2%] left-[14%] w-[87%] h-[87%] object-contain rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Companies Section */}
      <div className="w-[90%] md:w-[80%] mx-auto text-center py-8 md:py-16">
        <img 
          src={CompanyLogos} 
          alt="Featured Companies" 
          className="w-full h-auto"
        />
      </div>

      {/* Build Your Crypto Portfolio Section */}
      <div className="w-[90%] md:w-[80%] mx-auto py-8 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Build your crypto portfolio
          </h2>
          <p className="text-gray-300 px-4 md:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br className="hidden sm:block" />
            Feugiat nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Features */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#001B3D] p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#1E3851] p-3 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold ml-4">SEND & RECEIVE</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </div>
            <div className="bg-[#001B3D] p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#1E3851] p-3 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold ml-4">100% SECURE WALLET</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </div>
          </div>

          {/* Center Mobile App Image */}
          <div className="flex justify-center items-center py-8 md:py-0">
            <img 
              src={MobileScreen} 
              alt="FiBudg Mobile App" 
              className="max-w-[80%] md:max-w-full h-auto"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#001B3D] p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#1E3851] p-3 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold ml-4">TRADING CHARTS</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </div>
            <div className="bg-[#001B3D] p-4 md:p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#1E3851] p-3 rounded-lg">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-semibold ml-4">REAL TIME TRADING</h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-16">
          <button className="bg-[#1E3851] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-opacity-90">
            DOWNLOAD APP
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 