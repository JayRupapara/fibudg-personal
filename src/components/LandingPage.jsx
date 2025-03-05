import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import LaptopImg from '../assets/Laptop.png';
import ScreenImg from '../assets/screen.png';
import FiBudgLogo from '../assets/logo.png';
import MobileScreen from '../assets/mobilescreen.png';
import Frame16 from '../assets/frame16.png';
import Frame17 from '../assets/frame17.png';
import AppleComputers from '../assets/Apple_Computers.png';
import ThirdMerge from '../assets/3rdmerge.png';
import PropTypes from 'prop-types';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in",
    author: "JOHN CARTER",
    company: "ROLL COMPANY",
    image: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    author: "SARAH WILLIAMS",
    company: "TECH SOLUTIONS",
    image: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    text: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor.",
    author: "MICHAEL BROWN",
    company: "DIGITAL INNOVATIONS",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    text: "Ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "EMMA WILSON",
    company: "CRYPTO EXPERTS",
    image: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    text: "Consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris. Velit officia consequat duis enim velit mollit.",
    author: "DAVID MILLER",
    company: "FINTECH SOLUTIONS",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 6,
    text: "Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.",
    author: "SOPHIA CHEN",
    company: "BLOCKCHAIN INC",
    image: "https://i.pravatar.cc/150?img=6"
  }
];

// Update the companyLogos array with simpler icons
const companyLogos = [
  {
    name: 'Microsoft',
    icon: <svg className="w-8 h-8" viewBox="0 0 23 23" fill="currentColor">
      <path d="M0 0h11v11H0zm12 0h11v11H12zM0 12h11v11H0zm12 0h11v11H12z"/>
    </svg>
  },
  {
    name: 'Amazon',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.24.105.465.135.645.03.18.045.54.045 1.065v4.035c0 .3.06.57.18.84.12.27.24.467.36.585.12.117.24.24.36.369.12.12.206.21.27.255.063.046.12.106.165.165.045.06.067.134.067.226 0 .07-.015.134-.045.194-.09.18-.25.3-.48.39-.23.08-.476.165-.764.225-1.275.26-2.215.39-2.825.39-.75 0-1.305-.225-1.665-.675-.135-.195-.27-.42-.405-.705-.676.795-1.32 1.32-1.92 1.605-.676.316-1.486.48-2.43.48-1.155 0-2.1-.375-2.835-1.125-.72-.75-1.08-1.71-1.08-2.88zm3.285-.225c0 .566.14 1.02.425 1.364.285.34.675.51 1.155.51.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.615-.16 1.1-.466 1.46-.915.195-.24.285-.436.285-.586v-2.205c-.83 0-1.49.091-1.98.285-.675.27-1.023.766-1.023 1.5v.09h.317zm7.125 5.274c.015-.06.045-.11.09-.15.047-.045.086-.064.135-.064.074 0 .124.02.164.066.045.045.09.09.135.135.3.285.69.436 1.17.436.39 0 .766-.106 1.126-.314.36-.21.615-.497.75-.855l.225-.811-2.385-8.46a11.65 11.65 0 00-.18-.585c-.074-.21-.134-.376-.165-.466-.03-.09-.09-.15-.18-.18-.092-.03-.15-.046-.181-.046-.06 0-.12.016-.165.045-.045.03-.08.076-.104.135-.007.014-.015.045-.015.09l-1.68 7.71c-.06.24-.165.36-.316.36-.15 0-.256-.12-.316-.36l-1.665-7.71c0-.045-.007-.076-.016-.09-.03-.06-.067-.105-.12-.135-.045-.03-.09-.045-.15-.045-.06 0-.12.016-.165.046-.045.03-.105.09-.165.18-.074.18-.135.36-.18.524-.046.165-.105.405-.18.705l-2.37 8.55c-.03.104-.05.18-.05.225 0 .09.045.15.135.195.09.046.18.07.271.07.135 0 .24-.06.3-.18l2.235-8.175c.03-.12.09-.18.18-.18.09 0 .15.06.18.18l1.68 7.71c.06.24.135.435.225.585.195.435.48.655.855.655.375 0 .66-.22.855-.655.09-.15.164-.345.225-.585l1.68-7.71c.03-.12.09-.18.18-.18.09 0 .15.06.18.18l2.205 8.175c.074.15.18.224.316.224z"/>
    </svg>
  },
  {
    name: 'Google',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
    </svg>
  },
  {
    name: 'Apple',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
    </svg>
  },
  {
    name: 'Meta',
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm-1.125 16.875L7.5 12l3.375-4.875L14.25 12l-3.375 4.875zm1.5-9.75L15.75 12l-3.375 4.875L9 12l3.375-4.875zM12 1.5c5.625 0 10.125 4.5 10.125 10.125S17.625 21.75 12 21.75 1.875 17.25 1.875 11.625 6.375 1.5 12 1.5z"/>
    </svg>
  }
];

