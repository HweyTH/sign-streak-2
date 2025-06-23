import { useState, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/16/solid";

export default function About({ open, onClose, description }) {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if(!open) {
            setDisplayedText('');
            return;
        }
        
        let i = 0;
        setDisplayedText('');
        const interval = setInterval(() => {
            setDisplayedText(description.slice(0, i+1));
            i++;
            if(i === description.length) clearInterval(interval);
        }, 24)
        return () => clearInterval(interval);
    }, [open, description])

    if(!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 cursor-pointer" 
                >
                    <XCircleIcon className="w-4 h-4"/>
                </button>
                <h2 className="">About</h2>
                <p className="">{displayedText}</p>
            </div>
        </div>
    )
}