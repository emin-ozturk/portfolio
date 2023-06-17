import React from "react";

const Education = () => {
    return (
        <div className="w-full h-full bg-bg2 px-10 md:px-24 py-10">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">EĞİTİM</span>
            <div className="text-slate-500 text-justify flex flex-row justify-center flex-1">
                <div className="w-2/3 lg:w-1/4 flex flex-col mr-5 bg-bg1 p-4 rounded-md text-left">
                    <span className="font-bold text-white">İstanbul Arel Üniversitesi</span>
                    <span>Bilgisayar Mühendisliği</span>
                    <span>Not: 3.85</span>
                    <span>[2020-2022]</span>
                </div>

                <div className="w-2/3 lg:w-1/4 flex flex-col bg-bg1 p-4 rounded-md text-left">
                    <span className="font-bold text-white">İstanbul Beykent Üniversitesi</span>
                    <span>Bilgisayar Programcılığı</span>
                    <span>Not: 3.98 (Bölüm Birinciliği)</span>
                    <span>[2018-2020]</span>
                </div>
            </div>
        </div>
    )
};

export default Education;