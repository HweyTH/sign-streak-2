"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isNotifOpen, setIsNotifOpen] = useState(false);
    const notifRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notifRef.current && !notifRef.current.contains(event.target)) {
                setIsNotifOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-black border-b border-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                
                    <Link href="/" className="flex items-center">
                        <span className="text-gray-200 font-semibold text-lg">SignStreak2</span>
                    </Link>

                    <div className="flex items-center space-x-4">

                        <button className="w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center" aria-label="Command">
                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                            </svg>
                        </button>

                        <div className="relative" ref={notifRef}>
                            <button
                                onClick={() => setIsNotifOpen(!isNotifOpen)}
                                className="w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                                aria-label="Notifications"
                            >
                                <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                                </svg>
                            </button>
                            {isNotifOpen && (
                                <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
                                    <div className="p-4 border-b border-gray-700 text-gray-200 font-semibold">Notifications</div>
                                    <ul className="max-h-60 overflow-y-auto">
                                        <li className="p-2 hover:bg-gray-700 transition-colors text-gray-300">I'm procrastinating</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <button className="w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center" aria-label="User">
                            <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
}
