import React from "react";
import { GoMail } from 'react-icons/go';

const Contact = () => {
    return (
        <div className="w-full h-full bg-bg3 px-12 md:px-12 lg:px-44 flex flex-col justify-center items-center px-4">
            <span className="flex flex-1 justify-center text-neutral-950 text-3xl font-bold mb-10">İletişim</span>
            <div className="w-full lg:w-2/3 md:w-1/2 sm:w-full flex flex-row justify-center bg-white shadow-md rounded-md items-center mb-10">
                <GoMail className="w-10 h-10 text-slate-500 m-3"/>
                <span className="font-bold text-slate-500">emin-ozturk78@hotmail.com</span>
            </div>
        </div>
    )
};

export default Contact;