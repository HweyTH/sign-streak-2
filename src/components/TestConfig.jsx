"use client";

import { useState, useRef, useEffect } from "react";
import { ClockIcon, PencilIcon, AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export default function TestConfig({ onConfigChange}) {
    const [time, setTime] = useState('infinite');
    const [wordCount, setWordCount] = useState(25);
    const [difficulty, setDifficulty] = useState('medium');
    const [activeDropdown, setActiveDropdown] = useState(null);

    const dropdownRefs = useRef({});

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown && dropdownRefs.current[activeDropdown] && !dropdownRefs.current[activeDropdown].contains(event.target)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [activeDropdown])

    // Handle test time configuration
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        onConfigChange({ time: newTime, wordCount, difficulty});
        setActiveDropdown(null);
    }

    // Handle word count configuration
    const handleWordCountChange = (newWordCount) => {
        setWordCount(newWordCount);
        onConfigChange({ time, wordCount: newWordCount, difficulty});
        setActiveDropdown(null);
    }

    // Handle difficulty configuration
    const handleDifficultyChange = (newDifficulty) => {
        setDifficulty(newDifficulty);
        onConfigChange({ time, wordCount, difficulty: newDifficulty});
        setActiveDropdown(null);
    }

    // Toggle Dropdown
    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }

    const timeOptions = [
        {value: '15', label: '15'},
        {value: '30', label: '30'},
        {value: '60', label: '60'},
        {value: '120', label: '120'},
        {value: 'infinite', label: '∞'},
    ]

    const wordCountOptions = [
        {value: '10', label: '10'},
        {value: '25', label: '25'},
        {value: '50', label: '50'},
        {value: '100', label: '100'},
    ]
    
    const difficultyOptions = [
        {value: 'easy', label: 'Easy'},
        {value: 'medium', label: 'Medium'},
        {value: 'hard', label: 'Hard'},
    ]

    return (
        <div className="flex items-center space-x-4 mb-6"> 
            <div className="relative flex space-x-2" ref={(el) => dropdownRefs.current['time'] = el}>
                {/* Time Dropdown */}
                <button
                    onClick={() => toggleDropdown('time')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <ClockIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-sm">Time</span>
                </button>

                {activeDropdown === 'time' && (
                    <div>
                        {timeOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleTimeChange(option.value)}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                )}

                {/* Word Count Dropdown */}
                <button
                    onClick={() => toggleDropdown('wordCount')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <PencilIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-sm">Word Count</span>
                </button>

                {activeDropdown === 'wordCount' && (
                    <div>
                        
                    </div>
                )}

                {/* Difficulty Level Dropdown */}
                <button
                    onClick={() => toggleDropdown('difficulty')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <AdjustmentsVerticalIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-sm">Difficulty</span>
                </button>

                {activeDropdown === 'difficulty' && (
                    <div>
                        
                    </div>
                )}

                <div className="h-12 border-l border-gray-600"></div>
            </div>
        </div>
    );
}