import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon, XCircleIcon } from '@heroicons/react/24/solid';

interface AudioPlayerProps {
    audioSrc: string;
    title: string;
}

const AudioPlayerWithData: React.FC<AudioPlayerProps> = ({ audioSrc, title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    // Close modal if clicked outside
    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, []);

    return (
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
            <button
                onClick={handleOpenModal}
                className="flex items-center justify-center p-4 bg-blue-600 text-white rounded-full mt-4 transition-transform hover:scale-105"
            >
                <PlayIcon className="h-6 w-6" />
            </button>

            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-8 z-[1000]"
                    onClick={handleOutsideClick} // Close on click outside
                >
                    <div
                        className="relative bg-white w-full h-full max-w-6xl rounded-lg shadow-lg flex flex-col"
                        onClick={(e) => e.stopPropagation()} // Stop propagation to prevent closing
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-black text-xl z-[1100] hover:text-red-600 transition-colors"
                        >
                            <XCircleIcon className="h-8 w-8" />
                        </button>

                        {/* Table Background */}
                        <div className="flex-grow overflow-y-auto px-6 py-4 bg-gray-50 bg-opacity-90">
                            <div className="overflow-x-auto relative">
                                <table className="min-w-full text-sm text-left text-gray-700 bg-white">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="px-6 py-3">Szám</th>
                                            <th className="px-6 py-3">A mű címe</th>
                                            <th className="px-6 py-3">Műfaja</th>
                                            <th className="px-6 py-3">Megalkotásának éve</th>
                                            <th className="px-6 py-3">Az elhangzás ideje</th>
                                            <th className="px-6 py-3">Mely program keretében</th>
                                            <th className="px-6 py-3">Előadók</th>
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

                                {/* <div className="absolute right-0 top-0 bottom-0 w-4 bg-gray-200">
                                    <div className="h-full bg-gray-400 rounded"></div>
                                </div> */}
                            </div>
                        </div>

                        {/* Audio Player */}
                        <div className="relative z-10 p-4 bg-white rounded-lg mt-auto">
                            <h2 className="text-xl font-semibold mb-2">{title}</h2>
                            <audio controls ref={audioRef} src={audioSrc} className="w-full mb-4" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AudioPlayerWithData;
