import "./globals.css";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="">
      <header className="flex items-center justify-center space-x-48 h-16 text-2xl opacity-90 fixed top-0 left-0 right-0 border-b border-b-black">
        <a href="" className="">
          à propos
        </a>
        <a href="" className="">
          Tableau de synthèse
        </a>
        <a href="" className="">
          Compétences
        </a>
        <a href="" className="">
          Projets
        </a>
        <a href="" className="">
          Expériences
        </a>
        <a href="" className="">
          Veille
        </a>
        <a href="" className="">
          Contact
        </a>
      </header>
      <main className="">
        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      </main>
      <footer className="relative">
        <div className="bg-[#d5d1de] border-solid border-[#000000] border-t w-full h-[153px] absolute left-0 top-0"></div>

        <Image
          className="absolute left-10 top-[25px]"
          src="/mail.png"
          alt="Email"
          width={32}
          height={32}
          style={{ objectFit: 'cover' }}
        />

        <Image
          className="absolute left-10 top-24"
          src="/phone.png"
          alt="Phone"
          width={32}
          height={32}
          style={{ objectFit: 'cover' }}
        />

        <div
          className="text-[#000000] text-left text-[32px] font-normal absolute left-[86px] top-24 w-[278px] h-8"
        >
          +33 6 51 58 91 03
        </div>

        <div
          className="text-[#000000] text-left text-[32px] font-normal absolute left-[86px] top-[25px] w-[521px] h-8"
        >
          kevyn.floresdacosta@outlook.com
        </div>
        
        <a href="https://github.com/Kevynflrs" target="_blank" rel="noopener noreferrer">
          <Image
            className="absolute left-[2030px] top-[45px]"
            src="/github.png"
            alt="GitHub"
            width={64}
            height={64}
            style={{ objectFit: 'cover' }}
          />
        </a>

        <a href="https://www.linkedin.com/in/floreskevyn/" target="_blank" rel="noopener noreferrer">
          <Image
            className="absolute left-[1910px] top-[45px]"
            src="/linkedin.png"
            alt="LinkedIn"
            width={64}
            height={64}
            style={{ objectFit: 'cover' }}
          />
        </a>
      </footer>
    </div>
  );
}
