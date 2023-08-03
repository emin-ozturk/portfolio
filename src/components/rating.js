import React from "react";

const Rating = (props) => {
    const { rating } = props;
    const width = ((rating * 100) / 5) + '%'
  
    return (
        <div className="w-full h-3 bg-gray-200 mt-1">
            <div className = "h-3 bg-gradient-to-r from-cyan-600 to-blue-300" style={{width: width}}></div>
        </div>
    )
};

export default Rating;