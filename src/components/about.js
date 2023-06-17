import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { BiAnalyse } from "react-icons/bi";
import { FaGooglePlay } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
const About = () => {
    return (
        <div className="w-full h-full bg-bg1 px-10 md:px-24 py-10">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">HAKKIMDA</span>
            <div className="text-slate-500 text-justify">
                Node.js, React.js ve MongoDB kullanarak web tabanlı portallar geliştirdim. Bu portallar, firmaların ihtiyaçlarını karşılamak için özelleştirilmiş çözümler sunmaktadır.
                Java programlama dilini kullanarak Android işletim sistemi için mobil uygulamalar geliştirdim. Node.js ile hazırladığım API'ları bu uygulamalara entegre ederek, firmaların ihtiyaçlarına uygun çözümler sundum. Kullanıcıların ihtiyaçlarını karşılamak için uygulamaların performansı, tasarımı ve kullanılabilirliği gibi konulara özel önem verdim.
                Ayrıca, temel seviyede Python bilgisi kullanarak makine öğrenmesi alanında çalışmalar yaptım. Bu çalışmalar, veri analizi ve tahmin modelleri oluşturma gibi konuları içeriyordu. Python ve makine öğrenmesi konusunda deneyim kazanarak teknik becerilerimi geliştirdim.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
                <div className="h-fit bg-bg2 flex flex-col justify-center items-center m-3 p-3 rounded-md">
                    <FiCode className="w-1/5 h-fit text-white m-3"/>
                    <span className="font-bold text-white mb-1">Web</span>
                    <span className="text-slate-500">8 Proje</span>
                </div>

                <div className="h-fit bg-bg2 flex flex-col justify-center items-center m-3 p-3 rounded-md">
                    <AiFillAndroid className="w-1/5 h-fit text-white m-3"/>
                    <span className="font-bold text-white mb-1">Android</span>
                    <span className="text-slate-500">6 Proje</span>
                </div>

                <div className="h-fit bg-bg2 flex flex-col justify-center items-center m-3 p-3 rounded-md">
                    <BiAnalyse className="w-1/5 h-fit text-white m-3"/>
                    <span className="font-bold text-white mb-1">Makine Öğrenmesi</span>
                    <span className="text-slate-500">4 Proje</span>
                </div>
                
                <div className="h-fit bg-bg2 flex flex-col justify-center items-center m-3 p-3 rounded-md">
                    <FaGooglePlay className="w-1/5 h-fit text-white m-3"/>
                    <span className="font-bold text-white mb-1">Yayınlanmış Uygulama</span>
                    <span className="text-slate-500">3 Proje</span>
                </div>
            </div>
        </div>
    )
};

export default About;