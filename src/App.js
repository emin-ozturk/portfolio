import React, { useRef } from 'react';
import About from './components/about';
import Certificates from './components/certificates';
import Contact from './components/contact';
import Education from './components/education';
import Projects from './components/projects';
import Skills from './components/skills';
import { FaGithub, FaGooglePlay, FaKaggle, FaLinkedin } from 'react-icons/fa';
import CV from './CV.pdf';

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full h-full bg-nebula bg-cover bg-center flex flex-col px-8 sm:px-20">
        <div className="w-full flex justify-between text-white py-8 items-center flex-col lg:flex-row">
          <div className="font-bold text-2xl mb-2 xl:mb-0">
            Portfolio
          </div>

          <div className="flex flex-row text-white text-sm">
            <div className="mr-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(aboutRef)}>
              Hakkımda
            </div>
            <div className="mx-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(educationRef)}>
              Eğitim
            </div>
            <div className="mx-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(skillsRef)}>
              Beceriler
            </div>
            <div className="mx-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(certificatesRef)}>
              Sertifikalar
            </div>
            <div className="mx-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(projectsRef)}>
              Projeler
            </div>
            <div className="ml-2 cursor-pointer hover:border-b border-blue-600" onClick={() => handleClick(contactRef)}>
              İletişim
            </div>
          </div>
          <a href={CV} download="Özgeçmiş" target="_blank" rel="noreferrer">
            <div className='hover:bg-gradient-to-r from-cyan-400 to-blue-600 py-2 px-3 rounded-lg text-sm cursor-pointer'>
                Özgeçmiş
            </div>
            </a>
        </div>

        <div className="flex-1 flex justify-center items-center flex-col">
          <div className="text-white text-5xl font-bold">
            Emin Öztürk
          </div>
          <div className="text-white text-xl mt-3">
            Yazılım Mühendisi
          </div>
          <div className='flex flex-row mt-5 gap-5'>
            <a href='https://www.linkedin.com/in/emin-öztürk' target='_blank' rel="noreferrer">
              <FaLinkedin className='w-6 h-6 text-gray-500 hover:text-white' />
            </a>
            <a href='https://github.com/emin-ozturk' target='_blank' rel="noreferrer">
              <FaGithub className='w-6 h-6 text-gray-500 hover:text-white' />
            </a>
            <a href='https://play.google.com/store/apps/dev?id=6511245882117047076' target='_blank' rel="noreferrer">
              <FaGooglePlay className='w-6 h-6 text-gray-500 hover:text-white' />
            </a>
            <a href='https://www.kaggle.com/eminztrk' target='_blank' rel="noreferrer">
              <FaKaggle className='w-6 h-6 text-gray-500 hover:text-white' />
            </a>
          </div>

        </div>
      </div>

      <div ref={aboutRef}><About /></div>
      <div ref={educationRef}><Education /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={certificatesRef}><Certificates /></div>
      <div ref={projectsRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>

    </div>
  );
}

export default App;
