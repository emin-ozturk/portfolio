import React from "react";

const Rating = (props) => {
    const { rating } = props;

    const renderProgress = () => {
        switch (rating) {
            case 1:
                return (<div className="w-1/5 h-2 bg-green-700"></div>)
            case 2:
                return (<div className="w-2/5 h-2 bg-green-700"></div>)
            case 3:
                return (<div className="w-3/5 h-2 bg-green-700"></div>)
            case 4:
                return (<div className="w-4/5 h-2 bg-green-700"></div>)
            default:
                return (<div className="w-5/5 h-2 bg-green-700"></div>)
        }
    }

    return (
        <div className="w-full h-2 bg-gray-300">
            {renderProgress()}
        </div>
    )
};

export default Rating;