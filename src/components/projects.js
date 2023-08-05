import React from "react";
import ceptefilm from '../images/ceptefilm.png';
import greenball from '../images/greenball.png';
import vision from '../images/vision.png';
import chat from '../images/chat.png';
import survey from '../images/survey.png';
import hardroad from '../images/hardroad.png';
import wordquiz from '../images/wordquiz.png';
import telegrambot from '../images/telegrambot.jpg';
import code from '../images/code.png';
import { BsPlusCircle } from 'react-icons/bs';

const Projects = () => {
    const projects = [
        {
            name: 'Cepte Film',
            logo: ceptefilm,
            type: 'Mobil Uygulama',
            languages: 'Android, Java',
            github: 'https://github.com/emin-ozturk/CepteFilm',
            googlePlay: 'https://play.google.com/store/apps/details?id=com.emin.filmler'
        },
        {
            name: 'Green Ball',
            logo: greenball,
            type: 'Mobil Oyun',
            languages: 'Android, Java',
            github: 'https://github.com/emin-ozturk/GreenBall',
            googlePlay: 'https://play.google.com/store/apps/details?id=com.emin.greenball'
        },
        {
            name: 'Vision',
            logo: vision,
            type: 'Mobil Uygulama',
            languages: 'Android, Java, Yolo, Görüntü işleme',
            github: 'https://github.com/emin-ozturk/Vision',
            googlePlay: 'https://play.google.com/store/apps/details?id=com.emin.vision'
        },
        {
            name: 'Chat',
            logo: chat,
            type: 'Mesajlaşma Uygulaması',
            languages: 'Node.js, Javascript, MongoDB, Socket.io',
            github: 'https://github.com/emin-ozturk/Chat',
            googlePlay: ''
        },
        {
            name: 'Survey',
            logo: survey,
            type: 'Anket Uygulaması',
            languages: 'Node.js, Javascript, MongoDB, Socket.io',
            github: 'https://github.com/emin-ozturk/Survey',
            googlePlay: ''
        },
        {
            name: 'Telegram Bot',
            logo: telegrambot,
            type: 'Telegram Botu',
            languages: 'Node.js, Javascript',
            github: 'https://github.com/emin-ozturk/TelegramBot',
            googlePlay: ''
        },
        {
            name: 'Node.js Machine Learning',
            logo: code,
            type: 'Sınıflandırma ve Regresyon Uygulaması',
            languages: 'Node.js, Javascript',
            github: 'https://github.com/emin-ozturk/nodejs-machine-learning',
            googlePlay: ''
        },
        {
            name: 'Jaundice Detection',
            logo: code,
            type: 'Sarılık Rahatsızlığı Tespiti',
            languages: 'Python, Javascript, Java, Android, Tensorflow',
            github: 'https://github.com/emin-ozturk/JaundiceDetection',
            googlePlay: ''
        },
        {
            name: 'Word Quiz',
            logo: wordquiz,
            type: 'Mobil Oyun',
            languages: 'Android, Java',
            github: 'https://github.com/emin-ozturk/WordQuiz',
            googlePlay: ''
        },
        {
            name: 'Hard Road',
            logo: hardroad,
            type: 'Mobil Oyun',
            languages: 'Android, Java',
            github: 'https://github.com/emin-ozturk/HardRoad',
            googlePlay: ''
        },
        {
            name: 'Kontrol Sistemi',
            logo: code,
            type: 'Kimya firması için geliştirdiğim web otomasyonu',
            languages: 'Node.js, Javascript, MongoDB',
            github: '',
            googlePlay: ''
        },
        {
            name: 'Skyved',
            logo: code,
            type: 'Gıda firması için geliştirdiğim web ve mobil uygulama',
            languages: 'Node.js, Javascript, MongoDB, Java',
            github: '',
            googlePlay: ''
        },
        {
            name: 'Öğrenci Otomasyonu',
            logo: code,
            type: 'Öğrenci Otomasyonu Sistemi',
            languages: 'C++, Veri Yapıları',
            github: 'https://github.com/emin-ozturk/OgrenciOtomasyonu',
            googlePlay: ''
        }
    ];

    return (
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 py-10">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Projeler</span>
            <div className="text-slate-500 text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
                {projects.map((project, index) => {
                    return (
                        <div key={index} className="w-hull h-44 relative rounded-md overflow-hidden cursor-pointer transition-all duration-700 card shadow-md">
                            <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:z-10 hover:opacity-0">
                                <div className="w-full h-full flex flex-col flex-1 justify-center items-center bg-white p-4 hover:bg-gray-200">
                                    <img src={project.logo} alt="" className="w-20 h-20 mb-1 rounded-xl shadow-md" />
                                    <span className="w-28 text-sm text-center mt-3">{project.name}</span>
                                </div>
                            </div>
                            <div className="absolute inset-0 w-full h-full flex items-center flex-col py-5 px-3 bg-white transition-all z-20 opacity-0 hover:opacity-100 card-back">
                                <h2 className="font-bold text-sm text-center">{project.type}</h2>
                                <p className="text-sm my-3 text-center">{project.languages}</p>
                                
                                <div>
                                    {project.github ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-slate-600 text-white text-sm py-2 px-3 m-0.5 rounded-full shadow-md">
                                                GitHub
                                            </button>
                                        </a>
                                        
                                    ) : ('')}
                                    {project.googlePlay ? (
                                        <a href={project.googlePlay} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-emerald-400 text-white text-sm py-2 px-3 m-0.5 rounded-full shadow-md">
                                                Google Play
                                            </button>
                                        </a>
                                    ) : ('')}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className="w-hull h-44 relative rounded-md overflow-hidden cursor-pointer transition-all duration-700 card shadow-md">
                    <div className="absolute inset-0 w-full h-full flex justify-center items-center transition-all duration-100 delay-200 z-20 hover:z-10 hover:opacity-0">
                        <div className="w-full h-full flex flex-col flex-1 justify-center items-center bg-white p-4 hover:bg-gray-200">
                            <BsPlusCircle className="w-8 h-8 text-slate-500 mb-3"/>
                            <span className="w-28 text-sm text-center mt-3">Daha Fazla</span>
                        </div>
                    </div>
                    <div className="absolute inset-0 w-full h-full flex items-center flex-col py-5 px-3 bg-white transition-all z-20 opacity-0 hover:opacity-100 card-back">
                        <h2 className="font-bold text-sm text-center">Geliştirdiğim diğer projeler</h2>
                        <div>
                            <a href='https://github.com/emin-ozturk?tab=repositories' target="_blank" rel="noopener noreferrer">
                                <button className="bg-slate-600 text-white text-sm py-2 px-3 m-0.5 mt-3 rounded-full shadow-md">
                                    GitHub
                                </button>
                            </a>
                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;