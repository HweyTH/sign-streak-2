"use client";

import { useState, useRef } from "react";
import { Clock, Locate, Languages, Hash, Settings2, Swords, RotateCcw, Play, CircleQuestionMark} from "lucide-react";

export default function TestConfig({ onConfigChange, onExtremeMode }) {
    const [source, setSource] = useState('random');
    const [language, setLanguage] = useState('end');
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

    // Handle language configuration
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        onConfigChange({ source, time, wordCount, difficulty, language: newLanguage});
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

    const languageOptions = [
        {value: 'en', label: 'English'},
        {value: 'es', label: 'Spanish'},
        {value: 'fr', label: 'French'},
        {value: 'vi', label: 'Vietnamese'},
    ]

    const timeOptions = [
        {value: '30', label: '30s'},
        {value: '60', label: '60s'},
        {value: '180', label: '180s'},
        {value: '300', label: '300s'},
        {value: 'infinite', label: '∞'},
    ]

    const wordCountOptions = [
        {value: '10', label: '10'},
        {value: '25', label: '25'},
        {value: '50', label: '50'},
        {value: '100', label: '100'},
        {value: '200', label: '200'},
    ]
    
    const difficultyOptions = [
        {value: 'easy', label: 'Gental Gale'},
        {value: 'medium', label: 'Balanced Trial'},
        {value: 'hard', label: 'Iron Oath'},
        {value: 'insane', label: 'Wyrm Wrath', icon: Swords}
    ]

    return (
        <div className="mb-6 rounded-lg p-3 border border-gray-700/50 overflow-hidden"> 
            <div className="flex items-center">
                <div className="flex items-center space-x-2" ref={(el) => dropdownRefs.current['source'] = el}>
                    {/* Source Dropdown */}
                    <button
                        onClick={() => toggleDropdown('source')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors cursor-pointer"
                    >
                        <Locate className="w-4 h-4 text-gray-400"/>
                        <span className="text-gray-300 text-xs">Source</span>
                    </button>

                    {/* Language Dropdown */}
                    <button
                        onClick={() => toggleDropdown('language')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors cursor-pointer"
                    >
                        <Languages className="w-4 h-4 text-gray-400"/>
                        <span className="text-gray-300 text-xs">Language</span>
                    </button>

                    {/* Time Dropdown */}
                    <button
                        onClick={() => toggleDropdown('time')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors cursor-pointer"
                    >
                        <Clock className="w-4 h-4 text-gray-400"/>
                        <span className="text-gray-300 text-xs">Time</span>
                    </button>
                    
                    {/* Word Count Dropdown */}
                    <button
                        onClick={() => toggleDropdown('wordCount')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors cursor-pointer"
                    >
                        <Hash className="w-4 h-4 text-gray-400"/>
                        <span className="text-gray-300 text-xs">Word Count</span>
                    </button>

                    {/* Difficulty Level Dropdown */}
                    <button
                        onClick={() => toggleDropdown('difficulty')}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-600 transition-colors cursor-pointer"
                    >
                        <Settings2 className="w-4 h-4 text-gray-400"/>
                        <span className="text-gray-300 text-xs">Difficulty</span>
                    </button>


                    {/* Divider */}
                    <div className="h-8 border-l border-gray-600 mx-4"></div>

                    {/* Options Container */}
                    <div className="relative">
                        <div
                            ref={optionsContainerRef}
                            className={`overflow-hidden transition-all duration-150 ease-in-out
                                ${activeDropdown ? 'w-auto opacity-100' : 'w-0 opacity-0'
                                }`}
                            style={{width: '485px'}}
                        >
                            <div className={`flex items-center justify-center space-x-3 transition-transform duration-150 ease-in-out
                                ${isTransitioning ? 'transform translate-x-full' : 'translate-x-0'}
                                `}>

                                {activeDropdown === 'source'  && (
                                    <div className="flex items-center space-x-2 justify-center">
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

                                {activeDropdown === 'language'  && (
                                    <div className="flex items-center space-x-2 justify-center">
                                        {languageOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => handleLanguageChange(option.value)}
                                                className={`px-3 py-1 rounded-md transition-colors ${
                                                    language === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
                                                }`}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                                    
                                {activeDropdown === 'time' && (
                                    <div className="flex items-center space-x-2 justify-center">
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
                                    <div className="flex items-center space-x-2 justify-center">
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
                                    <div className="flex items-center space-x-2 justify-center">
                                        {difficultyOptions.map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => handleDifficultyChange(option.value)}
                                                className={`px-3 py-1 rounded-md transition-colors ${
                                                    difficulty === option.value ? 'border-2 border-white text-white text-xs' : 'text-gray-400 text-xs hover:bg-gray-800'
                                                }`}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    {option.icon && <option.icon style={{width: '11px', height: '11px'}}/>}
                                                    <span className="text-xs">{option.label}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-8 border-l border-gray-600"></div>

                    <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-md text-gray-400 hover:bg-gray-800 transition-colors">
                            <RotateCcw className="w-4 h-4"/>
                        </button>

                        <button className="p-2 rounded-md text-gray-400 hover:bg-gray-800 transition-colors">
                            <CircleQuestionMark className="w-4 h-4"/>
                        </button>

                        <button className="p-2 rounded-md text-gray-400 hover:bg-gray-800 transition-colors">
                            <Play className="w-4 h-4"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}