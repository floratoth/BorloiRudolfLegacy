"use client";

import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Audios: React.FC = () => {
    const [isOpenPart1, setIsOpenPart1] = useState(false);
    const [isOpenPart2, setIsOpenPart2] = useState(false);
    const [isOpenPart3, setIsOpenPart3] = useState(false);
    const [isOpenPart4, setIsOpenPart4] = useState(false);

    return (
        <div className="my-8 px-16">
            <h1 className="text-2xl font-bold mb-4">Hanganyagok</h1>

            {/* I. rész */}
            <div
                className="flex items-center cursor-pointer mb-4 select-none"
                onClick={() => setIsOpenPart1(!isOpenPart1)}
            >
                {isOpenPart1 ? (
                    <ChevronDownIcon className="w-6 h-6 text-gray-700 mr-2" />
                ) : (
                    <ChevronRightIcon className="w-6 h-6 text-gray-700 mr-2" />
                )}
                <span className="text-xl font-semibold">I. rész</span>
            </div>

            {isOpenPart1 && (
                <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Általános bevezető</h2>
                        <audio controls src="/audios/1/001.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Etűdszvit: Fékevesztett tánc, Rondó</h2>
                        <audio controls src="/audios/1/002.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Etűdszvit: Fékevesztett tánc</h2>
                        <audio controls src="/audios/1/002z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Rondó</h2>
                        <audio controls src="/audios/1/002z2.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Mimi Pinson</h2>
                        <audio controls src="/audios/1/003.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Mimi Pinson</h2>
                        <audio controls src="/audios/1/003z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Óda</h2>
                        <audio controls src="/audios/1/004.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Óda („Az új iskolaigazgató” című gyermekoperából)</h2>
                        <audio controls src="/audios/1/004z.mp3" className="w-full mt-2" />
                    </div>
                </div>
            )}

            {/* II. rész*/}
            <div
                className="flex items-center cursor-pointer mb-4 select-none"
                onClick={() => setIsOpenPart2(!isOpenPart2)}
            >
                {isOpenPart2 ? (
                    <ChevronDownIcon className="w-6 h-6 text-gray-700 mr-2" />
                ) : (
                    <ChevronRightIcon className="w-6 h-6 text-gray-700 mr-2" />
                )}
                <span className="text-xl font-semibold">II. rész</span>
            </div>

            {isOpenPart2 && (
                <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Kvartett, III. tétel</h2>
                        <audio controls src="/audios/2/005.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Kvartett, III. tétel</h2>
                        <audio controls src="/audios/2/005z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Adagio (csellóra, zongorakísérettel)</h2>
                        <audio controls src="/audios/2/005z2.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Divertimento, III. tétel</h2>
                        <audio controls src="/audios/2/006.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Divertimento, III. tétel</h2>
                        <audio controls src="/audios/2/006z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Fuvolaverseny, III. tétel: Tánc</h2>
                        <audio controls src="/audios/2/007.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Fuvolaverseny, III. tétel: Tánc</h2>
                        <audio controls src="/audios/2/007z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Szvit zenekarra, II. tétel</h2>
                        <audio controls src="/audios/2/008.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Szvit zenekarra, II. tétel</h2>
                        <audio controls src="/audios/2/008z.mp3" className="w-full mt-2" />
                    </div>
                </div>
            )}

            {/* III. rész*/}
            <div
                className="flex items-center cursor-pointer mb-4 select-none"
                onClick={() => setIsOpenPart3(!isOpenPart3)}
            >
                {isOpenPart3 ? (
                    <ChevronDownIcon className="w-6 h-6 text-gray-700 mr-2" />
                ) : (
                    <ChevronRightIcon className="w-6 h-6 text-gray-700 mr-2" />
                )}
                <span className="text-xl font-semibold">III. rész</span>
            </div>

            {isOpenPart3 && (
                <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Patrokli mise – Gloria</h2>
                        <audio controls src="/audios/3/009.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Patrokli mise – Gloria</h2>
                        <audio controls src="/audios/3/009z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Missa Cantarella – Kyrie</h2>
                        <audio controls src="/audios/3/010.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Missa Cantarella – Kyrie</h2>
                        <audio controls src="/audios/3/010z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Trió három fuvolára</h2>
                        <audio controls src="/audios/3/011.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Trió három fuvolára</h2>
                        <audio controls src="/audios/3/011z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Orgonaverseny, III. tétel</h2>
                        <audio controls src="/audios/3/012.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Orgonaverseny, III. tétel</h2>
                        <audio controls src="/audios/3/012z.mp3" className="w-full mt-2" />
                    </div>
                </div>
            )}

            {/* IV. rész*/}
            <div
                className="flex items-center cursor-pointer mb-4 select-none"
                onClick={() => setIsOpenPart4(!isOpenPart4)}
            >
                {isOpenPart4 ? (
                    <ChevronDownIcon className="w-6 h-6 text-gray-700 mr-2" />
                ) : (
                    <ChevronRightIcon className="w-6 h-6 text-gray-700 mr-2" />
                )}
                <span className="text-xl font-semibold">IV. rész</span>
            </div>

            {isOpenPart4 && (
                <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Magyar Te Deum</h2>
                        <audio controls src="/audios/4/013.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Magyar Te Deum, III.: Patrem Immensae Majestatis</h2>
                        <audio controls src="/audios/4/013z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Rekviem</h2>
                        <audio controls src="/audios/4/014.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Rekviem</h2>
                        <audio controls src="/audios/4/014z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - Csillagom, révészem (kórusmű)</h2>
                        <audio controls src="/audios/4/015.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Csillagom, révészem (kórusmű)</h2>
                        <audio controls src="/audios/4/015z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Bevezető - VI. Szecessziós szonáta, Zongoraverseny</h2>
                        <audio controls src="/audios/4/016.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">VI. Szecessziós szonáta, 2. tétel (zongoradarab)</h2>
                        <audio controls src="/audios/4/016z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Zongoraverseny, III. tétel</h2>
                        <audio controls src="/audios/4/016z2.mp3" className="w-full mt-2" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Audios;
