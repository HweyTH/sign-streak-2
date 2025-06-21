"use client";

import { EnvelopeIcon, InformationCircleIcon, DocumentTextIcon, ShieldCheckIcon } from '@heroicons/react/16/solid';
import { GitForkIcon } from 'lucide-react';
import { SiGithub, SiLinkedin, SiDiscord} from 'react-icons/si'

export default function Footer() {

    return (
        <footer className="bg-black border-t border-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <span className="flex space-x-4">
                        <a href="#" target='_blank' rel='noopener noreferrer' className='flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm'>
                            <InformationCircleIcon className="w-4 h-4"/>
                            <span>About</span>
                        </a>

                        <a href="https://github.com/HweyTH/sign-streak-2" target="_blank" rel="noopener noreferrer" className="flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm">
                            <SiGithub className="w-4 h-4"/>
                            <span>Github</span>
                        </a>

                        <a href="mailto:thhuy1101@gmail.com" target="_blank" rel="noopener noreferrer" className="flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm">
                            <EnvelopeIcon className="w-4 h-4"/>
                            <span>Email</span>
                        </a>

                        <a href="https://www.linkedin.com/in/ghuythai" target="_blank" rel="noopener noreferrer" className="flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm">
                            <SiLinkedin className="w-4 h-4"/>
                            <span>Linkedin</span>
                        </a>

                        <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className='flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm'>
                            <SiDiscord className="w-4 h-4"/>
                            <span>Discord</span>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm'>
                            <DocumentTextIcon className="w-4 h-4"/>
                            <span>Terms of Service</span>
                        </a>

                        <a href="#" target="_blank" rel="noopener noreferrer" className='flex space-x-1 text-gray-400 hover:text-white transition-colors text-sm'>
                            <ShieldCheckIcon className="w-4 h-4"/>
                            <span>Privacy</span>
                        </a>
                    </span>

                    <button className='flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm rounded-md'>
                        <GitForkIcon className="w-4 h-4"/>
                        <span>v0.1.0</span>
                    </button>
                    
                </div>
            </div>
        </footer>
    );
}
