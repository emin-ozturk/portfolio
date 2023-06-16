import React from "react";
import cpp from '../images/cpp.png';
import keras from '../images/keras.png';
import hacker from '../images/hacker.png';
import designpattern from '../images/designpattern.png';

const Certificates = () => {
    return (
        <div className="w-full h-full bg-bg2 px-24 py-10">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">SERTİFİKALAR</span>
            <div className="text-slate-500 text-justify flex flex-row overflow-x-auto justify-center">
                <img src={keras} alt="" className="w-20 h-20 m-4 p-1 rounded-xl" />
                <img src={cpp} alt="" className="w-20 h-20 m-4" />
                <img src={designpattern} alt="" className="w-20 h-20 m-4 p-1 rounded-xl" />
                <img src={hacker} alt="" className="w-20 h-20 m-4 p-1 rounded-xl" />
            </div>
        </div>
    );
};

export default Certificates;
