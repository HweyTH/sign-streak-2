import TypingTest from "@/components/TypingTest";

export default function RegularTestPage() {
    return (
        <div className="flex flex-col h-full w-full max-w-7xl mx-auto">
            {/* Test Container */}
            <div className="flex-1 flex items-center justify-center px-6 pb-6">
            </div>
            <TypingTest />
        </div>
    )
}