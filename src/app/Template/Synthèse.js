import React from 'react';
import Image from 'next/image';
import '../globals.css';

export default function SynthèseSection() {
    return (
        <div className="p-10">
            <h2 className="text-3xl font-bold p-2">Tableau de synthèse</h2>
            <div className='flex justify-center'>
                <Image
                    className=''
                    src="/TabSynthèse.png"
                    width={1356}
                    height={2164}
                    alt="Synthèse"
                />
            </div>
        </div>
    );
};