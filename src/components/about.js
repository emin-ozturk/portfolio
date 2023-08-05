import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { FaGooglePlay } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import code from '../images/code.png';

const About = () => {
    return (
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 py-10 flex items-center flex-col">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Hakkımda</span>
            <div className="w-28 h-28">
                <img src={code} alt="" className="w-full h-full rounded-full border-4 border-white shadow-xl" />
            </div>
            <div className="text-slate-700 text-justify py-8 font-serif">
            Yazılım geliştirme alanında faaliyet gösteriyorum. Node.js, React.js ve MongoDB gibi teknolojileri 
            kullanarak özelleştirilmiş web tabanlı portallar oluşturuyorum. 
            Aynı zamanda Java ile Android platformunda mobil uygulama geliştirme konusunda deneyimim bulunuyor.

            Geliştirdiğim projelerde kullanıcıların ihtiyaçlarına yönelik çözümler sunarken performans, tasarım ve 
            kullanılabilirliğe özen gösteriyorum. Bununla birlikte, Python ile makine öğrenmesi üzerinde çalışıyorum. 
            Geliştirdiğim projeler. Python ve makine öğrenimi alanındaki çalışmalarım, 
            teknik becerilerimi geliştirmeme yardımcı oldu.

            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 mt-5 text-center bg-gray-200">
                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <FiCode className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Web Sitesi</span>
                    <span className="text-slate-500 text-s">8 Proje</span>
                </div>
                
                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <AiFillAndroid className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Android Uygulama</span>
                    <span className="text-slate-500 text-s">6 Proje</span>
                </div>

                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <BiAnalyse className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Makine Öğrenmesi</span>
                    <span className="text-slate-500 text-s">5 Proje</span>
                </div>

                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <FaGooglePlay className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Yayınlanmış Uygulama</span>
                    <span className="text-slate-500 text-s">3 Proje</span>
                </div>
            </div>
        </div>
    )
};

export default About;