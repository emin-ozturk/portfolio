import React from "react";

const Rating = (props) => {
    const { rating } = props;
    const width = "w-" + rating + "/5"
  
    return (
        <div className="w-full h-3 bg-gray-200 mt-1">
            <div className = { width + " h-3 bg-gradient-to-r from-cyan-500 to-blue-300" }></div>
        </div>
    )
};

export default Rating;