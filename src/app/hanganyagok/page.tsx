"use client";

import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const Audios: React.FC = () => {
    const [isOpenPart5, setIsOpenPart5] = useState(false);
    const [isRow16Hovered, setIsRow16Hovered] = useState(false);

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
                                            <td className="px-4 py-3">1.</td>
                                            <td className="px-4 py-3">Etűdszvit I-II.</td>
                                            <td className="px-4 py-3">zongoradarab</td>
                                            <td className="px-4 py-3">1948-49</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">2.</td>
                                            <td className="px-4 py-3">Rondó</td>
                                            <td className="px-4 py-3">zongoradarab</td>
                                            <td className="px-4 py-3">1950</td>
                                            <td className="px-4 py-3">1990</td>
                                            <td className="px-4 py-3">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-3">Marija Mrkic</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">3.</td>
                                            <td className="px-4 py-3">Mimi Pinson</td>
                                            <td className="px-4 py-3">dal, zongorakísérettel</td>
                                            <td className="px-4 py-3">1960</td>
                                            <td className="px-4 py-3">1984. 12. 17.</td>
                                            <td className="px-4 py-3">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-3">Pászthy Júlia, km. Gábor József</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">4.</td>
                                            <td className="px-4 py-3">Óda</td>
                                            <td className="px-4 py-3">Dal „Az új iskolaigazgató” c. gyermekoperából</td>
                                            <td className="px-4 py-3">1959</td>
                                            <td className="px-4 py-3">2002</td>
                                            <td className="px-4 py-3">A 75. Születésnapi ünneplésen</td>
                                            <td className="px-4 py-3">Spontán kórus</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">5.</td>
                                            <td className="px-4 py-3">Kvartett III. tétel</td>
                                            <td className="px-4 py-3">kamarazene</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">6.</td>
                                            <td className="px-4 py-3">Adagio</td>
                                            <td className="px-4 py-3">Csellóra, zongorakísérettel</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">7.</td>
                                            <td className="px-4 py-3">Divertimento III. tétel</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">8.</td>
                                            <td className="px-4 py-3">Fuvolaverseny III. tétel: Tánc</td>
                                            <td className="px-4 py-3">versenymű</td>
                                            <td className="px-4 py-3">1974</td>
                                            <td className="px-4 py-3">1984. 12. 17.</td>
                                            <td className="px-4 py-3">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-3">Hegedűs Imre (fuvola), Szfv-i Szimf. Zkr., vez.: Medveczky Ádám</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">9.</td>
                                            <td className="px-4 py-3">Szvit zenekarra II. tétel</td>
                                            <td className="px-4 py-3">szimfonikus mű</td>
                                            <td className="px-4 py-3">1973</td>
                                            <td className="px-4 py-3">1978. 03. 19.</td>
                                            <td className="px-4 py-3">A Székesfehérvári Szimfonikus Zenekar koncertje</td>
                                            <td className="px-4 py-3">A Zenekar, vezényel: a szerző</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">10.</td>
                                            <td className="px-4 py-3">Patrokli Mise Gloria</td>
                                            <td className="px-4 py-3">szakrális mű</td>
                                            <td className="px-4 py-3">1984</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">11.</td>
                                            <td className="px-4 py-3">Missa Cantarella Kyrie</td>
                                            <td className="px-4 py-3">szakrális zene</td>
                                            <td className="px-4 py-3">1993</td>
                                            <td className="px-4 py-3">1994. 11. 15.</td>
                                            <td className="px-4 py-3">Bartók Rádió</td>
                                            <td className="px-4 py-3">A Szfv.-i Ének-Zenei Műv. Isk. Kodály Z. Ifj. Kórusa, vez. Lovrek Károly</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">12.</td>
                                            <td className="px-4 py-3">Trió három fuvolára</td>
                                            <td className="px-4 py-3">kamarazene</td>
                                            <td className="px-4 py-3">1995</td>
                                            <td className="px-4 py-3">2003. 12. 10.</td>
                                            <td className="px-4 py-3">Új magyar művek VI. hangverseny ciklusa</td>
                                            <td className="px-4 py-3">Scheuring Zsófia, Szűcs Marietta, Varga Mónika</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">13.</td>
                                            <td className="px-4 py-3">Orgonaverseny III. tétel</td>
                                            <td className="px-4 py-3">versenymű</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">1987. 12. 07.</td>
                                            <td className="px-4 py-3">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-3">A Szfv.-i Szimf. Zenekar, vez.: Tóka Szabolcs</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">14.</td>
                                            <td className="px-4 py-3">Magyar Te Deum III. Patrem immensae majestatis</td>
                                            <td className="px-4 py-3">szakrális zene</td>
                                            <td className="px-4 py-3">2000</td>
                                            <td className="px-4 py-3">2000. 11. 18. Ősbemutató</td>
                                            <td className="px-4 py-3">Ünnepi hangverseny a MAGYAR MILLENNIUM tiszteletére</td>
                                            <td className="px-4 py-3">Béres Judit (szoprán), Schöck Atala (alt), Zászkaliczky Tamás (orgona), Kossuth Gimn. leánykara, vez. Soltészné Lédeczi Judit</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">15.</td>
                                            <td className="px-4 py-3">Rekviem</td>
                                            <td className="px-4 py-3">szakrális zene</td>
                                            <td className="px-4 py-3">2002</td>
                                            <td className="px-4 py-3">2003. 01. 12. Ősbemutató</td>
                                            <td className="px-4 py-3">Emlékünnepség a doni áttörés 60. évfordulója alkalmából</td>
                                            <td className="px-4 py-3">A Győri Filharm. Zenekar, vez.: Medveczky Ádám, Veszprém Város Vegyeskara (karig. Erdélyi Ágnes), Schöck Atala (alt), Tóth János (basszus)</td>
                                        </tr>
                                        <tr
                                            className={`border-t border-gray-300 ${isRow16Hovered ? 'bg-gray-100' : ''}`}
                                            onMouseEnter={() => setIsRow16Hovered(true)}
                                            onMouseLeave={() => setIsRow16Hovered(false)}
                                        >
                                            <td className="px-4 py-3 align-top" rowSpan={2}>16.</td>
                                            <td className="px-4 py-3 align-top" rowSpan={2}>Csillagom, révészem</td>
                                            <td className="px-4 py-3 align-top" rowSpan={2}>kórusmű, népdalfeldolgozás</td>
                                            <td className="px-4 py-3 align-top" rowSpan={2}>1997</td>
                                            <td className="px-4 py-3 align-top">2007. 02. 24.</td>
                                            <td className="px-4 py-3 align-top">Élőadás a Magyar Rádió 6-os stúdiójában a Ceglédi Leánykórus énekel</td>
                                            <td className="px-4 py-3 align-top">Ceglédi Leánykórus</td>
                                        </tr>
                                        <tr
                                            className={isRow16Hovered ? 'bg-gray-100' : ''}
                                            onMouseEnter={() => setIsRow16Hovered(true)}
                                            onMouseLeave={() => setIsRow16Hovered(false)}
                                        >
                                            <td className="px-4 py-3">2000</td>
                                            <td className="px-4 py-3">Kórusolimpia Linz</td>
                                            <td className="px-4 py-3">Ceglédi Kossuth Lajos Gimnázium Puella Kórusa</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">17.</td>
                                            <td className="px-4 py-3">Szecessziós szonáta 2. tétel</td>
                                            <td className="px-4 py-3">zongoradarab</td>
                                            <td className="px-4 py-3">2014-2016</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">N/A</td>
                                        </tr>
                                        <tr className="border-t border-gray-300 hover:bg-gray-100">
                                            <td className="px-4 py-3">18.</td>
                                            <td className="px-4 py-3">Zongoraverseny III. tétel</td>
                                            <td className="px-4 py-3">versenymű</td>
                                            <td className="px-4 py-3">N/A</td>
                                            <td className="px-4 py-3">1987. 12. 07.</td>
                                            <td className="px-4 py-3">Szerzői est Székesfehérvár</td>
                                            <td className="px-4 py-3">Pécsi Szimfonikus Zenekar (v.: Gál Tamás)</td>
                                        </tr>
                                    </tbody>

                                </table>
                </div>
            )}

            {/* I. rész */}
            <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mt-8 mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Cím</h2>
                        <audio controls src="/audios/1/001.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/1/002.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">1. Etűdszvit: Fékevesztett tánc</h2>
                        <audio controls src="/audios/1/002z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">2. Rondó</h2>
                        <audio controls src="/audios/1/002z2.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/1/003.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">3. Mimi Pinson</h2>
                        <audio controls src="/audios/1/003z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/1/004.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">4. Óda („Az új iskolaigazgató” című gyermekoperából)</h2>
                        <audio controls src="/audios/1/004z.mp3" className="w-full mt-2" />
                    </div>
            </div>

            {/* II. rész*/}
            <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/2/005.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">5. Kvartett, III. tétel</h2>
                        <audio controls src="/audios/2/005z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">6. Adagio (csellóra, zongorakísérettel)</h2>
                        <audio controls src="/audios/2/005z2.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/2/006.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">7. Divertimento, III. tétel</h2>
                        <audio controls src="/audios/2/006z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/2/007.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">8. Fuvolaverseny, III. tétel: Tánc</h2>
                        <audio controls src="/audios/2/007z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/2/008.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">9. Szvit zenekarra, II. tétel</h2>
                        <audio controls src="/audios/2/008z.mp3" className="w-full mt-2" />
                    </div>
            </div>

            {/* III. rész*/}
            <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/3/009.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">10. Patrokli mise – Gloria</h2>
                        <audio controls src="/audios/3/009z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/3/010.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">11. Missa Cantarella – Kyrie</h2>
                        <audio controls src="/audios/3/010z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/3/011.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">12. Trió három fuvolára</h2>
                        <audio controls src="/audios/3/011z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/3/012.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">13. Orgonaverseny, III. tétel</h2>
                        <audio controls src="/audios/3/012z.mp3" className="w-full mt-2" />
                    </div>
            </div>

            {/* IV. rész*/}
            <div className="grid grid-cols-1 gap-6 max-w-[50%] w-full mb-8">
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/4/013.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">14. Magyar Te Deum, III.: Patrem Immensae Majestatis</h2>
                        <audio controls src="/audios/4/013z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/4/014.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">15. Rekviem</h2>
                        <audio controls src="/audios/4/014z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/4/015.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">16. Csillagom, révészem (kórusmű)</h2>
                        <audio controls src="/audios/4/015z.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">Felvezető</h2>
                        <audio controls src="/audios/4/016.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">17. VI. Szecessziós szonáta, 2. tétel (zongoradarab)</h2>
                        <audio controls src="/audios/4/016z1.mp3" className="w-full mt-2" />
                    </div>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">18. Zongoraverseny, III. tétel</h2>
                        <audio controls src="/audios/4/016z2.mp3" className="w-full mt-2" />
                    </div>
            </div>

        </div>
    );
};

export default Audios;
