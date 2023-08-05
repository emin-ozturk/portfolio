import React from "react";
import { TbSchool } from 'react-icons/tb';

const Education = () => {
    return (
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 py-10 flex flex-col items-center">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Eğitim</span>

            <div className="flex flex-col bg-white p-4 rounded-md shadow-md">
                
                <div className="flex flex-row">
                    <div className="flex flex-col items-center">
                        <div>
                            <TbSchool className="w-6 h-6 text-blue-300"/>
                        </div>
                        <div className="w-0.5 h-24 bg-blue-300">
                        </div>
                    </div>
                    <div className="flex flex-col pb-4 px-4">
                        <span className="text-sm text-gray-400 mb-2">2020-2022</span>
                        <span className="font-bold text-neutral-600">İstanbul Arel Üniversitesi</span>
                        <span className="text-sm text-gray-400">Bilgisayar Mühendisliği</span>
                        <span className="text-sm text-gray-400">Not: 3.85</span>
                        <span className="text-sm text-gray-400">Yüksek Onur Belgesi</span>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col items-center">
                        <div>
                            <TbSchool className="w-6 h-6 text-blue-300"/>
                        </div>
                        <div className="w-0.5 h-24 bg-blue-300">
                        </div>
                    </div>
                    <div className="flex flex-col pb-4 px-4">
                        <span className="text-sm text-gray-400 mb-2">2018-2020</span>
                        <span className="font-bold text-neutral-600">İstanbul Beykent Üniversitesi</span>
                        <span className="text-sm text-gray-400">Bilgisayar Programcılığı</span>
                        <span className="text-sm text-gray-400">Not: 3.98 (Bölüm Birinciliği)</span>
                        <span className="text-sm text-gray-400">Yüksek Onur Belgesi</span>
                    </div>
                </div>
                    

                    
            </div>
        </div>
    )
};

export default Education;