import React, { useRef } from 'react';
import About from './components/about';
import Skills from './components/skills';
import Contact from './components/contact';


function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-full overflow-auto">
      <div className="w-full h-full bg-background flex flex-col px-20">
        <div className="w-full flex justify-between text-white py-8">
          <div className="font-bold text-2xl">
            Portfolio
          </div>
          <div className="flex flex-row text-white text-sm">
            <div className="mx-2 cursor-pointer" onClick={() => handleClick(aboutRef)}>
              Hakkımda
            </div>
            <div className="mx-2 cursor-pointer" onClick={() => handleClick(skillsRef)}>
              Beceriler
            </div>
            <div className="mx-2 cursor-pointer" onClick={() => handleClick(contactRef)}>
              İletişim
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center flex-col">
          <div className="text-white text-5xl font-bold">
            Ben, Emin Öztürk
          </div>
          <div className="text-yellow-500 text-2xl">
            Yazılım Mühendisi
          </div>
        </div>
      </div>

      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={contactRef}><Contact /></div>
      
    </div>
  );
}

export default App;
