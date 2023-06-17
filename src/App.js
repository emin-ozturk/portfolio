import React, { useRef } from 'react';
import About from './components/about';
import Certificates from './components/certificates';
import Contact from './components/contact';
import Education from './components/education';
import Skills from './components/skills';
import { FaGithub, FaGooglePlay, FaLinkedin } from 'react-icons/fa';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full h-full bg-futuristic bg-cover bg-center flex flex-col px-8 sm:px-20">
        <div className="w-full flex justify-between text-white py-8 items-center flex-col md:flex-row">
          <div className="font-bold text-2xl mb-2 md:mb-0">
            Portfolio
          </div>
          <div className="flex flex-row text-white text-sm">
            <div className="mr-2 cursor-pointer hover:text-yellow-500" onClick={() => handleClick(aboutRef)}>
              Hakkımda
            </div>
            <div className="mx-2 cursor-pointer hover:text-yellow-500" onClick={() => handleClick(educationRef)}>
              Eğitim
            </div>
            <div className="mx-2 cursor-pointer hover:text-yellow-500" onClick={() => handleClick(skillsRef)}>
              Beceriler
            </div>
            <div className="mx-2 cursor-pointer hover:text-yellow-500" onClick={() => handleClick(certificatesRef)}>
              Sertifikalar
            </div>
            <div className="ml-2 cursor-pointer hover:text-yellow-500" onClick={() => handleClick(contactRef)}>
              İletişim
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <div className="text-white text-5xl font-bold">
            Ben, Emin Öztürk
          </div>
          <div className=" text-yellow-500 text-2xl">
            Yazılım Mühendisi
          </div>
          <div className='flex flex-row mt-3'>
            <a href='https://www.linkedin.com/in/emin-öztürk' target='_blank' rel="noreferrer">
              <FaLinkedin className='w-6 h-6 text-gray-500 hover:text-white mr-3' />
            </a>
            <a href='https://github.com/emin-ozturk' target='_blank' rel="noreferrer">
              <FaGithub className='w-6 h-6 text-gray-500 hover:text-white mr-3' />
            </a>
            <a href='https://play.google.com/store/apps/dev?id=6511245882117047076' target='_blank' rel="noreferrer">
              <FaGooglePlay className='w-6 h-6 text-gray-500 hover:text-white' />
            </a>
          </div>

        </div>
      </div>

      <div ref={aboutRef}><About /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={certificatesRef}><Certificates /></div>
      <div ref={contactRef}><Contact /></div>

    </div>
  );
}

export default App;
