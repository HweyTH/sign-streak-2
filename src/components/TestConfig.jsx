"use client";

import { useState, useRef } from "react";
import { ClockIcon, PencilIcon, AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export default function TestConfig({ onConfigChange}) {
    const [time, setTime] = useState('60');
    const [wordCount, setWordCount] = useState(25);
    const [difficulty, setDifficulty] = useState('medium');

    // default dropdown to time
    const [activeDropdown, setActiveDropdown] = useState('time');

    const dropdownRefs = useRef({});

    // Close dropdown when clicking outside
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (activeDropdown && dropdownRefs.current[activeDropdown] && !dropdownRefs.current[activeDropdown].contains(event.target)) {
    //             setActiveDropdown(null);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     }
    // }, [activeDropdown])

    // Handle test time configuration
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        onConfigChange({ time: newTime, wordCount, difficulty});
    }

    // Handle word count configuration
    const handleWordCountChange = (newWordCount) => {
        setWordCount(newWordCount);
        onConfigChange({ time, wordCount: newWordCount, difficulty});
    }

    // Handle difficulty configuration
    const handleDifficultyChange = (newDifficulty) => {
        setDifficulty(newDifficulty);
        onConfigChange({ time, wordCount, difficulty: newDifficulty});
    }

    // Toggle Dropdown
    const toggleDropdown = (dropdown) => {
        setActiveDropdown(dropdown);
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
        {value: 'easy', label: 'Gental Gale'},
        {value: 'medium', label: 'Balanced Trial'},
        {value: 'hard', label: 'Iron Oath'},
        {value: 'insane', label: 'Wyrm Wrath'}
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
                
                {/* Word Count Dropdown */}
                <button
                    onClick={() => toggleDropdown('wordCount')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <PencilIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-sm">Word Count</span>
                </button>

                {/* Difficulty Level Dropdown */}
                <button
                    onClick={() => toggleDropdown('difficulty')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <AdjustmentsVerticalIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-sm">Difficulty</span>
                </button>

                <div className="h-10 border-l border-gray-600"></div>

                <div className="flex items-center space-x-2">
                    {activeDropdown === 'time' && (
                        <div>
                            {timeOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleTimeChange(option.value)}
                                    className={`px-3 py-1 rounded-md transition-colors ${
                                        time === option.value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {activeDropdown === 'wordCount' && (
                        <div>
                            {wordCountOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleWordCountChange(option.value)}
                                    className={`px-3 py-1 rounded-md transition-colors ${
                                        wordCount === option.value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}

                    {activeDropdown === 'difficulty' && (
                        <div>
                            {difficultyOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => handleDifficultyChange(option.value)}
                                    className={`px-3 py-1 rounded-md transition-colors ${
                                        difficulty === option.value ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}