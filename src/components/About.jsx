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
            <div className="p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto scrollbar-hide">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer" 
                >
                    <XCircleIcon className="w-4 h-4"/>
                </button>
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="text-gray-200 font-mono leading-relaxed whitespace-pre-line">{displayedText}</p>
            </div>
        </div>
    )
}