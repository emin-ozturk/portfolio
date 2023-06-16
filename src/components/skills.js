import React from "react";
import react from '../images/react.png'
import nodejs from '../images/nodejs.png'
import mongodb from '../images/mongodb.png'
import python from '../images/python.png'
import javascript from '../images/javascript.png'
import java from '../images/java.png'
import android from '../images/android.png'
import cpp from '../images/cpp.png'
import tailwind from '../images/tailwind.png'

const Skills = () => {
    return (
        <div className="w-full h-full bg-bg1 px-24 py-16">
            <span className="flex flex-1 justify-center text-white text-3xl font-bold mb-10">BECERİLER</span>
            <div className="text-slate-500 text-justify flex flex-row overflow-x-auto justify-center">
                <img src={nodejs} alt="" className="w-20 h-20 m-4" />
                <img src={mongodb} alt="" className="w-20 h-20 m-4" />
                <img src={react} alt="" className="w-20 h-20 m-4" />
                <img src={python} alt="" className="w-20 h-20 m-4" />
                <img src={javascript} alt="" className="w-20 h-20 m-4" />
                <img src={java} alt="" className="w-20 h-20 m-4" />
                <img src={android} alt="" className="w-20 h-20 m-4" />
                <img src={cpp} alt="" className="w-20 h-20 m-4" />
                <img src={tailwind} alt="" className="w-20 h-20 m-4" />
            </div>
        </div>
    )
};

export default Skills;