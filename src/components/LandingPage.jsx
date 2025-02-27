import { useState, useRef, useEffect } from 'react';
import LaptopImg from '../assets/laptop.png';
import ScreenImg from '../assets/screen.png';
import FiBudgLogo from '../assets/logo.png';
import MobileScreen from '../assets/mobilescreen.png';
import Frame16 from '../assets/frame16.png';
import Frame17 from '../assets/frame17.png';
import AppleComputers from '../assets/Apple_Computers.png';
import ThirdMerge from '../assets/3rdmerge.png';
import PropTypes from 'prop-types';

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

const companyLogos = [
  {
    id: 1,
    name: "Microsoft",
    icon: <svg className="w-8 h-8" viewBox="0 0 23 23" fill="currentColor">
      <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z"/>
    </svg>
  },
  {
    id: 2,
    name: "Amazon",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.357 17.357 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.09.062.232.076.39.01.165.02.405.02.72v6.57c0 .3.03.554.09.78.06.224.148.39.27.494.122.105.27.21.435.315.15.09.225.21.225.37 0 .106-.03.196-.09.27-.297.39-.72.765-1.272 1.095-.558.33-1.117.495-1.68.495-.504 0-.955-.12-1.353-.344-.39-.226-.69-.524-.9-.9-.21.346-.54.645-.985.89-.443.25-.95.37-1.515.37-.92 0-1.653-.225-2.198-.675-.542-.456-.814-1.065-.814-1.83l-.007-.004zm3.584-.04c0 .436.14.796.423 1.07.285.27.646.404 1.085.404.435 0 .83-.13 1.19-.393.363-.262.543-.614.543-1.058v-2.422c-.45.034-.902.1-1.356.194-.687.146-1.19.354-1.514.63-.324.274-.483.656-.483 1.146l.116.43zm8.878-.63c.593 0 1.147.086 1.662.255.514.17.956.4 1.326.69l.01.007v-6.337c0-.09.007-.15.07-.18l2.664-.78c.284-.09.49-.046.49.195v12.245c0 .165-.03.27-.1.315-.074.045-.194.075-.365.09-.17.016-.42.03-.75.046-.33.015-.553.03-.654.045-.1.016-.194.03-.27.046-.077.015-.15.06-.21.135-.063.075-.12.135-.166.18-.047.045-.15.12-.315.21-.163.09-.3.165-.435.225-.135.06-.3.12-.494.18-.196.06-.42.12-.645.18-.226.06-.48.105-.75.135-.273.03-.57.045-.886.045-1.425 0-2.67-.405-3.87-1.215-1.186-.81-1.785-1.845-1.785-3.12 0-1.29.6-2.34 1.8-3.15 1.17-.81 2.4-1.215 3.66-1.215l.371.371zm-.296 1.725c-.705 0-1.305.225-1.785.675-.484.45-.727 1.02-.727 1.71 0 .69.237 1.26.712 1.71.474.45 1.08.675 1.8.675.706 0 1.305-.225 1.785-.675.484-.45.726-1.02.726-1.71 0-.69-.236-1.26-.71-1.71-.475-.45-1.08-.675-1.801-.675z"/>
    </svg>
  },
  {
    id: 3,
    name: "Google",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  },
  {
    id: 4,
    name: "Apple",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  },
  {
    id: 5,
    name: "Meta",
    icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  }
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Add refs for each section
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const rewardsRef = useRef(null);
  const featuresRef = useRef(null);

  // Smooth scroll function
  const scrollToSection = (elementRef) => {
    setIsMenuOpen(false); // Close mobile menu when clicking
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#102741] min-h-screen">
      {/* Fixed Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          isScrolled 
            ? 'mt-6' 
            : 'mt-0'
        }`}
      >
        <div 
          className={`mx-auto transition-all duration-700 ease-in-out ${
            isScrolled 
              ? 'w-[85%] md:w-[80%] lg:w-[75%] bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-2xl px-6'
              : 'w-[90%] bg-[#102741]'
          }`}
        >
          <div className={`w-full mx-auto py-4 transition-all duration-700 ${
            isScrolled ? 'max-w-7xl' : ''
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo and Brand */}
              <div className="flex items-center group cursor-pointer">
                <img 
                  src={FiBudgLogo} 
                  alt="FiBudg Logo" 
                  className={`transition-all duration-500 transform group-hover:scale-105 ${
                    isScrolled 
                      ? 'h-6 sm:h-6 lg:h-7' 
                      : 'h-7 sm:h-8 lg:h-9'
                  } mr-2`}
                />
                <span className={`text-white font-bold transition-all duration-500 group-hover:text-[#A0B7CC] ${
                  isScrolled 
                    ? 'text-lg sm:text-xl lg:text-2xl' 
                    : 'text-xl sm:text-2xl lg:text-3xl'
                }`}>
                  FiBudg
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
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
                      ${isScrolled ? 'text-sm lg:text-base' : 'text-base lg:text-lg'}
                      group hover:text-[#A0B7CC]`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0B7CC] transition-all duration-300 
                      group-hover:w-full"></span>
                  </button>
                ))}
              </div>

              {/* Download Button */}
              <button 
                className={`hidden md:block transition-all duration-500 
                  ${isScrolled 
                    ? 'px-5 lg:px-6 py-1.5 text-sm' 
                    : 'px-6 lg:px-7 py-2 text-base'
                  }
                  bg-[#A0B7CC] text-white font-medium 
                  rounded-full hover:shadow-lg hover:scale-105 
                  active:scale-95 transform`}
              >
                DOWNLOAD APP
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Update with animation */}
      <button 
        className="md:hidden text-white z-50 p-2 rounded-lg transition-all duration-300
          hover:bg-white/10 active:bg-white/20"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg 
          className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 6h16M4 12h16m-16 6h16" 
          />
        </svg>
      </button>

      {/* Mobile Menu Overlay - Update with better animation */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#102741]/95 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="flex flex-col items-center justify-center h-full space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { name: 'ABOUT', ref: aboutRef },
              { name: 'PORTFOLIO', ref: portfolioRef },
              { name: 'REWARDS', ref: rewardsRef },
              { name: 'FEATURES', ref: featuresRef }
            ].map((item, index) => (
              <button 
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="text-white text-xl font-medium hover:text-[#A0B7CC] 
                  transition-all duration-300 transform hover:scale-105
                  relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A0B7CC] 
                  transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button 
              className="mt-4 bg-gradient-to-r from-[#A0B7CC] to-[#1E3851] 
                text-white px-8 py-3 rounded-full font-medium
                transform transition-all duration-300
                hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              DOWNLOAD APP
            </button>
          </div>
        </div>
      )}

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <div ref={aboutRef} className="w-[90%] md:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between py-8 lg:py-16 gap-8 lg:gap-12">
            {/* Left Column - Text */}
            <div className="w-full lg:w-[50%] text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white mb-4 lg:mb-6">
                About Us
              </h1>
              <div className="space-y-4 lg:space-y-5">
                <p className="text-white text-base lg:text-[15px] leading-relaxed px-4 lg:px-0">
                  At FiBudg, financial freedom begins with simplicity. We empower individuals and families with user-friendly tools for effortless budgeting, saving, and planning. Combining innovation with practicality, FiBudg offers an all-in-one platform featuring automated expense tracking, AI-powered insights, and customizable dashboards—tailored to your unique financial needs.
                </p>
                <p className="text-white text-base lg:text-[15px] leading-relaxed px-4 lg:px-0">
                  More than a budgeting tool, FiBudg is your personal financial partner. With gamification, expert-backed education, and collaborative features, we make managing money rewarding and accessible. Committed to security and transparency, FiBudg equips you to achieve your goals and build a smarter financial future—anytime, anywhere.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 lg:mt-8">
                <button className="bg-[#1E3851] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-opacity-90">
                  DOWNLOAD APP
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium hover:bg-white hover:bg-opacity-10">
                  VIEW PRICING
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="w-full lg:w-[50%] relative">
              <div className="h-full flex items-center">
                <div className="relative w-full">
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
          </div>
        </div>

        {/* Section 2: Company Logos & Build Crypto Portfolio */}
        <div ref={portfolioRef} className="w-[90%] md:w-[80%] mx-auto">
          {/* Company Logos Section */}
          <div className="w-full py-16">
            {/* Centered Heading */}
            <div className="text-center mb-12">
              <h2 className="text-1xl text-white font-semibold">
                FiBudg has been featured on
              </h2>
            </div>

            {/* Company Logos Row - Full Width */}
            <div className="w-full px-4 md:px-8">
              <div className="flex justify-between items-center max-w-[1920px] mx-auto">
                {companyLogos.map((company) => (
                  <div 
                    key={company.id}
                    className="flex justify-center items-center group transition-all duration-300 hover:scale-110"
                  >
                    <div className="text-white/80 group-hover:text-white mr-2">
                      {company.icon}
                    </div>
                    <div className="text-white/80 group-hover:text-white text-base md:text-2xl font-medium">
                      {company.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Build Crypto Portfolio */}
          <div className="py-8 md:py-16">
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

        {/* Section 3: First "Earn Daily Rewards" with Two Phones */}
        <div ref={rewardsRef} className="w-[90%] md:w-[80%] mx-auto py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            {/* Left Side - Images */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
              <div className="relative w-fit">
                <img 
                  src={Frame16} 
                  alt="Fi-Buddy AI Dark" 
                  className="w-[180px] sm:w-[220px] lg:w-[250px] h-auto z-10 transform hover:scale-105 transition-transform relative"
                />
                <img 
                  src={Frame17} 
                  alt="Fi-Buddy AI Light" 
                  className="w-[180px] sm:w-[220px] lg:w-[250px] h-auto transform hover:scale-105 transition-transform absolute top-0 -right-[60px] sm:-right-[80px] lg:-right-[100px]"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 px-4 lg:px-0">
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
        <div ref={featuresRef} className="w-[90%] md:w-[80%] mx-auto py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Earn daily rewards on your idle tokens
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6 px-4 lg:px-0">
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
        <div className="w-[90%] md:w-[80%] mx-auto py-12 md:py-20">
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Explore endless possibilities with FinanceFlow
              </h2>
              <p className="text-gray-300 text-base sm:text-lg mb-6">
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
        <div className="w-full bg-[#001B3D] py-16 md:py-24">
          <TestimonialsSlider />
        </div>

        {/* Get started today section */}
        <div className="w-full bg-[#001B3D] py-16 md:py-24">
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

        {/* Footer Section */}
        <footer className="w-full bg-[#102741] py-16">
          <div className="w-[90%] md:w-[80%] mx-auto">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-16">
              {/* Logo and Social Links */}
              <div className="mb-8 md:mb-0">
                <div className="flex items-center mb-6">
                  <img 
                    src={FiBudgLogo} 
                    alt="FiBudg Logo" 
                    className="h-8 mr-2"
                  />
                  <span className="text-white font-bold text-2xl">
                    FiBudg
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Menu */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
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
              </div>

              {/* Download Section */}
              <div className="mt-8 md:mt-0">
                <h3 className="text-white font-bold mb-4">DOWNLOAD OUR APPLICATION</h3>
                <p className="text-white/60 mb-4 max-w-[300px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nulla integer
                </p>
                <div className="flex space-x-4">
                  <button className="bg-[#1E3851] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    APP STORE
                  </button>
                  <button className="bg-[#1E3851] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                    PLAY STORE
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 text-sm">
                All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const TestimonialsSlider = () => {
  const [position, setPosition] = useState(0);
  const speed = 1.2;

  useEffect(() => {
    const animate = () => {
      setPosition((prevPos) => {
        const newPos = prevPos - speed;
        // Reset position when all cards have scrolled
        if (newPos < -(testimonials.length * 400)) {
          return 0;
        }
        return newPos;
      });
    };

    const animationFrame = requestAnimationFrame(function loop() {
      animate();
      requestAnimationFrame(loop);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <>
      {/* Header with Download Button */}
      <div className="w-[90%] md:w-[80%] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What our users say?
          </h2>
          <button className="bg-[#1E3851] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 hover:scale-105 transition-all duration-300">
            DOWNLOAD APP
          </button>
        </div>
      </div>

      {/* Full Width Testimonials Slider */}
      <div className="w-full overflow-hidden relative">
        <div 
          className="flex gap-8 transition-transform duration-1000 w-fit"
          style={{ 
            transform: `translateX(${position}px)`,
          }}
        >
          {/* Triple the testimonials for smoother infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="relative shrink-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[350px] bg-[#102741] rounded-2xl p-8 transition-all duration-700 hover:shadow-xl backdrop-blur-sm bg-opacity-80">
      <p className="text-white/80 text-lg mb-8 leading-relaxed min-h-[120px] line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{testimonial.author}</h4>
          <p className="text-white/60 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }).isRequired
};

export default LandingPage; 