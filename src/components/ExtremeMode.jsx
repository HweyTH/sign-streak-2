"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { StarField } from "starfield-react";

const INITIAL_INTERVAL = 3000;
const INTERVAL_DESCREASE_RATE = 100;
const MIN_INTERVAL = 800;
const FADE_DURATION = 2000;

const wordLists = {
    easy: ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'I', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at'],
    medium: ['through', 'important', 'together', 'children', 'everyone', 'school', 'world', 'work', 'problem', 'hand', 'part', 'place', 'make', 'live', 'small', 'last', 'only', 'ask', 'need', 'feel', 'become', 'through', 'important', 'together', 'children', 'everyone', 'school', 'world', 'work', 'problem', 'hand', 'part', 'place', 'make', 'live', 'small', 'last', 'only', 'ask', 'need', 'feel', 'become'],
    hard: ['extraordinary', 'beautiful', 'wonderful', 'incredible', 'astonishing', 'magnificent', 'spectacular', 'phenomenal', 'remarkable', 'marvelous', 'astonishing', 'magnificent', 'spectacular', 'phenomenal', 'remarkable', 'marvelous', 'astonishing', 'magnificent', 'spectacular', 'phenomenal', 'remarkable', 'marvelous'],
}

export default function ExtremeMode({ onGameOver }) {
    const [words, setWords] = useState([]);
    const [wordsCompleted, setWordsCompleted] = useState(0);
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [interval, setInterval] = useState(INITIAL_INTERVAL);
    const [level, setLevel] = useState(1);
    const [health, setHealth] = useState(100);
    const [gameActive, setGameActive] = useState(true);

    const levelRef = useRef(level);
    const gameActiveRef = useRef(gameActive);

    useEffect(() => {
        levelRef.current = level;
    }, [level]);

    useEffect(() => {
        gameActiveRef.current = gameActive;
    }, [gameActive]);

    // generate a random position for the word within the viewport
    const getRandomPosition = () => ({
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100)
    });

    // get a random word based on level
    const getRandomWord = useCallback(() => {
        const currentLevel = levelRef.current;
        const difficulty = currentLevel < 3 ? 'easy' : currentLevel < 6 ? 'medium' : 'hard';
        const words = wordLists[difficulty];
        return words[Math.floor(Math.random() * words.length)];
    }, [])

    // add new word
    const addWord = useCallback(() => {
        if (!gameActiveRef.current) return;

        const newWord = {
            id: crypto.randomUUID(),
            text: getRandomWord(),
            ...getRandomPosition(),
            createdAt: Date.now()
        };

        setWords(prev => [...prev, newWord])
    }, [getRandomWord])
    

    // handle word completion
    const handleWordComplete = (completedWord) => {
        setWords(curr => curr.filter(word => word.text !== completedWord));
        setScore(curr => curr + completedWord.length * 10);
        setInput('');
        setWordsCompleted(curr => {
            const newCount = curr + 1;
            if (curr % 5 === 0) {
                setLevel(curr => curr + 1);
                setInterval(curr => Math.max(MIN_INTERVAL, curr - INTERVAL_DESCREASE_RATE));
            }
            return newCount;
        });
    };

    // check for expired words
    useEffect(() => {
        if (!gameActive) return;

        const checkExpiredWords = () => {
            const now = Date.now();
            const expiredWords = words.filter(word => now - word.createdAt > FADE_DURATION);
            
            if(expiredWords.length > 0) {
                setHealth(current => Math.max(0, current - (expiredWords.length * 10)) );
                // remove expired words
                setWords(prev => prev.filter(word => now - word.createdAt <= FADE_DURATION));
            }
        };

        const timer = setInterval(checkExpiredWords, 100);
        return () => clearInterval(timer);
    }, [gameActive, words])

    // add new words periodically
    useEffect(() => {
        if (!gameActive) return;

        const timer = setInterval(addWord, interval);
        return () => clearInterval(timer);
    }, [interval, gameActive])

    // handle input
    const handleInput = (e) => {
        if (!gameActive) return;

        const value = e.target.value;
        setInput(value);

        const matchedWord = words.find(word => word.text === value);
        if (matchedWord) {
            handleWordComplete(matchedWord.text);
        }
    };

    useEffect(() => {
        if (health <= 0) {
            setGameActive(false);
            onGameOver(score);
        }
    }, [health, onGameOver, score]);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden">
            {/* Starfield Background */}
            <StarField
                speed={0.5}
                width={typeof window !== 'undefined' ? window.innerWidth : 1920}
                height={typeof window !== 'undefined' ? window.innerHeight : 1080}             
            />

            {/* Score and Level */}
            <div className="absolute top-6 left-6 text-white space-y-2">
                <div className="text-xil font-bold">Score: {score}</div>
                <div className="text-lg">Level: {level}</div>
                <div className="text-lg">
                    Health:
                    <span className={health > 50 ? 'text-green-400' : health > 25 ? 'text-yellow-400' : 'text-red-400'}>{health}</span>
                </div>
            </div>

            {/* Words */}
            {words.map(word => (
                    <div
                        key={word.id}
                        className="absolute text-white transition-opacity duration-2000"
                        style={{
                            top: word.y, 
                            left: word.x,
                            opacity: Math.max(0, 1 - (Date.now() - word.createdAt) / FADE_DURATION)
                        }}
                    >
                        {word.text}
                    </div>
                ))
            }

            {/* Input */}
            <input
                type="text"
                value={input}
                onChange={handleInput}
                disabled={!gameActive}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                    }
                    if (e.key === 'Escape') {
                        setGameActive(false);
                        onGameOver(score);
                    }
                }}
                className={`
                    absolute top-0 left-0 w-full h-full bg-transparent
                    text-transparent focus:outline-none font-mono
                    ${!gameActive ? 'pointer-events-none' : ''}
                    `}
                spellCheck={false}
                autoFocus
            />
        </div>
    )
}