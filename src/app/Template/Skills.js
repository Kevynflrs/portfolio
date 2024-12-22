import React from 'react';
import Image from 'next/image';
import '../globals.css';

export default function Skills() {
    return (
        <div className="p-10">
            <div className="text-3xl font-bold p-2">
                Compétences
            </div>

            {/* Front-end Section */}
            <div className='p-10'>
                <div className="flex justify-center text-xl font-medium p-5">
                    Front-end
                </div>
                <div className="flex justify-center">
                    <div className="flex justify-center flex-row space-x-52 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className=""
                            src="/css.png"
                            alt="CSS"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            style={{ objectFit: 'cover' }}
                            src="/js.png"
                            alt="JavaScript"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/html.png"
                            alt="HTML"
                            width={100}
                            height={100}
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
                    <div className="flex justify-center flex-row space-x-52 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className=""
                            src="/php.png"
                            alt="PHP"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/mysql.png"
                            alt="MySQL"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/python.png"
                            alt="Python"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/sql.png"
                            alt="SQL"
                            width={100}
                            height={100}
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
                    <div className="flex justify-center flex-row space-x-52 bg-[#d5d1de] rounded-[25px] w-[1256px] h-44">
                        <Image
                            className=""
                            src="/vuejs.png"
                            alt="Vue.js"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/react.png"
                            alt="React"
                            width={100}
                            height={100}
                        />
                        <Image
                            className=""
                            src="/angular.png"
                            alt="Angular"
                            width={100}
                            height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}