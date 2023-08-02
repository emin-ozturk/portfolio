import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { FaGooglePlay } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
const About = () => {
    return (
        <div className="w-full h-full bg-bg3 px-10 md:px-24 py-10">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Hakkımda</span>
            <div className="text-slate-700 text-justify bg-white rounded-md shadow-l shadow-slate-500-black p-10">
                Node.js, React.js ve MongoDB kullanarak web tabanlı portallar geliştirdim. Bu portallar, firmaların ihtiyaçlarını karşılamak için özelleştirilmiş çözümler sunmaktadır.
                Java programlama dilini kullanarak Android işletim sistemi için mobil uygulamalar geliştirdim. Node.js ile hazırladığım API'ları bu uygulamalara entegre ederek, firmaların ihtiyaçlarına uygun çözümler sundum. Kullanıcıların ihtiyaçlarını karşılamak için uygulamaların performansı, tasarımı ve kullanılabilirliği gibi konulara özel önem verdim.
                Ayrıca, temel seviyede Python bilgisi kullanarak makine öğrenmesi alanında çalışmalar yaptım. Bu çalışmalar, veri analizi ve tahmin modelleri oluşturma gibi konuları içeriyordu. Python ve makine öğrenmesi konusunda deneyim kazanarak teknik becerilerimi geliştirdim.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
                <div className="h-fit flex flex-row justify-center items-center m-3 p-3">
                    <FiCode className="w-1/6 h-fit text-slate-500 m-3"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-500">Web Sitesi</span>
                        <span className="text-slate-500 text-sm">8 Proje</span>
                    </div>
                </div>
                
                <div className="h-fit flex flex-row justify-center items-center m-3 p-3">
                    <AiFillAndroid className="w-1/6 h-fit text-slate-500 m-3"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-500">Android Uygulama</span>
                        <span className="text-slate-500 text-sm">6 Proje</span>
                    </div>
                </div>

                <div className="h-fit flex flex-row justify-center items-center m-3 p-3">
                    <BiAnalyse className="w-1/6 h-fit text-slate-500 m-3"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-500">Makine Öğrenmesi</span>
                        <span className="text-slate-500 text-sm">6 Proje</span>
                    </div>
                </div>

                <div className="h-fit flex flex-row justify-center items-center m-3 p-3">
                    <FaGooglePlay className="w-1/6 h-fit text-slate-500 m-3"/>
                    <div className="flex flex-col">
                        <span className="font-bold text-slate-500">Yayınlanmış Uygulama</span>
                        <span className="text-slate-500 text-sm">3 Proje</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;