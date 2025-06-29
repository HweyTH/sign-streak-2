"use client";

import { useState, useRef } from "react";
import { ClockIcon, PencilIcon, AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";

export default function TestConfig({ onConfigChange, onExtremeMode }) {
    const [source, setSource] = useState('random');
    const [time, setTime] = useState('60');
    const [wordCount, setWordCount] = useState(25);
    const [difficulty, setDifficulty] = useState('medium');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [previousDropdown, setPreviousDropdown] = useState(null);
    const [activeDropdown, setActiveDropdown] = useState('time');

    const dropdownRefs = useRef({});
    const optionsContainerRef = useRef(null);

    // Handle source configuration
    const handleSourceChange = (newSource) => {
        setSource(newSource);
        onConfigChange({ source: newSource, time, wordCount, difficulty});
    }

    // Handle test time configuration
    const handleTimeChange = (newTime) => {
        setTime(newTime);
        onConfigChange({ source, time: newTime, wordCount, difficulty});
    }

    // Handle word count configuration
    const handleWordCountChange = (newWordCount) => {
        setWordCount(newWordCount);
        onConfigChange({ source, time, wordCount: newWordCount, difficulty});
    }

    // Handle difficulty configuration
    const handleDifficultyChange = (newDifficulty) => {
        setDifficulty(newDifficulty);
        if (newDifficulty === 'insane') {
            onExtremeMode();
        } else {
            onConfigChange({ source, time, wordCount, difficulty: newDifficulty});
        }
    }

    // Toggle Dropdown
    const toggleDropdown = (dropdown) => {
        if (activeDropdown) {
            setIsTransitioning(true);
            setPreviousDropdown(activeDropdown);
            setTimeout(() => {
                setActiveDropdown(dropdown);
                setIsTransitioning(false);
                setPreviousDropdown(null);
            }, 150);
        } else {
            setActiveDropdown(dropdown);
        }
    }

    const sourceOptions = [
        {value: 'random', label: 'Random'}, 
        {value: 'quotes', label: 'Quotes'},
        {value: 'code', label: 'Code'},
        {value: 'custom', label: 'Custom'},
    ]

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
        <div className="flex items-center space-x-4 mb-6 rounded-lg p-3 border border-gray-700/50"> 
            <div className="relative flex items-center space-x-2" ref={(el) => dropdownRefs.current['time'] = el}>
                {/* Source Dropdown */}
                <button
                    onClick={() => toggleDropdown('source')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <ClockIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-xs">Source</span>
                </button>

                {/* Time Dropdown */}
                <button
                    onClick={() => toggleDropdown('time')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <ClockIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-xs">Time</span>
                </button>
                
                {/* Word Count Dropdown */}
                <button
                    onClick={() => toggleDropdown('wordCount')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <PencilIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-xs">Word Count</span>
                </button>

                {/* Difficulty Level Dropdown */}
                <button
                    onClick={() => toggleDropdown('difficulty')}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors"
                >
                    <AdjustmentsVerticalIcon className="w-4 h-4 text-gray-400"/>
                    <span className="text-gray-300 text-xs">Difficulty</span>
                </button>

                <div className="h-8 border-l border-gray-600"></div>

                <div
                    ref={optionsContainerRef}
                    className={`overflow-hidden transition-all duration-150 ease-in-out
                        ${activeDropdown ? 'w-auto opacity-100' : 'w-0 opacity-0'
                        }`}
                >
                    <div className={`flex items-center space-x-3 transition-transform duration-150 ease-in-out
                        ${isTransitioning ? 'transform translate-x-full' : 'translate-x-0'}
                        `}>

                        {activeDropdown === 'source' && (
                            <div>
                                {sourceOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleSourceChange(option.value)}
                                        className={`px-3 py-1 rounded-md transition-colors ${
                                            source === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                            
                        {activeDropdown === 'time' && (
                            <div>
                                {timeOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleTimeChange(option.value)}
                                        className={`px-3 py-1 rounded-md transition-colors ${
                                            time === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
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
                                            wordCount === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
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
                                            difficulty === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
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
        </div>
    );
}