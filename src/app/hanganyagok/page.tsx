"use client";

import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Audios: React.FC = () => {
    const [isOpenPart1, setIsOpenPart1] = useState(true);
    const [isOpenPart2, setIsOpenPart2] = useState(true);
    const [isOpenPart3, setIsOpenPart3] = useState(true);
    const [isOpenPart4, setIsOpenPart4] = useState(true);
    const [isOpenPart5, setIsOpenPart5] = useState(false);

    return (
        <div className="my-8 px-16">
            <h1 className="text-2xl font-bold mb-4">Hanganyagok</h1>


            {/* V. rész*/}
            <div
                className="flex items-center cursor-pointer mb-4 select-none"
                onClick={() => setIsOpenPart5(!isOpenPart5)}
            >
                {isOpenPart5 ? (
                    <ChevronDownIcon className="w-6 h-6 text-gray-700 mr-2" />
                ) : (
                    <ChevronRightIcon className="w-6 h-6 text-gray-700 mr-2" />
                )}
                <span className="text-xl font-semibold">Zenei bejátszások részletes adatai</span>
            </div>

            {isOpenPart5 && (
                <div className="grid grid-cols-1 gap-6 w-full mb-8">
                    <table className="min-w-full text-sm text-left text-gray-700 bg-white">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="px-4 py-3">Szám</th>
                                            <th className="px-4 py-3">A mű címe</th>
                                            <th className="px-4 py-3">Műfaja</th>
                                            <th className="px-4 py-3">Megalkotásának éve</th>
                                            <th className="px-4 py-3">Az elhangzás ideje</th>
                                            <th className="px-4 py-3">Mely program keretében</th>
                                            <th className="px-4 py-3">Előadók</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">1.</td>
                                            <td className="px-4 py-2">Etűdszvit I-II.</td>
                                            <td className="px-4 py-2">zongoradarab</td>
                                            <td className="px-4 py-2">1948-49</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">2.</td>
                                            <td className="px-4 py-2">Rondó</td>
                                            <td className="px-4 py-2">zongoradarab</td>
                                            <td className="px-4 py-2">1950</td>
                                            <td className="px-4 py-2">1990</td>
                                            <td className="px-4 py-2">Szerzői est</td>
                                            <td className="px-4 py-2">Székesfehérvár, Marija Mrkic</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">3.</td>
                                            <td className="px-4 py-2">Mimi Pinson</td>
                                            <td className="px-4 py-2">dal, zongorakísérettel</td>
                                            <td className="px-4 py-2">1960</td>
                                            <td className="px-4 py-2">1984 12 17</td>
                                            <td className="px-4 py-2">Szerzői est</td>
                                            <td className="px-4 py-2">Székesfehérvár, Pászthy Júlia, km. Gábor József</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">4.</td>
                                            <td className="px-4 py-2">Óda</td>
                                            <td className="px-4 py-2">Dal „Az új iskolaigazgató” c. gyermekoperából</td>
                                            <td className="px-4 py-2">1959</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">8.</td>
                                            <td className="px-4 py-2">Jazz Kvartett III. tétel</td>
                                            <td className="px-4 py-2">kamarazene</td>
                                            <td className="px-4 py-2">1963</td>
                                            <td className="px-4 py-2">1987 12 07</td>
                                            <td className="px-4 py-2">Szerzői est, Székesfehérvár</td>
                                            <td className="px-4 py-2">studiófelv</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">9.</td>
                                            <td className="px-4 py-2">Fuvolaverseny III. tétel: Tánc</td>
                                            <td className="px-4 py-2">versenymű</td>
                                            <td className="px-4 py-2">1974</td>
                                            <td className="px-4 py-2">1984 12 17</td>
                                            <td className="px-4 py-2">Szerzői est</td>
                                            <td className="px-4 py-2">Hegedűs Imre (fuvola), Szfv-i Szimf. Zkr., vez.: Medveczky Ádám</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">10.</td>
                                            <td className="px-4 py-2">Szvit zenekarra II. tétel, IV. tétel</td>
                                            <td className="px-4 py-2">szimfonikus mű</td>
                                            <td className="px-4 py-2">1973</td>
                                            <td className="px-4 py-2">1978 03 19</td>
                                            <td className="px-4 py-2">A Székesfehérvári Szimfonikus Zenekar koncertje</td>
                                            <td className="px-4 py-2">A Zenekar, vezényel: a szerző</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">11.</td>
                                            <td className="px-4 py-2">Patrokli Mise Gloria</td>
                                            <td className="px-4 py-2">szakrális mű</td>
                                            <td className="px-4 py-2">1984</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">12.</td>
                                            <td className="px-4 py-2">Missa Cantarella Kyrie</td>
                                            <td className="px-4 py-2">szakrális zene</td>
                                            <td className="px-4 py-2">1993</td>
                                            <td className="px-4 py-2">1994 11 15</td>
                                            <td className="px-4 py-2">Bartók Rádió</td>
                                            <td className="px-4 py-2">A Szfv.-i Ének-Zenei Műv. Isk. Kodály Z. Ifj. Kórusa, vez. Lovrek Károly</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">13.</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">14.</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">15.</td>
                                            <td className="px-4 py-2">Organum Episcopale, Trió három fuvolára, Orgonaverseny III. tétel</td>
                                            <td className="px-4 py-2">orgonamű, kamarazene, versenymű</td>
                                            <td className="px-4 py-2">1995</td>
                                            <td className="px-4 py-2">2003 12 10</td>
                                            <td className="px-4 py-2">Új magyar művek VI. hangverseny ciklusa</td>
                                            <td className="px-4 py-2">Marosvári Péter, Scheuring Zsófia, Szűcs Marietta, Varga Mónika</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">16.</td>
                                            <td className="px-4 py-2">Magyar Te Deum III. Patrem immensae majestatis, V. Fiat misericordia</td>
                                            <td className="px-4 py-2">szakrális zene</td>
                                            <td className="px-4 py-2">2000</td>
                                            <td className="px-4 py-2">2000 11 18</td>
                                            <td className="px-4 py-2">Ősbemutató Ünnepi hangverseny a MAGYAR MILLENNIUM tiszteletére</td>
                                            <td className="px-4 py-2">Béres Judit (szoprán), Schöck Atala (alt), Zászkaliczky Tamás (orgona), Kossuth Gimn. leánykara</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">17.</td>
                                            <td className="px-4 py-2">Rekviem</td>
                                            <td className="px-4 py-2">szakrális zene</td>
                                            <td className="px-4 py-2">2002</td>
                                            <td className="px-4 py-2">2003 01 12</td>
                                            <td className="px-4 py-2">Ősbemutató, Emlékünnepség a doni áttörés 60. évfordulója alkalmából</td>
                                            <td className="px-4 py-2">Győri Filharm. Zenekar, vez.: Medveczky Ádám, Veszprém Város Vegyeskara, Schöck Atala, Tóth János</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">18.</td>
                                            <td className="px-4 py-2">Csillagom, révészem</td>
                                            <td className="px-4 py-2">kórusmű, népdalfeldolgozás</td>
                                            <td className="px-4 py-2">1997</td>
                                            <td className="px-4 py-2">2007 02 24</td>
                                            <td className="px-4 py-2">Kórusolimpia Linz</td>
                                            <td className="px-4 py-2">Ceglédi Leánykórus, Ceglédi Kossuth Lajos Gimnázium Puella Kórusa</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">19.</td>
                                            <td className="px-4 py-2">Szecessziós szonáta</td>
                                            <td className="px-4 py-2">zongoradarab</td>
                                            <td className="px-4 py-2">2014-2016</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-2">20.</td>
                                            <td className="px-4 py-2">Zongoraverseny III. tétel</td>
                                            <td className="px-4 py-2">versenymű</td>
                                            <td className="px-4 py-2">N/A</td>
                                            <td className="px-4 py-2">1987 12 07</td>
                                            <td className="px-4 py-2">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-2">Pécsi Szimfonikus Zenekar (vez.: Gál Tamás)</td>
                                        </tr>
                                    </tbody>

                                </table>
                </div>
            )}

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
