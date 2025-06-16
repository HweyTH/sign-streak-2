import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TypingTest from "@/components/TypingTest";

export default function RegularTestPage() {
    return (
        <>
            <Header />
            <main className="w-full max-w-3xl mx-auto py-16">
                <h1 className="text-4xl font-bold">
                    Regular Typing Test
                </h1>
                <TypingTest />
            </main>
            <Footer />
        </>
    );
}