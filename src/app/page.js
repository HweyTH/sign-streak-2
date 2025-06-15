import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Sign Streak II
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Dare thyself to this trial of fingers and mind. A crucible of will and skill, where hands speak not words, but in sacred signs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="">
            <button className="hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border cursor-pointer">
              Regular Typing Test
            </button>
          </Link>

          <Link href="">
            <button className="hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 border cursor-pointer">
              Sign Language Test
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};
