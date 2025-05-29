import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full">
            <div className="">
                <h1 className="">
                    <Link href="/">Sign Streak 2</Link>
                </h1>
            </div>
        </header>
    );
};