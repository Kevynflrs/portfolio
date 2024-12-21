import "./globals.css";
import Image from 'next/image';

export default function Footer() {
    return (
        <div id="Contact" className="relative  bg-[#d5d1de] w-full h-[153px] border-solid border-black border-t">
            <div id="Infos">
                <div>
                    <Image
                        className="absolute left-10 top-[25px]"
                        src="/mail.png"
                        alt="Email"
                        width={32}
                        height={32}
                    />
                    <div className="text-[32px] absolute left-[86px] top-[25px] w-[521px] h-8">
                        kevyn.floresdacosta@outlook.com
                    </div>
                </div>
                <div className="">
                    <Image
                        className="absolute left-10 top-24"
                        src="/phone.png"
                        alt="Phone"
                        width={32}
                        height={32}
                    />
                    <div className="text-[32px] absolute left-[86px] top-24 w-[278px] h-8">
                        +33 6 51 58 91 03
                    </div>
                </div>
            </div>

            <div id="social">
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
            </div>
        </div>
    );
}
