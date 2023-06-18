import React from "react";
import cpp from '../images/cpp.png';
import keras from '../images/keras.png';
import designpattern from '../images/designpattern.png';
import python from '../images/python.png';

const Certificates = () => {
    return (
        <div className="w-full h-full bg-bg2 px-10 md:px-24 py-10">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">SERTİFİKALAR</span>
            <div className="text-slate-500 text-justify grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center">
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0Gn8qZ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-bg1 rounded-md p-4">
                        <img src={keras} alt="" className="w-20 h-20 mb-1 p-1 rounded-xl" />
                        <span className="w-20 text-s text-center">Keras İle Derin Öğrenmeye Giriş</span>

                    </div>
                </a>
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=mKEhva7OJA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-bg1 rounded-md p-4">
                        <img src={cpp} alt="" className="w-20 h-20 mb-1" />
                        <span className="w-20 text-s text-center">C++ ile Programlamaya Giriş</span>
                    </div>
                </a>
                <a
                    href="https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=xr4t0BwAEd"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-bg1 rounded-md p-4">
                        <img src={designpattern} alt="" className="w-20 h-20 mb-1 p-1 rounded-xl" />
                        <span className="w-20 text-s text-center">Yazılım Tasarım Desenleri</span>
                    </div>
                </a>
                <a
                    href="https://www.sololearn.com/certificates/CC-F3LRGNRK"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1">
                    <div className="flex flex-col flex-1 justify-center items-center bg-bg1 rounded-md p-4">
                        <img src={python} alt="" className="w-20 h-20 mb-1 p-1 rounded-xl" />
                        <span className="w-20 text-s text-center">Introduction to Python</span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Certificates;
