"use client";

import { useState, useEffect, useCallback } from "react";
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
    const [input, setInput] = useState('');
    const [score, setScore] = useState(0);
    const [interval, setInterval] = useState(INITIAL_INTERVAL);
    const [level, setLevel] = useState(1);

    // generate a random position for the word within the viewport
    const getRandomPosition = () => ({
        x: Math.random() * (window.innerWidth - 200),
        y: Math.random() * (window.innerHeight - 100)
    });

    // get a random word based on level
    const getRandomWord = useCallback(() => {
        const difficulty = level < 3 ? 'easy' : level < 6 ? 'medium' : 'hard';
        const words = wordLists[difficulty];
        return words[Math.floor(Math.random() * words.length)];
    }, [level])

    // add new word
    const addWord = useCallback(() => {
        const newWord = {
            id: Date.now(),
            text: getRandomWord(),
            ...getRandomPosition(),
            createdAt: Date.now()
        };
        setWords(prev => [...prev, newWord])
    }, [getRandomWord])
    

    // handle word completion
    const handleWordComplete = (completedWord) => {
        setWords(prev => prev.filter(word => word.text !== completedWord));
        setScore(prev => prev + completedWord.length * 10);
        setInput();

        // Increase level every 5 successful words
        if (score > level * 500) {
            setLevel(prev => prev + 1);
            setInterval(prev => Math.max(MIN_INTERVAL, prev - INTERVAL_DESCREASE_RATE));
        }
    }

    // check for expired words
    useEffect(() => {
        const checkExpiredWords = () => {
            const now = Date.now();
            const expiredWords = words.filter(word => now - word.createAt > FADE_DURATION);
            // TO-DO: Implement a health system for game over
        }

        const timer = setInterval(checkExpiredWords, 100);
        return () => clearInterval(timer);
    }, [words, score, onGameOver])

    // add new words periodically
    useEffect(() => {
        const timer = setInterval(addWord, interval);
        return () => clearInterval(timer);
    }, [interval, addWord])

    // handle input
    const handleInput = (e) => {
        setInput(e.target.value);
        setInput(value);

        const matchedWord = null;
        if (matchedWord) {
            handleWordComplete(matchedWord.text);
        }
    };

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden">
            {/* Starfield Background */}
            <StarField
                speed={0.5}
                width={window.innerWidth}
                height={window.innerHeight}             
            />

            {/* Score and Level */}
            <div className="absolute top-6 left-6 text-white">
                <div>Score: {score}</div>
                <div>Level: {level}</div>
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
                className=""
                autoFocus
            />
        </div>
    )
}