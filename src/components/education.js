import React from "react";

const Education = () => {
    return (
        <div className="w-full h-full bg-bg2 px-24 py-16">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">EĞİTİM</span>
            <div className="text-slate-500 text-justify flex flex-col items-center flex-1">
                <div>
                    <div className="flex flex-col mb-5">
                        <span className="font-bold text-white">İstanbul Arel Üniversitesi</span>
                        <span>Bilgisayar Mühendisliği</span>
                        <span>Not: 3.85</span>
                        <span>[2020-2022]</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-white">İstanbul Beykent Üniversitesi</span>
                        <span>Bilgisayar Programcılığı</span>
                        <span>Not: 3.98 (Bölüm Birinciliği)</span>
                        <span>[2018-2020]</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Education;