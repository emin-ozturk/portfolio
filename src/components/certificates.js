import React from "react";
import cpp from '../images/cpp.png';
import keras from '../images/keras.png';
import designpattern from '../images/designpattern.png';
import python from '../images/python.png';

const Certificates = () => {
    return (
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 py-10">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Sertifikalar</span>
            <div className="text-slate-500 text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0Gn8qZ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-white rounded-md p-4 hover:bg-gray-200 shadow-md">
                        <img src={keras} alt="" className="w-16 h-16 mb-1 p-1 rounded-xl" />
                        <span className="w-28 text-s text-center">Keras ile Derin Öğrenmeye Giriş</span>

                    </div>
                </a>
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=mKEhva7OJA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-white rounded-md p-4 hover:bg-gray-200 shadow-md">
                        <img src={cpp} alt="" className="w-16 h-16 mb-1" />
                        <span className="w-28 text-s text-center">C++ ile Programlamaya Giriş</span>
                    </div>
                </a>
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0BwAEd"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-white rounded-md p-4 hover:bg-gray-200 shadow-md">
                        <img src={designpattern} alt="" className="w-16 h-16 mb-1 p-1 rounded-xl" />
                        <span className="w-28 text-s text-center">Yazılım Tasarım Desenleri</span>
                    </div>
                </a>
                <a
                    href="https://www.sololearn.com/certificates/CC-F3LRGNRK"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-white rounded-md p-4 hover:bg-gray-200 shadow-md">
                        <img src={python} alt="" className="w-16 h-16 mb-1 p-1 rounded-xl" />
                        <span className="w-28 text-s text-center">Introduction to Python</span>
                    </div>
                </a>
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=eK1hyzKGm4"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-white rounded-md p-4 hover:bg-gray-200 shadow-md">
                        <img src={python} alt="" className="w-16 h-16 mb-1 p-1 rounded-xl" />
                        <span className="w-28 text-s text-center">Python ile Makine Öğrenmesi</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Certificates;
