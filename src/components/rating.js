import React from "react";

const Rating = (props) => {
    const { rating } = props;
    const width = rating + '%'
  
    return (
        <div className=" flex flex-row items-center">
            <div className="w-full h-1.5 bg-gray-300 mt-1 rounded-lg">
                <div className = "h-1.5 bg-gradient-to-r from-cyan-300 to-blue-600 rounded-lg" style={{width: width}}></div>
            </div>
            <span className="ml-4 text-slate-950 font-bold">
                {/* { width } */}
            </span>
        </div>
    )
};

export default Rating;