"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function Footer() {

    return (
        <footer className="bg-black border-t border-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <span className="flex space-x-4">
                        <a href="https://github.com/HweyTH/sign-streak-2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Github
                        </a>

                        <a href="mailto:thhuy1101@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Email
                        </a>

                        <a href="https://www.linkedin.com/in/ghuythai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm"h>
                            Linkedin
                        </a>

                        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors text-sm'>
                            Discord
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors text-sm'>
                            Terms of Service
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-white transition-colors text-sm'>
                            Privacy
                        </a>
                    </span>

                    <div>
                        
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}
