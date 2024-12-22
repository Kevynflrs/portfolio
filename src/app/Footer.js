import "./globals.css";
import Image from 'next/image';

export default function Footer() {
    return (
        <div id="Contact" className="flex flex-row items-center relative  bg-[#d5d1de] w-full h-[153px] border-solid border-black border-t">
            <div id="Infos">
                <div className="flex flex-row items-center justify-items-start space-x-5 pl-12llllllll">
                    <Image
                        src="/mail.png"
                        alt="Email"
                        width={64}
                        height={64}
                    />
                    <div className="text-3xl font-medium">
                        kevyn.floresdacosta@outlook.com
                    </div>
                </div>

            </div>

            <div id="social" className="flex flex-row items-center justify-items-end absolute right-12 space-x-16">
                <a href="https://github.com/Kevynflrs" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/github.png"
                        alt="GitHub"
                        width={64}
                        height={64}
                    />
                </a>
                <a href="https://www.linkedin.com/in/floreskevyn/" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/linkedin.png"
                        alt="LinkedIn"
                        width={64}
                        height={64}
                    />
                </a>
            </div>
        </div>
    );
}
