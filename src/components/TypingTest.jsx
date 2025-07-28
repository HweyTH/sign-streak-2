"use client";
import { useState, useRef, useEffect } from "react";
import generatePrompt from "../utils/generatePrompt";
import TestConfig from "./TestConfig";
import ExtremeMode from "./ExtremeMode";

export default function TypingTest() {
    // State variables
    const [prompt, setPrompt] = useState("");
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [finished, setFinished] = useState(false);
    const [isExtremeMode, setIsExtremeMode] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);
    const [config, setConfig] = useState({
        time: '60', 
        wordCount: 25, 
        difficulty: 'medium'
    })
    const textareaRef = useRef();

    // Countdown timer effect
    useEffect(() => {
        if (!startTime || finished || config.time === 'infinite') return;

        const timeLimit = parseInt(config.time);
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000;
            const remaining = Math.max(0, timeLimit - elapsed);
            setTimeLeft(remaining);

            if (remaining <= 0) {
                clearInterval(interval);
                finishTest();
            }
        }, 100);

        return () => clearInterval(interval);
    }, [startTime, finished, config.time]);

    // Finish test function
    const finishTest = () => {
        if (!startTime) return;
        
        const elapsedTime = (Date.now() - startTime) / 1000 / 60;
        const words = input.trim().split(/\s+/).length;
        const correctChars = [...input].filter((char, i) => prompt[i] === char).length;
        
        setWpm(Math.round(words / elapsedTime));
        setAccuracy(Math.round((correctChars / prompt.length) * 100));
        setFinished(true);
    };

    // Load or Restart Test
    const loadNewTest = () => {
        setPrompt(generatePrompt('random', config.difficulty, config.wordCount));
        setInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setFinished(false);
        setTimeLeft(null);
        setTimeout(() => textareaRef.current?.focus(), 0);
    };
    useEffect(loadNewTest, [config]);

    // Handle User Typing
    const handleChange = (e) => {
        const val = e.target.value.replace(/\r?\n/g, '');
        if (!startTime) setStartTime(Date.now());
        setInput(val);

        // check if user has finished typing
        if (val.length >= prompt.length) {
            finishTest();
        }
    };

    // Format time display
    const formatTime = (seconds) => {
        if (seconds === null) return '';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // handle game over (extreme mode)
    const handleGameOver = (finalScore) => {
        setIsExtremeMode(false);
        // TODO: Make a modal to show the final score and leaderboard ranking
    }

    // handle config changes
    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    }

    // handle extreme mode
    const handleExtremeMode = () => {
        setIsExtremeMode(true);
    }

    if (isExtremeMode) {
        return <ExtremeMode onGameOver={handleGameOver} />;
    }

    return (
        <div className="w-full max-w-5xl mx-auto">
            {/* Timer Display */}
            {/* {config.time !== 'infinite' && startTime && !finished && (
                <div className="mb-4 flex justify-center">
                    <div className={`text-2xl font-mono font-bold px-6 py-2 rounded-lg ${
                        timeLeft <= 10 ? 'text-red-500 bg-red-500/10' : 
                        timeLeft <= 30 ? 'text-yellow-500 bg-yellow-500/10' : 
                        'text-blue-500 bg-blue-500/10'
                    }`}>
                        {formatTime(timeLeft)}
                    </div>
                </div>
            )} */}

            <div className="relative">
                <pre className="font-mono text-lg whitespace-pre-wrap break-words overflow-hidden">
                    {prompt.split('').map((char, i) => {
                        let cls = 'text-gray-300';
                        if (i < input.length) {
                            cls = input[i] === char 
                                ? 'text-green-400'
                                : 'text-red-500 line-through';
                        } else if (i === input.length && !finished) {
                            cls = 'underline text-white';
                        }
                        return (
                            <span key={i} className={cls}>
                                {char}
                            </span>
                        )
                    })}
                </pre>

                <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                        }
                    }}
                    disabled={finished}
                    className={`
                        absolute top-0 left-0 w-full h-full bg-transparent text-transparent
                        focus:outline-none resize-none font-mono text-lg 
                        whitespace-pre-wrap break-words overflow-hidden
                        ${finished ? 'pointer-events-none' : ''}
                    `}
                    spellCheck={false}
                />

                {finished && (
                    <div className="mt-4 flex justify-between items-center">
                        <div>
                            <p className="text-xl font-semibold">WPM: {wpm}</p>
                            <p className="text-lg text-gray-300">Accuracy: {accuracy}%</p>                    
                        </div>

                        <button onClick={loadNewTest} className="px-6 py-2 hover:bg-gray-500 rounded-lg transition cursor-pointer">
                            Restart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}