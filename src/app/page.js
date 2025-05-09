import Image from "next/image";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Bento from "./components/Bento";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bento />
        <Contacts />
      </main>
      <footer className="bg-[#040e17] mx-auto py-10">
        <p className="text-center text-sm/6 text-gray-400">
          &copy; 2025 Igor Slabykh, All rights reserved.
        </p>
      </footer>
    </>
  );
}
