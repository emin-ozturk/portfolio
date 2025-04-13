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
            Yazılım geliştiricisi olarak; web, mobil ve yapay zekâ odaklı projeler geliştiriyorum.
            React, Next.js Node.js ve Java ile kullanıcı odaklı uygulamalar üretirken, Python ile
            backend ve makine öğrenmesi alanında çalışmalar yapıyorum. Performans, kullanılabilirlik
            ve temiz kod önceliklerim arasında. Yazılım geliştirme yetkinliğimi her projede bir adımileri taşımaya odaklanıyorum.
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 mt-5 text-center bg-slate-200">
                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <FiCode className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Web Sitesi</span>
                    <span className="text-slate-500 text-s">10 Proje</span>
                </div>
                
                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <AiFillAndroid className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Android Uygulama</span>
                    <span className="text-slate-500 text-s">10 Proje</span>
                </div>

                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <BiAnalyse className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Makine Öğrenmesi</span>
                    <span className="text-slate-500 text-s">5 Proje</span>
                </div>

                <div className="h-fit flex flex-col justify-center items-center my-5">
                    <FaGooglePlay className="w-8 h-8 text-slate-500 mb-3"/>
                    <span className="font-bold text-slate-500 text-sm">Yayınlanmış Uygulama</span>
                    <span className="text-slate-500 text-s">4 Proje</span>
                </div>
            </div>
        </div>
    )
};

export default About;