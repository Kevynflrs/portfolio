import "./globals.css";
import Image from 'next/image';
import AboutSection from "./Template/About";
import SynthèseSection from "./Template/Synthèse";
import Skills from "./Template/Skills";

export default function Main() {
  return (
    <div>
      <div id="Home">
        <Image
          className="w-full h-full object-cover"
          src="/HomePage.jpg"
          alt="Home page image"
          width={2150}
          height={1080}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold">Kevyn Flores</h1>
          <h2 className="text-3xl">Etudiant en dévelopement FullStack/IA</h2>
        </div>
      </div>
      <AboutSection />
      <SynthèseSection />
      <Skills />
      
    </div>
  );
}