// Add this utility function at the top
const useIsInViewport = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
};

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeout = useRef(null);
  
  // Add refs for each section
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const rewardsRef = useRef(null);
  const featuresRef = useRef(null);

  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) return;
    
    scrollTimeout.current = setTimeout(() => {
      setIsScrolled(window.scrollY > 50);
      scrollTimeout.current = null;
    }, 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [handleScroll]);

  // Smooth scroll function
  const scrollToSection = useCallback((elementRef) => {
    setIsMenuOpen(false);
    const yOffset = -80; // Adjust based on your navbar height
    const element = elementRef.current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  }, []);

  // Add mobile menu toggle function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#102741]">
      {/* Fixed Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled ? 'mt-6' : 'mt-0'
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'w-[90%] md:w-[80%] bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl px-4 lg:px-6'
              : 'w-[95%] md:w-[90%] bg-[#102741]/80 backdrop-blur-sm'
          }`}
        >
          <div className="w-full mx-auto py-3 md:py-4">
            <div className="flex items-center justify-between">
              {/* Logo and Brand */}
              <div className="flex items-center group cursor-pointer">
                <img 
                  src={FiBudgLogo} 
                  alt="FiBudg Logo" 
                  loading="lazy"
                  width="32"
                  height="32"
                  className={`transition-all duration-500 transform group-hover:scale-105 ${
                    isScrolled 
                      ? 'h-5 sm:h-6 lg:h-7 xl:h-8' 
                      : 'h-6 sm:h-7 lg:h-8 xl:h-9'
                  } mr-2`}
                />
                <span className={`text-white font-bold transition-all duration-500 group-hover:text-[#A0B7CC] ${
                  isScrolled 
                    ? 'text-sm sm:text-base lg:text-lg xl:text-xl' 
                    : 'text-base sm:text-lg lg:text-xl xl:text-2xl'
                }`}>
                  FiBudg
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
                {[
                  { name: 'ABOUT', ref: aboutRef },
                  { name: 'PORTFOLIO', ref: portfolioRef },
                  { name: 'REWARDS', ref: rewardsRef },
                  { name: 'FEATURES', ref: featuresRef }
                ].map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => scrollToSection(item.ref)} 
                    className={`relative text-white transition-all duration-300 
                      ${isScrolled 
                        ? 'text-xs lg:text-sm xl:text-base' 
                        : 'text-sm lg:text-base xl:text-lg'
                      }
                      group hover:text-[#A0B7CC]`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0B7CC] transition-all duration-300 
                      group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Download Button - Desktop */}
              <button 
                className={`hidden md:block transition-all duration-500 
                  ${isScrolled 
                    ? 'px-4 lg:px-5 py-1 text-xs lg:text-sm' 
                    : 'px-5 lg:px-6 py-2 text-sm lg:text-base'
                  }
                  bg-[#A0B7CC] text-white font-medium 
                  rounded-full hover:shadow-lg hover:scale-105 
                  active:scale-95 transform`}
              >
                DOWNLOAD APP
              </button>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#102741]/80 backdrop-blur-md z-50 md:hidden">
            <div className="flex flex-col items-center justify-center min-h-screen px-6">
              <div className="absolute top-4 right-4">
                <button 
                  onClick={toggleMenu}
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              
              <div className="flex flex-col items-center space-y-8">
                {[
                  { name: 'ABOUT', ref: aboutRef },
                  { name: 'PORTFOLIO', ref: portfolioRef },
                  { name: 'REWARDS', ref: rewardsRef },
                  { name: 'FEATURES', ref: featuresRef }
                ].map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.ref);
                      setIsMenuOpen(false);
                    }}
                    className="text-white text-xl font-medium hover:text-[#A0B7CC] transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  className="mt-8 bg-[#A0B7CC] text-white px-8 py-2.5 rounded-full text-lg font-medium
                    hover:bg-opacity-90 active:scale-95 transform transition-all"
                >
                  DOWNLOAD APP
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <div ref={aboutRef} className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between py-8 sm:py-12 lg:py-16 gap-8 lg:gap-12">
            {/* Left Column - Text */}
            <div className="w-full lg:w-[50%] text-center lg:text-left space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white">
                About Us
              </h1>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                At FiBudg, financial freedom begins with simplicity. We empower individuals and families with user-friendly tools for effortless budgeting, saving, and planning.
              </p>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                Combining innovation with practicality, FiBudg offers an all-in-one platform featuring automated expense tracking, AI-powered insights, and customizable dashboards—tailored to your unique financial needs.
              </p>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                More than a budgeting tool, FiBudg is your personal financial partner. With gamification, expert-backed education, and collaborative features, we make managing money rewarding and accessible. Committed to security and transparency, FiBudg equips you to achieve your goals and build a smarter financial future—anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-8">
                <button className="w-full sm:w-auto bg-[#A0B7CC] text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-opacity-90 transition-all">
                  DOWNLOAD APP
                </button>
                <button className="w-full sm:w-auto bg-transparent border-2 border-[#A0B7CC] text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-white/5 transition-all">
                  VIEW PRICING
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-[50%] relative">
              <div className="relative w-full max-w-[500px] mx-auto">
                <img 
                  src={LaptopImg} 
                  alt="Laptop" 
                  loading="lazy"
                  width="600"
                  height="400"
                  className="w-full h-auto"
                />
                <img 
                  src={ScreenImg} 
                  alt="Screen Content"
                  loading="lazy"
                  width="520"
                  height="348"
                  className="absolute top-[2%] left-[14%] w-[87%] h-[87%] object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Logos Section */}
        <div className="w-full bg-[#102741] py-16 sm:py-20">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <h2 className="text-center text-lg sm:text-xl lg:text-2xl text-white/90 font-semibold mb-12">
              FiBudg has been featured on
            </h2>
            <div className="flex justify-between items-center w-full">
              {companyLogos.map((company, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 group transition-all duration-300 hover:scale-105"
                >
                  <div className="text-white/80 group-hover:text-white">
                    {company.icon}
                  </div>
                  <span className="text-white/80 group-hover:text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-medium whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3: First "Earn Daily Rewards" with Two Phones */}
        <div ref={rewardsRef} className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            {/* Left Side - Images */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-fit mx-auto lg:mx-0">
                <img 
                  src={Frame16}
                  alt="Fi-Buddy AI Dark"
                  className="w-[160px] sm:w-[200px] lg:w-[240px] xl:w-[280px] h-auto z-10 transform hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <img 
                  src={Frame17}
                  alt="Fi-Buddy AI Light"
                  className="w-[160px] sm:w-[200px] lg:w-[240px] xl:w-[280px] h-auto absolute 
                    top-0 -right-[50px] sm:-right-[60px] lg:-right-[80px] xl:-right-[100px]
                    transform hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white mb-4 sm:mb-6">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
              <div className="space-y-4 max-w-[400px] mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">Lowest fees in market</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white">Fast and secure transactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <span className="text-white">256-bit secure encryption</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Second "Earn Daily Rewards" with Laptop */}
        <div ref={featuresRef} className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white mb-4 sm:mb-6">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
              <div className="space-y-4 max-w-[400px] mx-auto lg:mx-0">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">100% Private data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">100% Uptime guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#1E3851] p-2 rounded-full">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">24/7 Dedicated support</span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <img 
                src={AppleComputers} 
                alt="Apple Computer" 
                className="w-full max-w-[500px] lg:max-w-[600px] mx-auto h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Section 5: Explore Endless Possibilities */}
        <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto py-16 sm:py-20 lg:py-24">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                Explore endless possibilities with FinanceFlow
              </h2>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
              </p>
              <button className="bg-[#1E3851] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-opacity-90">
                DOWNLOAD APP
              </button>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={ThirdMerge} 
                alt="Finance Flow Mobile Screens" 
                className="w-full max-w-[500px] mx-auto h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-[#001B3D]">
          <div className="py-16 sm:py-20 lg:py-24">
            <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 sm:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-white text-center sm:text-left">
                  What our users say?
                </h2>
                <button className="bg-[#A0B7CC] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
                  text-sm sm:text-base font-medium hover:bg-opacity-90 transition-all">
                  DOWNLOAD APP
                </button>
              </div>
            </div>

            {/* Testimonials Marquee */}
            <div className="w-full overflow-hidden">
              <div className="flex animate-marquee gap-4 sm:gap-6 lg:gap-8">
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="relative shrink-0"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Get started today section */}
          <div className="w-full py-16 md:py-24">
            <div className="w-[90%] md:w-[80%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:w-[40%] text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Get started today
                </h2>
                <p className="text-white/80 text-base lg:text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.
                </p>
                
                {/* Steps */}
                <div className="space-y-6">
                  {/* Download App Step */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#1E3851] flex items-center justify-center group-hover:bg-[#2a4e70] transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                      </svg>
                    </div>
                    <span className="text-white text-lg font-medium">Download app</span>
                  </div>

                  {/* Create Account Step */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#1E3851] flex items-center justify-center group-hover:bg-[#2a4e70] transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                    <span className="text-white text-lg font-medium">Create a free account</span>
                  </div>

                  {/* Start Trading Step */}
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#1E3851] flex items-center justify-center group-hover:bg-[#2a4e70] transition-all duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                      </svg>
                    </div>
                    <span className="text-white text-lg font-medium">Start trading</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Video Player */}
              <div className="w-full lg:w-[60%]">
                <div className="relative aspect-video bg-[#102741] rounded-2xl overflow-hidden shadow-xl">
                  {/* Video Thumbnail/Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#102741]/50 to-[#102741]">
                    {/* Play Button */}
                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full 
                      flex items-center justify-center
                      hover:bg-white/20 transition-all duration-300
                      backdrop-blur-sm">
                      <svg 
                        className="w-8 h-8 md:w-10 md:h-10 text-white" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full bg-[#102741]/30 backdrop-blur-sm py-12 sm:py-16 lg:py-20">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto">
            {/* Top Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
              {/* Logo and Social Links */}
              <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-6">
                  <img 
                    src={FiBudgLogo} 
                    alt="FiBudg Logo" 
                    loading="lazy"
                    width="32"
                    height="32"
                    className={`transition-all duration-500 transform group-hover:scale-105 ${
                      isScrolled 
                        ? 'h-6 sm:h-6 lg:h-7' 
                        : 'h-7 sm:h-8 lg:h-9'
                    } mr-2`}
                  />
                  <span className="text-white font-bold text-2xl">
                    FiBudg
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <FaLinkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <FaFacebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <FaInstagram className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Menu */}
              <div>
                <h3 className="text-white font-bold mb-4">MENU</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">HOME</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">ABOUT</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">PRICING</a></li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h3 className="text-white font-bold mb-4">CONTACT US</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">HOME</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">ABOUT</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">PRICING</a></li>
                </ul>
              </div>

              {/* Download Section */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="text-white font-bold text-lg mb-4">DOWNLOAD OUR APPLICATION</h3>
                <p className="text-white/60 mb-4 max-w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer
                </p>
                <div className="flex space-x-4">
                  <button className="bg-[#A0B7CC] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 
                    text-sm sm:text-base transition-all flex items-center justify-center gap-2">
                    <span>APP STORE</span>
                  </button>
                  <button className="bg-[#A0B7CC] text-white px-6 py-3 rounded-xl hover:bg-opacity-90 
                    text-sm sm:text-base transition-all flex items-center justify-center gap-2">
                    <span>PLAY STORE</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm text-center">
                © 2024 FiBudg. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const TestimonialCard = React.memo(({ testimonial }) => {
  return (
    <div className="w-[350px] bg-[#102741] rounded-2xl p-8 transition-all duration-700 hover:shadow-xl backdrop-blur-sm bg-opacity-80">
      <p className="text-white/80 text-lg mb-8 leading-relaxed min-h-[120px] line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.author}
          loading="lazy"
          width="48"
          height="48"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.author}</h4>
          <p className="text-white/60 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.testimonial.id === nextProps.testimonial.id;
});

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }).isRequired
};

TestimonialCard.displayName = 'TestimonialCard';

export default LandingPage; 