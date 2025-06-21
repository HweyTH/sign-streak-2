"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChatBubbleLeftEllipsisIcon, BellIcon, UserIcon } from '@heroicons/react/16/solid';

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
                            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gray-400"/>
                        </button>

                        <div className="relative" ref={notifRef}>
                            <button
                                onClick={() => setIsNotifOpen(!isNotifOpen)}
                                className="w-10 h-10 bg-black rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                                aria-label="Notifications"
                            >
                                <BellIcon className="w-5 h-5 text-gray-400"/>
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
                            <UserIcon className="w-5 h-5 text-gray-400"/>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
}
