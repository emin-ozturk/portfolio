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
import Rating from "./rating";

const Skills = () => {
    return (
        <div className="w-full h-full bg-bg3 px-10 md:px-24 py-10">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Beceriler</span>
            <div className="text-slate-500 grid grid-cols-1 sm:grid-cols-2 w-full font-serif">

                <div className="flex flex-col text-left sm:mr-5">
                    <div className="flex flex-row w-full my-3">
                        <img src={nodejs} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Node.js</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={mongodb} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>MongoDB</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={react} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>React</p>
                            <Rating rating={2} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={python} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Python</p>
                            <Rating rating={2} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={javascript} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Javascript</p>
                            <Rating rating={2} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-left sm:ml-5">
                    <div className="flex flex-row w-full my-3">
                        <img src={java} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Java</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={android} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Android</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={cpp} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>C++</p>
                            <Rating rating={2} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-3">
                        <img src={tailwind} alt="" className="w-12 h-12 mr-6 mb-3 " />
                        <div className="w-full">
                            <p>Tailwind</p>
                            <Rating rating={3} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Skills;