import React, { useState, useEffect } from 'react';
import { Link, Element, scroller } from 'react-scroll';
import './style.css';
import pink from '../assets/pink.png';
import about from '../assets/about.png';
import tour1 from '../assets/tour1.png';
import tour2 from '../assets/tour2.png';
import tour3 from '../assets/tour3.png';
import tour4 from '../assets/tour4.png';
import tour5 from '../assets/tour5.png';
import tour6 from '../assets/tour6.png';
import tour7 from '../assets/tour7.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredTour, setHoveredTour] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(scrollPosition > 50);

    const hue = 30; // Hue for beige colors
    const lightnessStart = 95; // Light beige
    const lightnessEnd = 80; // Darker pearl beige
    const lightness = lightnessStart - (scrollPosition / maxScroll) * (lightnessStart - lightnessEnd); 
    const saturation = 20; // Low saturation for a more muted look

    document.body.style.backgroundImage = `linear-gradient(to bottom, hsl(${hue}, ${saturation}%, ${lightness - 5}%), hsl(${hue}, ${saturation}%, ${lightness + 5}%))`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const scrollToTour = (index) => {
  //   scroller.scrollTo(`tour${index}`, {
  //     duration: 800,
  //     delay: 0,
  //     smooth: 'easeInOutQuart'
  //   });
  // };

  return (
    <div className='w-full h-full'>
      <div className={`w-full h-[50px] border border-black shadow m-auto flex items-center top-0 left-0 bg-white ${scrolled ? 'scrolled' : ''}`}>
        <div className='flex items-center ml-auto mr-20'>
          <ul className='flex gap-10'>
            <li><Link to="home" smooth={true} duration={800} className="text-black hover:text-yellow-700 font-bold cursor-pointer">Home</Link></li>
            <li><Link to="about" smooth={true} duration={800} className="text-black hover:text-yellow-700 font-bold cursor-pointer">About</Link></li>
            <li><Link to="tour" smooth={true} duration={800} className="text-black hover:text-yellow-700 font-bold cursor-pointer">Tour</Link></li>
            <li><Link to="contact" smooth={true} duration={800} className="text-black hover:text-yellow-700 font-bold cursor-pointer">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div
        className='w-full h-[630px] bg-cover bg-center flex justify-between items-center'
        style={{
          backgroundImage: 'url(https://i.pinimg.com/736x/1b/48/ca/1b48ca7d67f4ae6270c0a6fd6b384689.jpg)',
          opacity: '0.9',
        }}
      >
        <div className='flex flex-col items-center justify-center w-full h-full text-center'>
          <h1 className='text-white text-6xl font-bold font-sans drop-shadow-lg mb-4'>EXPLORE BALI</h1>
          <p className="text-white italic">“The beach is a place of healing and joy. The salt cleanses us, the sun embraces us, and the ocean heals us.”</p>
        </div>
      </div>

      <div className='w-full h-[600px]' >
        <Element id="home" name="home" className='w-8/12 h-5/6 flex flex-row    border shadow shadow-black p-2 ml-20 mt-10 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-5'>
          <div className='flex flex-col items-center justify-center w-full h-full text-center'>
            <img src={pink} className='w-full h-5/6' alt='Discover the Magic of Bali' />
          </div>
          <div className='flex flex-col items-center justify-center w-full h-full text-center ml-5 mr-5' style={{ overflowY: 'auto' }}>
            <h1 className='font-bold mb-10 text-2xl'>Discover the Magic of Bali</h1>
            <p className="text-black italic">
              Welcome to your ultimate Bali adventure! Whether you dream of pristine beaches, lush rice terraces, or ancient temples, Bali has it all. Our curated tours highlight the island's best, from thrilling adventures to serene retreats. Discover hidden gems and must-see spots with us.
            </p>
            <p className="text-black italic mt-4">
              Don't just take our word for it—see what our happy travelers say. Follow us on social media for the latest updates and stunning Bali snapshots. Ready to start your Bali journey? Click below to explore and book your dream getaway today!
            </p>
          </div>
        </Element>
      </div>

      <div id="about" className='w-full h-[600px]'>
        <Element name="about" className='w-8/12 h-5/6 border flex flex-row shadow shadow-black p-2 ml-auto mr-20 transition-transform duration-300 hover:shadow-2xl hover:-translate-y-5'>
          <div className='flex flex-col items-center justify-center w-full h-full text-center ml-5 mr-5' style={{ overflowY: 'auto' }}>
            <h1 className='font-bold mb-10 text-2xl'>ABOUT US</h1>
            <p className="text-black italic">
              We aim to help travelers discover Bali’s hidden gems and must-see spots. Experience Bali’s unique culture, stunning landscapes, thrilling adventures, and relaxing retreats. Our passionate team of Bali experts is dedicated to making your trip unforgettable. Committed to eco-friendly practices and supporting local communities, we ensure responsible travel. Reach out via email, phone, or visit us, and follow us on social media for updates. Hear from our happy travelers about their amazing Bali experiences.
            </p>
          </div>
          <div className='flex flex-col items-center justify-center w-full h-full text-center'>
            <img src={about} className='w-full h-5/6' alt='About Us' />
          </div>
        </Element>
      </div>

      <div id="tour" className='w-full h-[600px] text-center justify-center items-center flex flex-col mt-[10%] gap-0'>

         <Element name="tour"> <h1 className='text-4xl font-bold font-Italic'>Tour</h1>
         <p className='text-black italic mt-5'>“BALI is nature’s gift to us, a place where we can find solace, peace, and endless beauty.”</p></Element> 
          <div className='w-11/12 h-3/6 flex flex-row m-auto mt-[5%] gap-2'>
            {[tour1, tour4, tour5, tour3].map((tour, index) => (
              <div
                key={index}
                className='flex flex-col items-center justify-center w-full h-full text-center shadow border rounded-lg hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 relative'
                onMouseEnter={() => setHoveredTour(index)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                <img src={tour} className='w-full h-full rounded-lg' alt={`Tour ${index + 1}`} />
                {hoveredTour === index && (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50 rounded-lg">
                    Explore Tour {index + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='w-9/12 h-3/6 flex flex-row gap-2 mt-[5%] mb-[10%]'>
            {[tour2, tour6, tour7].map((tour, index) => (
              <div
                key={index + 4}
                className='flex flex-col items-center justify-center w-full h-full text-center shadow border rounded-lg hover:shadow-lg transition-transform duration-300 hover:-translate-y-2 relative'
                onMouseEnter={() => setHoveredTour(index + 4)}
                onMouseLeave={() => setHoveredTour(null)}
              >
                <img src={tour} className='w-full h-full rounded-lg' alt={`Tour ${index + 5}`} />
                {hoveredTour === index + 4 && (
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-50 rounded-lg">
                    Explore Tour {index + 5}
                  </div>
                )}
              </div>
            ))}
          </div>
      </div>

      <div className='w-full flex flex-col h-[300px] mt-20'>
        <Element id="contact" name="contact">
        <div className='w-full h-[250px] bg-cover bg-[#212B4F] flex flex-col justify-center items-center'>
  <h1 className='text-white font-bold mt-5 text-3xl'>GET IN TOUCH</h1>
  <hr className="w-1/4 mt-2 mb-4 border-yellow-500 border-2" />
  <div className='w-10/12 h-4/6 bg-transparent mr-20 flex flex-row mx-auto rounded-lg'>
    <div className='w-4/12 h-full flex flex-col justify-center items-start p-8'>
      <h2 className='text-lg font-bold mb-2 text-yellow-500'>Address</h2>
      <p className='text-sm text-white'>123 Main Street, Anytown, USA</p>
    </div>
    <div className='w-4/12 h-full flex flex-col justify-center items-start p-8'>
      <h2 className='text-lg font-bold mb-2 text-yellow-500'>Email</h2>
      <p className='text-sm text-white'>john.doe@example.com</p>
      <p className='text-sm text-white'>jane.smith@example.com</p>
    </div>
    <div className='w-4/12 h-full flex flex-col justify-center items-start p-8'>
      <h2 className='text-lg font-bold mb-2 text-yellow-500'>Contact</h2>
      <p className='text-sm text-white'>+1 (555) 123-4567</p>
      <p className='text-sm text-white'>+44 7890 123456</p>
    </div>
  </div>
</div>
          <div className='w-full h-[100px] bg-[#09143C] flex items-center justify-center gap-8'>
            <button className='text-black bg-green-600 ease-in-out py-2 px-4 rounded-full hover:bg-green-300 transition-colors duration-450'>WhatsApp</button>
            <button className='text-white bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 
                      hover:from-red-500 hover:via-purple-500 hover:to-violet-500 
                      text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg 
                      transition duration-300 ease-in-out py-2 px-4 rounded-full hover:bg-yellow-400 transition-colors duration-300'>Instagram</button>
            <button className='text-white bg-blue-600  ease-in-out py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-300'>Telegram</button>
          </div>
        </Element>
      </div>
    </div>
  );
};

export default Navbar;
