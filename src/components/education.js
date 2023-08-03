import React from "react";

const Education = () => {
    return (
        <div className="w-full h-full bg-bg3 px-10 md:px-24 py-10 flex flex-col items-center">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Eğitim</span>
            <div className="text-slate-500 grid grid-cols-1 sm:grid-cols-2 w-full lg:w-3/4 gap-4">
                <div className="flex flex-col bg-white p-4 rounded-md text-left shadow-lg">
                    <span className="text-sm text-gray-400 mb-2">2020-2022</span>
                    <span className="font-bold text-neutral-600">İstanbul Arel Üniversitesi</span>
                    <span className="text-sm text-gray-400">Bilgisayar Mühendisliği</span>
                    <span className="text-sm text-gray-400">Not: 3.85</span>
                    <span className="text-sm text-gray-400">Yüksek Onur Belgesi</span>
                </div>

                <div className="flex flex-col bg-white p-4 rounded-md text-left shadow-lg">
                    <span className="text-sm text-gray-400 mb-2">2018-2020</span>
                    <span className="font-bold text-neutral-600">İstanbul Beykent Üniversitesi</span>
                    <span className="text-sm text-gray-400">Bilgisayar Programcılığı</span>
                    <span className="text-sm text-gray-400">Not: 3.98 (Bölüm Birinciliği)</span>
                    <span className="text-sm text-gray-400">Yüksek Onur Belgesi</span>
                </div>
            </div>
        </div>
    )
};

export default Education;