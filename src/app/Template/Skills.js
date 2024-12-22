import React from 'react';
import Image from 'next/image';
import '../globals.css';

export default function Skills() {
    return (
        <div className="p-10">
            <div id='Compétences' className="text-3xl font-bold p-2">
                Compétences
            </div>

            {/* Front-end Section */}
            <div className='p-10'>
                <div className="flex justify-center text-xl font-medium p-5">
                    Front-end
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center items-center flex-row space-x-52 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className="w-32 h-32"
                            src="/css.png"
                            alt="CSS"
                            href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/js.png"
                            alt="JavaScript"
                            href="https://fr.wikipedia.org/wiki/JavaScript"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/html.png"
                            alt="HTML"
                            href="https://fr.wikipedia.org/wiki/HTML5"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>
            </div>

            {/* Back-end Section */}
            <div className='p-10'>
                <div className="flex justify-center text-xl font-medium p-5">
                    Back-end
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center items-center flex-row space-x-44 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className="w-32 h-32"
                            src="/php.png"
                            alt="PHP"
                            href="https://fr.wikipedia.org/wiki/PHP"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/mysql.png"
                            alt="MySQL"
                            href="https://fr.wikipedia.org/wiki/MySQL"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/python.png"
                            alt="Python"
                            href="https://fr.wikipedia.org/wiki/Python_(langage)"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/sql.png"
                            alt="SQL"
                            href="https://fr.wikipedia.org/wiki/Structured_Query_Language"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>
            </div>

            {/* Framework Section */}
            <div className='p-10'>
                <div className="flex justify-center text-xl font-medium p-5">
                    Framework
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center items-center flex-row space-x-52 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className="w-32 h-32"
                            src="/vuejs.png"
                            alt="Vue.js"
                            href="https://fr.wikipedia.org/wiki/Vue.js"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/react.png"
                            alt="React"
                            href="https://fr.wikipedia.org/wiki/React"
                            width={128}
                            height={128}
                        />
                        <Image
                            className="w-32 h-32"
                            src="/angular.png"
                            alt="Angular"
                            href="https://fr.wikipedia.org/wiki/Angular"
                            width={128}
                            height={128}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}