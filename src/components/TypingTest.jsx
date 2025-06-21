"use client";
import { useState, useRef, useEffect } from "react";
import generatePrompt from "./generatePrompt";
import TestConfig from "./TestConfig";

export default function TypingTest() {
    // State variables
    const [prompt, setPrompt] = useState("");
    const [input, setInput] = useState("");
    const [startTime, setStartTime] = useState(null);
    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(100);
    const [finished, setFinished] = useState(false);
    const [config, setConfig] = useState({
        time: '60', 
        wordCount: 25, 
        difficulty: 'medium'
    })
    const textareaRef = useRef();

    // Load or Restart Test
    const loadNewTest = () => {
        setPrompt(generatePrompt());
        setInput('');
        setStartTime(null);
        setWpm(0);
        setAccuracy(100);
        setFinished(false);
        setTimeout(() => textareaRef.current?.focus(), 0);
    };
    useEffect(loadNewTest, []);

    // Handle Test Config Changes
    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
        loadNewTest();
    };

    // Handle User Typing
    const handleChange = (e) => {
        const val = e.target.value.replace(/\r?\n/g, '');
        if (!startTime) setStartTime(Date.now());
        setInput(val);

        // check if user has finished typing
        if (val.length >= prompt.length) {
            const elapsedTime = (Date.now() - startTime) / 1000 / 60;
            const words = val.trim().split(/\s+/).length;

            // calcuate word-per-minute
            setWpm(Math.round(words / elapsedTime));

            // calcuate char-by-char accuracy
            const correctChars = [...val].filter((char, i) => prompt[i] === char).length;
            setAccuracy(Math.round((correctChars / prompt.length) * 100));
            setFinished(true);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="flex justify-left">
                <TestConfig onConfigChange={handleConfigChange} />
            </div>

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
                    placeholder="Begin typing..."
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