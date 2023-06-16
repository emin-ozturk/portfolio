import React from "react";
import { AiFillStar } from 'react-icons/ai';

const Rating = (props) => {
    const { rating } = props;

    const renderStar = () => {
        const listItems = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                listItems.push(<AiFillStar className="w-3 h-3 text-yellow-500" />);
            } else {
                listItems.push(<AiFillStar className="w-3 h-3" />);
            }
        }
        return listItems;
    }
    return (
        <div className="flex flex-row justify-center">
            {renderStar()}
        </div>
    )
};

export default Rating;