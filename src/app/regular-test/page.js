"use client";
import { useState } from 'react';
import TypingTest from "@/components/TypingTest";
import TestConfig from "@/components/TestConfig"

export default function RegularTestPage() {
    const [config, setConfig] = useState({
        source: 'random', 
        time: '60',
        wordCount: 25, 
        difficulty: 'medium',
    })
    const [isExtremeMode, setIsExtremeMode] = useState(false);

    const handleConfigChange = (newConfig) => {
        setConfig(newConfig);
    }

    const handleExtremeMode = () => {
        setIsExtremeMode(true);
    }

    return (
        <div className="flex flex-col w-full max-w-7xl mx-auto">
            <div className="pt-6 pb-6">
                <TestConfig
                    onConfigChange={handleConfigChange}
                    onExtremeMode={handleExtremeMode}
                />
            </div>

            <div className='flex-1 flex items-center justify-center'>
                <TypingTest config={config}/>
            </div>
            
        </div>
    )
}