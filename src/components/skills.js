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
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 py-10">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">Beceriler</span>
            <div className="text-slate-500 grid grid-cols-1 sm:grid-cols-2 w-full">

                <div className="flex flex-col text-left sm:mr-5">
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={nodejs} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={70} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={mongodb} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={60} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={react} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={60} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={python} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={60} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={javascript} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={70} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col text-left sm:ml-5">
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={java} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={60} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={android} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={60} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={cpp} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={45} />
                        </div>
                    </div>
                    <div className="flex flex-row w-full my-5 items-center">
                        <img src={tailwind} alt="" className="w-10 h-10 mr-6" />
                        <div className="w-full">
                            <Rating rating={80} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Skills;