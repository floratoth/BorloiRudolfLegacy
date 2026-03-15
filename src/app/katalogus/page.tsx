"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const Works: React.FC = () => {
  // State to track which accordion items are open (array of booleans)
  const [openItems, setOpenItems] = useState<boolean[]>(new Array(9).fill(false));

  // Toggle the open state of a specific item
  const toggleAccordion = (index: number) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <div className="mx-auto mt-8 px-16">
      <h1 className="text-2xl font-semibold mb-6 text-center">Művei műfajok és komponálásuk ideje szerint rendezve</h1>
      <div className="space-y-0">
        {/* Accordion Item 1 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(0)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>SZAKRÁLIS ZENE</span>
            <span className="text-slate-800">
              {openItems[0] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[0] ? "h-auto" : "max-h-0"
              }`}
          >
            {/* <div className="pb-5 text-sm text-slate-500">
              Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
            </div> */}


            <div className="mb-12">
              <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">1. Mise</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Mise (Missa Numerosa)</th>
                      <td className="py-3 pr-4 align-top">kétféle hangszerelésben</td>
                      <td className="py-3 pr-4 align-top">1973</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Kvart mise</th>
                      <td className="py-3 pr-4 align-top">(Kyrie, Gloria, Sanctus, Agnus Dei) orgona-kísérettel (8 perc); magyar és latin szöveggel</td>
                      <td className="py-3 pr-4 align-top">1974</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Patrokli Messe</th>
                      <td className="py-3 pr-4 align-top">(Kyrie, Gloria, Credo, Sanctus, Agnus Dei), vegyeskarra; zenekari változat (partitura) és orgona változat (partitura)</td>
                      <td className="py-3 pr-4 align-top">1983-84</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Missa Cantarella</th>
                      <td className="py-3 pr-4 align-top">(Kyrie, Gloria, Credo, Sanctus, Agnus Dei) egynemű karra</td>
                      <td className="py-3 pr-4 align-top">1993</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">2. Oratórium</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Alba Regia</th>
                      <td className="py-3 pr-4 align-top">oratórium, zongorakivonat az énekkar betanításához, partitura</td>
                      <td className="py-3 pr-4 align-top">1971-72</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Psalmus Humanus</th>
                      <td className="py-3 pr-4 align-top">(Drámai oratórium) zongorakivonatos és énekkari partitura; Hangszerelés: néhány ütem kész</td>
                      <td className="py-3 pr-4 align-top">1991</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Magyar Te Deum</th>
                      <td className="py-3 pr-4 align-top">szoprán – alt szólóra, egynemű karra, orgonára, saját szöveg (cca. 24 perc)</td>
                      <td className="py-3 pr-4 align-top">2000</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Rekviem</th>
                      <td className="py-3 pr-4 align-top">Oratórium (37 perc) (partitura: zenekar, zongorakivonat)</td>
                      <td className="py-3 pr-4 align-top">2001-2002</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">3. Egyéb szakrális zene</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                      <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karácsonyi dal</th>
                      <td className="py-3 pr-4 align-top">szakrális dal, zongora (orgona) kísérettel</td>
                      <td className="py-3 pr-4 align-top">1963</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Harcban</th>
                      <td className="py-3 pr-4 align-top">szakrális dal, zongora – orgona kísérettel</td>
                      <td className="py-3 pr-4 align-top">-</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Csillagfényes csöndes éjjel</th>
                      <td className="py-3 pr-4 align-top">francia karácsonyi ének, zongora – orgona kísérettel</td>
                      <td className="py-3 pr-4 align-top">-</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Gloria</th>
                      <td className="py-3 pr-4 align-top">szakrális dal, zongora (orgona) kísérettel</td>
                      <td className="py-3 pr-4 align-top">1966</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Pater Noster</th>
                      <td className="py-3 pr-4 align-top">dal zongora-, illetve orgona-kísérettel</td>
                      <td className="py-3 pr-4 align-top">1986</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Organum episcopale</th>
                      <td className="py-3 pr-4 align-top">(variáció és fuga), orgonára (11 perc)</td>
                      <td className="py-3 pr-4 align-top">1995. okt.-nov.</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Dona Nobis Pacem</th>
                      <td className="py-3 pr-4 align-top">szóló szopránra és egynemű karra; J. S. Bach: Wohltemp. Kl. I. cisz-moll preludium átírása (3 perc)</td>
                      <td className="py-3 pr-4 align-top">1998. szeptember</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Barokk Ave Maria</th>
                      <td className="py-3 pr-4 align-top">két énekszólamra, zongorakísérettel (orgona) (2 perc)</td>
                      <td className="py-3 pr-4 align-top">2001. augusztus 16.</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Recordare</th>
                      <td className="py-3 pr-4 align-top">egynemű karra</td>
                      <td className="py-3 pr-4 align-top">2004. november</td>
                    </tr>
                    <tr className="group hover:bg-slate-50 transition-colors">
                      <th scope="row" className="py-3 pr-4 font-medium text-slate-900 whitespace-nowrap align-top">Ó, én édes jó Istenem</th>
                      <td className="py-3 pr-4 align-top">székely imádság, egynemű karra</td>
                      <td className="py-3 pr-4 align-top">2013. október 27.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(1)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>OPERA</span>
            <span className="text-slate-800">
              {openItems[1] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[1] ? "h-auto" : "max-h-0"}`}
          >
            {openItems[1] && (
              <div className="pt-1 pb-8">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">2. Opera</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Nápolyi Kalmárok</th>
                          <td className="py-3 pr-4 align-top">opera 2 felvonásban</td>
                          <td className="py-3 pr-4 align-top">1957</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Az új iskolaigazgató</th>
                          <td className="py-3 pr-4 align-top">gyermekopera</td>
                          <td className="py-3 pr-4 align-top">1958-1959</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(2)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>NAGYZENEKARI MŰ</span>
            <span className="text-slate-800">
              {openItems[2] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[2] ? "h-auto" : "max-h-0"}`}
          >
            {openItems[2] && (
              <div className="pt-1 pb-8">
                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">3.1. Versenymű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zongoraverseny (1 tétel)</th>
                          <td className="py-3 pr-4 align-top">kétzongorás darabbá átalakítani</td>
                          <td className="py-3 pr-4 align-top">1949</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zongoraverseny</th>
                          <td className="py-3 pr-4 align-top">magyar neoromantikus stílusban</td>
                          <td className="py-3 pr-4 align-top">1950</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Clementi – Borlói Koncert</th>
                          <td className="py-3 pr-4 align-top">zongorára és zenekarra (partitura)</td>
                          <td className="py-3 pr-4 align-top">1961</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hertel – Borlói Koncert</th>
                          <td className="py-3 pr-4 align-top">zongorára és zenekarra (partitura)</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Koncert fuvolára és zenekarra</th>
                          <td className="py-3 pr-4 align-top">2 db. partitura</td>
                          <td className="py-3 pr-4 align-top">1974, B: 1974</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zongoraverseny I.</th>
                          <td className="py-3 pr-4 align-top">partitura + szóló zongora szólam</td>
                          <td className="py-3 pr-4 align-top">1979, B: 1984, 1987</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Orgonaverseny</th>
                          <td className="py-3 pr-4 align-top">partitura, orgonaszóló-anyag</td>
                          <td className="py-3 pr-4 align-top">1987, B: 1989 04 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Concerto pour alto et contrebasse et orchestre</th>
                          <td className="py-3 pr-4 align-top">(21 perc) partitura + zenekari anyag zongorakivonat</td>
                          <td className="py-3 pr-4 align-top">1995, B: 1996 04 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zongoraverseny II.</th>
                          <td className="py-3 pr-4 align-top">partitura + zongorakivonat, másolat: 28. dosszié; Szóló zongora: I. 1993. március, II. 1993. június, III. 1994. július; Zenekari kíséret zongorakivonata: ugyanakkorra; 1992. október – 1994, hangszerelés: 2004. szeptember – 2005. augusztus</td>
                          <td className="py-3 pr-4 align-top">1994. július</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hegedűverseny</th>
                          <td className="py-3 pr-4 align-top">3 tétel, zongorakivonat, partitura</td>
                          <td className="py-3 pr-4 align-top">2011</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Concertino zongorára és zenekarra</th>
                          <td className="py-3 pr-4 align-top">a Hermann L. Zeneiskolának, Székesfehérvár; Zeneiskolás növendékeknek, szólistára, zenekarra</td>
                          <td className="py-3 pr-4 align-top">2014</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">3.2. Egyéb zenekari mű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Magyar rapszódia</th>
                          <td className="py-3 pr-4 align-top">zongorára és zenekarra</td>
                          <td className="py-3 pr-4 align-top">1953</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szvit zenekarra</th>
                          <td className="py-3 pr-4 align-top">a vonósszvit átalakítása</td>
                          <td className="py-3 pr-4 align-top">1973</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion Item 4 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(3)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>KAMARAZENE</span>
            <span className="text-slate-800">
              {openItems[3] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[3] ? "h-auto" : "max-h-0"}`}
          >
            {openItems[3] && (
              <div className="pt-1 pb-8">
                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.1. Duó</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Adagio für Violincello und Klavier</th>
                          <td className="py-3 pr-4 align-top">+ partitura (kis-zenekari) szólamok nélkül</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Allegretto</th>
                          <td className="py-3 pr-4 align-top">hegedűre, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">1950</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Chanson et danse pour C. basse et piano</th>
                          <td className="py-3 pr-4 align-top">andante et allegro, dal és tánc, két népdal …(?) zongorakísérettel; ugyanaz a mű különböző címekkel</td>
                          <td className="py-3 pr-4 align-top">1957, B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kiskarácsony – Nagykarácsony</th>
                          <td className="py-3 pr-4 align-top">Violino – V.cello duó, Ildikónak, Anikónak</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szonett és Rondó</th>
                          <td className="py-3 pr-4 align-top">(oboa, zongora) (6 perc)</td>
                          <td className="py-3 pr-4 align-top">1985, B: 1989</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Poéma</th>
                          <td className="py-3 pr-4 align-top">szólófuvola, zongorakísérettel (4 perc)</td>
                          <td className="py-3 pr-4 align-top">1986, B: 1989</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Divertimento</th>
                          <td className="py-3 pr-4 align-top">kürtre és zongorára</td>
                          <td className="py-3 pr-4 align-top">1990 (1960), B: 1990 12 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Poemphantasie SW</th>
                          <td className="py-3 pr-4 align-top">für V.cello und Klavier</td>
                          <td className="py-3 pr-4 align-top">1992</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Duo</th>
                          <td className="py-3 pr-4 align-top">pour Alto et Contrebasse</td>
                          <td className="py-3 pr-4 align-top">1994, B: 1994 10 25</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gyermektavasz</th>
                          <td className="py-3 pr-4 align-top">2 tételben (lassú – gyors), szóló fuvolára, zongorakísérettel (5.30 perc)</td>
                          <td className="py-3 pr-4 align-top">1996, B: 1996 12 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Für Oliver Csongor</th>
                          <td className="py-3 pr-4 align-top">hegedűre – zongorára (1.30 perc)</td>
                          <td className="py-3 pr-4 align-top">1997</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Lullaby</th>
                          <td className="py-3 pr-4 align-top">hegedűre, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Fantázia</th>
                          <td className="py-3 pr-4 align-top">fuvolára – zongorára (népzenei zsánerkép 1951-ből)</td>
                          <td className="py-3 pr-4 align-top">1999. szept.- 2000. jan.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Régi ének (Ceglédről)</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel (Violának címzem, zongorára); gordonkára 1956; hegedűre 2003. február; egynemű karra 2003. február</td>
                          <td className="py-3 pr-4 align-top">1956, 2003. február</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Duó klarinétra és zongorára</th>
                          <td className="py-3 pr-4 align-top">átdolgozva a &quot;Vonószene&quot; c. műből</td>
                          <td className="py-3 pr-4 align-top">2003 (1952)</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Scherzo bagatell</th>
                          <td className="py-3 pr-4 align-top">zongorára, klarinétra</td>
                          <td className="py-3 pr-4 align-top">2004. február</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Largo esporivo(?)</th>
                          <td className="py-3 pr-4 align-top">gordonkára, zongorára</td>
                          <td className="py-3 pr-4 align-top">2006</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Népdal-parafrázis</th>
                          <td className="py-3 pr-4 align-top">V.cellóra – hegedűre</td>
                          <td className="py-3 pr-4 align-top">2006</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Magos kősziklának</th>
                          <td className="py-3 pr-4 align-top">hegedűre, zongora-kísérettel</td>
                          <td className="py-3 pr-4 align-top">2006</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kis kamaradarabok</th>
                          <td className="py-3 pr-4 align-top">Ildikó születésnapjára; 1., 2. hegedű, zongorakísérettel; 1., 2. hegedű, kíséret nélkül; Fuvola (furulya) – hegedű; Fuvola, z. kísérettel</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hegedű, z. kísérettel</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2008</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Tavaszi szél</th>
                          <td className="py-3 pr-4 align-top">oboára, zongorakísérettel, Ági Unokámnak</td>
                          <td className="py-3 pr-4 align-top">2010.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karácsonyi öröm</th>
                          <td className="py-3 pr-4 align-top">szóló hegedű, zongorakísérettel I., II. tételben</td>
                          <td className="py-3 pr-4 align-top">2010. december 18.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hull a hó</th>
                          <td className="py-3 pr-4 align-top">hegedű, zongora, Ildikónak</td>
                          <td className="py-3 pr-4 align-top">2011. január 3.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karakterek</th>
                          <td className="py-3 pr-4 align-top">zongorára – fuvolára, 5 tétel (masszív panelek maszkban, MPM)</td>
                          <td className="py-3 pr-4 align-top">2011. március – április</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Táncos dal</th>
                          <td className="py-3 pr-4 align-top">oboaszóló, zongorakísérettel, Ági unokámnak, zeneiskolai növendékeknek</td>
                          <td className="py-3 pr-4 align-top">2012. október 20.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Csángó népdal</th>
                          <td className="py-3 pr-4 align-top">oboára, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2013. február 10.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Bagatell</th>
                          <td className="py-3 pr-4 align-top">oboára, zongorakísérettel, Ági születésnapjára</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.2. Trió</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szonatina</th>
                          <td className="py-3 pr-4 align-top">klasszikus stílusban, 1., 2., 3. szóló hegedűre</td>
                          <td className="py-3 pr-4 align-top">1951. XII.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Trio</th>
                          <td className="py-3 pr-4 align-top">Vl.1., Vl.2., Pfte</td>
                          <td className="py-3 pr-4 align-top">1954</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Improvizáció</th>
                          <td className="py-3 pr-4 align-top">2 tételben I-II. 1., 2. Violino, Pfte, Partitura</td>
                          <td className="py-3 pr-4 align-top">1971</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karácsonyi dalok</th>
                          <td className="py-3 pr-4 align-top">Vlno. 1., 2., Vc.</td>
                          <td className="py-3 pr-4 align-top">1988</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Trió für drei Flőten</th>
                          <td className="py-3 pr-4 align-top">I., II., III., IV. tétel (11 perc)</td>
                          <td className="py-3 pr-4 align-top">1996, B: 1996 04 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Trió (Még azt mondják, nem illik)</th>
                          <td className="py-3 pr-4 align-top">1., 2. hegedűre, zongorára; A sárbogárdi z.isk. növendékeinek</td>
                          <td className="py-3 pr-4 align-top">2005 február</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Tavaszi szél</th>
                          <td className="py-3 pr-4 align-top">1., 2. hegedűre, zongorakísérettel; Ildikó növendékeinek</td>
                          <td className="py-3 pr-4 align-top">2011. április 10.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.3. Kvartett</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Scherzo</th>
                          <td className="py-3 pr-4 align-top">1., 2. Trp., 1., 2. T (??) Partitura, szólamok</td>
                          <td className="py-3 pr-4 align-top">1955</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rondó</th>
                          <td className="py-3 pr-4 align-top">vonósnégyesre, partitura, szólamanyag</td>
                          <td className="py-3 pr-4 align-top">1959</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rondó</th>
                          <td className="py-3 pr-4 align-top">(Fl., Ob., Clar. 1., 2.), partitura hiányzik</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kvartett</th>
                          <td className="py-3 pr-4 align-top">(1., 2. Violino, V.cello, Pforte) partitura + szólamok</td>
                          <td className="py-3 pr-4 align-top">1963, B: 1989 04 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">2 tétel 4 harsonára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1966, B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szonáta</th>
                          <td className="py-3 pr-4 align-top">2 tételben (Fl., Ob., Clar., Fg.) Partitura</td>
                          <td className="py-3 pr-4 align-top">1977</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Népi gyermekdalok kisegyüttesre</th>
                          <td className="py-3 pr-4 align-top">szoprán furulya (barokk fuvola), Alt furulya (barokk fuvola), V.cselló, zongora (A sárbogárdi zeneiskola növendékeinek, A. Kiss Mária tanárnőnek)</td>
                          <td className="py-3 pr-4 align-top">2005. május</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.4. Kvintett</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kvintett (Divertimento)</th>
                          <td className="py-3 pr-4 align-top">1., 2., 3. violino (violini), 1., 2. V.cello (V.celli); partitura, szólamok</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.5. Nagyobb létszámú együttesre írott mű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Vonósszvit</th>
                          <td className="py-3 pr-4 align-top">vonós-zenekarra (partitura)</td>
                          <td className="py-3 pr-4 align-top">1953</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kis Toronyzene</th>
                          <td className="py-3 pr-4 align-top">rézfúvós kamaraegyüttesre (partitura)</td>
                          <td className="py-3 pr-4 align-top">1955</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Fejér megyei népdalok</th>
                          <td className="py-3 pr-4 align-top">zenekarra, énekkar nélkül, partitura</td>
                          <td className="py-3 pr-4 align-top">1972</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szeptett</th>
                          <td className="py-3 pr-4 align-top">(Fl. 1., 2., Clar. 1., 2., Vo., Vc., Pfte.)</td>
                          <td className="py-3 pr-4 align-top">2010. X. 6. (Kezdés: 2007)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.6. Szimfonikus könnyűzene, jazz együttesre írott mű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Moment, Ritmus</th>
                          <td className="py-3 pr-4 align-top">szimfonikus könnyűzene (zenekari partitura)</td>
                          <td className="py-3 pr-4 align-top">1962</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Az 1964-es Tokiói Olimpiáról szóló film kísérőzenéje (??)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kockajáték (??)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Bevezetés (könnyűzene)</th>
                          <td className="py-3 pr-4 align-top">Partitura</td>
                          <td className="py-3 pr-4 align-top">1965</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Concerto in Jazz</th>
                          <td className="py-3 pr-4 align-top">(partitura)</td>
                          <td className="py-3 pr-4 align-top">1966</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Concerto in Jazz</th>
                          <td className="py-3 pr-4 align-top">hegedűre, kisegyüttesre, zongorakivonatos partitura</td>
                          <td className="py-3 pr-4 align-top">2011. február</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">4.7. Egyéb kamarazenei mű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Megrakják a tüzet</th>
                          <td className="py-3 pr-4 align-top">szóló fuvolára, vagy csellóra, kis-zenekari kísérettel (Ceglédi Z.isk. növendékeknek) Partitura, szólamanyag</td>
                          <td className="py-3 pr-4 align-top">1958</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Felszántom a császár udvarát</th>
                          <td className="py-3 pr-4 align-top">4 (kamara) zenekarra (partitura)</td>
                          <td className="py-3 pr-4 align-top">1977</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Adagio</th>
                          <td className="py-3 pr-4 align-top">(szóló gordonka, 4 hegedű, 2 brácsa, 2 gordonka, gordon)</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion Item 5 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(4)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>SZÓLÓ HANGSZERES MŰ</span>
            <span className="text-slate-800">
              {openItems[4] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[4] ? "h-auto" : "max-h-0"}`}
          >
            {openItems[4] && (
              <div className="pt-1 pb-8">
                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">5.1.1. Szonáta</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szecessziós szonáta, zongorára I.</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2014</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szecessziós szonáta, zongorára II.</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2014</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szecessziós szonáta, III., 3 tétel</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2015 V. 20. – VII. 18.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szecessziós szonáta IV., 3 tétel</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2015. szeptember 30.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szecessziós szonáta V.</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2016. augusztus 15.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">5.1.2. Rondó</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Öt rondó zongorára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">B: 1990 12 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rondó(k) zongorára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1950. XI., 1950. X. 21</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rondó in G</th>
                          <td className="py-3 pr-4 align-top">négykezes zongorára (3 perc), egy régi rondótémára (másolat)<br />átírás: a Zongoradarabok zeneiskolásoknak c. füzetből</td>
                          <td className="py-3 pr-4 align-top">1997</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">5.1.3. Etűd</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Etűdenszvit I.-II. Thema con variazioni für Klavier</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">5.1.4. Egyéb zongoramű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Primus</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1935</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Lírai keringő</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1939</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A vonat</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1943</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Romantikus etűd</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1947</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Impresszionista etűd</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1948</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Etűdszvit 1948</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1948</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Etűdszvit 1949</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1949</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Eklektikus etűd</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1951</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szonátarondó zongorára (Zeneakadémiai dolgozat)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1951 11 29</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Barokk fúgák zongorára (Zeneakadémiai dolgozatok) in G, in C, in d</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1953</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Pantomim zongoradarab</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1960</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ferdinandus (vis animi immensa) Motívum-variációk zongorára</th>
                          <td className="py-3 pr-4 align-top">(13 perc)</td>
                          <td className="py-3 pr-4 align-top">1997</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">3 szólamú invenció, e-moll, hegedűre (fuvola, oboa) – zongorára</th>
                          <td className="py-3 pr-4 align-top">(J. S. Bach)</td>
                          <td className="py-3 pr-4 align-top">1998. szeptember</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Praeludium, a Wohltemp. Kl. I.-ből, cisz moll, J. S. Bach</th>
                          <td className="py-3 pr-4 align-top">hegedűre – zongorára (orgonára) in g</td>
                          <td className="py-3 pr-4 align-top">1998. október</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Három karakterdarab négykezes zongorára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2004</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kalotaszegi tánc 2 tétel (lassú, gyors), négykezes zongorára</th>
                          <td className="py-3 pr-4 align-top">szóló zongorára (cca 2.30 perc) (kis változtatással)</td>
                          <td className="py-3 pr-4 align-top">1996 B: 1996 12 12<br />2004. december 30.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Eszter Királynő Tánc az örömünnepen, zongorára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2009. szeptember</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zongoradarabok zeneiskolásoknak I., II., III. kötet</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Négykezes zongoradarabok zeneiskolásoknak</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2010. július</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Imbolygás diktatúrában (?)</th>
                          <td className="py-3 pr-4 align-top">zongorára</td>
                          <td className="py-3 pr-4 align-top">2011. január 27.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Álmok-álma és tánc, zongoradarab 4 kézre (Edinának, Tamásnak)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2012. július 18.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zene négy kézre (négykezes zongorára)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2013</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">4 SYMBOLUM zongorára (válogatások)</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">2013. július 12.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Négykezes zongoradarabok</th>
                          <td className="py-3 pr-4 align-top">Még azt mondják, Cickom-cickom, Szegény legény vagyok én, stb.</td>
                          <td className="py-3 pr-4 align-top">2014</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">9 karakterdarab</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gyermekdal</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion Item 6 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(5)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>ÉNEKHANGRA ÍRT MŰVEK</span>
            <span className="text-slate-800">
              {openItems[5] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems[5] ? "h-auto" : "max-h-0"}`}
          >
            {openItems[5] && (
              <div className="pt-1 pb-8">
                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.1.1. Férfi kórusra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Mens sana</th>
                          <td className="py-3 pr-4 align-top">énekkari kánon (3 perc), zongora-kísérettel, zenekari kísérettel</td>
                          <td className="py-3 pr-4 align-top">1994 B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szegény vagyok</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2007</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Boldog, szomorú dal</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel, Kosztolányi Dezső versére</td>
                          <td className="py-3 pr-4 align-top">2008</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.1.2. Női kórusra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kiskarácsony – Nagykarácsony</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, növ. szimfonikus zenekari kísérettel</td>
                          <td className="py-3 pr-4 align-top">1976. november</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karácsonyi dalok</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, vonószenekarra és orgonára (partitura)</td>
                          <td className="py-3 pr-4 align-top">1986</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Sej, veres az ég lefelé</th>
                          <td className="py-3 pr-4 align-top">női karra, zenekari kísérettel<br />népzenei feldolgozás női karra, zongorakísérettel és egyszerűbb változattal (4.20 perc)<br />szóló énekre, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">1955<br />1997 B: 1999 02 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A két lány</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (5 perc)</td>
                          <td className="py-3 pr-4 align-top">1998 szeptember B: 1999 02 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A pogány király leánya</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, zongorakísérettel (9 perc)</td>
                          <td className="py-3 pr-4 align-top">2003. július 11.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Elment a madárka</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, zongorakísérettel (5.30 perc)</td>
                          <td className="py-3 pr-4 align-top">2003. július</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Körösfői kertek alatt</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2004. november</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Lavalava-szigeten</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2009. július</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Csillagom, révészem</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (3.30 perc), hegedűre, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">1997. október B: 1999 02 24<br />2009</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zavaros a Nyárád</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2013. november 21.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ellopták szívemet, dal</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.1.3. Vegyeskarra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Negyvennyolcas dalok (A faluban vígan muzsikálnak)</th>
                          <td className="py-3 pr-4 align-top">egyszólamú énekkarra (vegyes) Kurdics József szövege – dallama, zongora-kíséret: Borlói Rudolf</td>
                          <td className="py-3 pr-4 align-top">1960</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Magyar Népdalok</th>
                          <td className="py-3 pr-4 align-top">énekhangra (férfi – női karra), vonószenekari kísérettel + zongora (Partitura + zenekari anyag)</td>
                          <td className="py-3 pr-4 align-top">1962</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A kút</th>
                          <td className="py-3 pr-4 align-top">(szimbolikus táncjáték) énekkarra (vegyeskar), zenekarra partitura + zongorakivonat</td>
                          <td className="py-3 pr-4 align-top">1966</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Győzelmes élet</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Motetta</th>
                          <td className="py-3 pr-4 align-top">(bariton szóló, vegyeskar, zenekar, partitura)</td>
                          <td className="py-3 pr-4 align-top">1988 B: 1990 06 20</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Preces</th>
                          <td className="py-3 pr-4 align-top">vegyeskarra, orgonára, latin szöveg (3 perc)<br />Patrona Hungariae ora pro Taldorf<br />Ave Maria ora pro Hungariae</td>
                          <td className="py-3 pr-4 align-top">1993. április<br />1997. december</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.1.4. Gyermekkarra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A Tündérkert aranyalmája</th>
                          <td className="py-3 pr-4 align-top">Zenés mesejáték zenéje (M. Rádió) (4+1 gyermekdal) +1 Csillagocska és a Dajka dal, zongorakísérettel szólóhangokra és gyermekkarra, zenekari kísérettel partitura, zongorakivonat</td>
                          <td className="py-3 pr-4 align-top">1957</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gyermekdalok iskolai énekkarra</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel (6 perc)</td>
                          <td className="py-3 pr-4 align-top">1991</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A kis lovam táncdal, gyermekkarra (egyszólamban)</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel Víz Péter versére, a sárbogárdi gyermekek kórusának A szöveg és a dallam kb. 4 és fél évtizeddel korábbi</td>
                          <td className="py-3 pr-4 align-top">2006. március 18.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kis kece</th>
                          <td className="py-3 pr-4 align-top">egynemű kar (I., II. szólamra), zongorakísérettel Az eredeti zenekar-kíséretes darab (1959) zongora-átirata</td>
                          <td className="py-3 pr-4 align-top">2010. január</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Harkály apó meséi</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (szólóénekre), zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2010. április 2.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.1.5. Egyéb kórusmű</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kiskantáták</th>
                          <td className="py-3 pr-4 align-top">népi dallamokra és komponált zenére, kis-zenekari kísérettel</td>
                          <td className="py-3 pr-4 align-top">1957</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szent István énekek</th>
                          <td className="py-3 pr-4 align-top">(orgona)</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.2.1. Férfi kórusra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A kínzás</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, Agerija Barto szövege, Weöres S. fordítása partitura</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Halotti búcsúztató</th>
                          <td className="py-3 pr-4 align-top">férfikarra</td>
                          <td className="py-3 pr-4 align-top">1962</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A fa</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, Tóth Árpád versére (partitura)</td>
                          <td className="py-3 pr-4 align-top">1975</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Pater Noster</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (3 perc)</td>
                          <td className="py-3 pr-4 align-top">1993 B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Életút</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (2 perc)</td>
                          <td className="py-3 pr-4 align-top">1999. május</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Felelet</th>
                          <td className="py-3 pr-4 align-top">egynemű kórusra (3.15 perc)</td>
                          <td className="py-3 pr-4 align-top">2003</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Jóslat, egynemű karra</th>
                          <td className="py-3 pr-4 align-top">vers: Vörösmarty (2 perc) és segítő zongorakíséret a szólam betanulásához</td>
                          <td className="py-3 pr-4 align-top">2003. június 16.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Mandatum novum</th>
                          <td className="py-3 pr-4 align-top">egynemű karra</td>
                          <td className="py-3 pr-4 align-top">2010. december 7.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Megkötöm lovamat</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, saját szövegre, születésnapra, esküvőre, zongorakísérettel is<br />Vno., oboa, pf., ének</td>
                          <td className="py-3 pr-4 align-top">2011. március 1.<br />2013. január 21.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Pamflet</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (2 perc)</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.2.2. Női kórusra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ave Maria</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (2.30 perc), kézirat Lovrek?, Spronken?</td>
                          <td className="py-3 pr-4 align-top">1991 B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Karácsonyi dalok</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, a capella</td>
                          <td className="py-3 pr-4 align-top">1996</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A négy évszak</th>
                          <td className="py-3 pr-4 align-top">egynemű karra, saját szövegre, tételek:<br />Tavasz (2.30 perc)<br />Nyár (2.15 perc)<br />Ősz (3.30 perc)<br />Tél (2.30 perc) (Összesen 10.45 perc)</td>
                          <td className="py-3 pr-4 align-top">1997. február B: 1997 06 03</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Bujdosik az árva madár</th>
                          <td className="py-3 pr-4 align-top">egynemű (női) karra (3.15 perc) (a gulyás)</td>
                          <td className="py-3 pr-4 align-top">1997. szeptember</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Tanulj és taníts</th>
                          <td className="py-3 pr-4 align-top">női karra, kórusmű zongoradarab átírásából (belső használatra)</td>
                          <td className="py-3 pr-4 align-top">2004. március</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.2.3. Vegyeskarra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A kék tenger partján</th>
                          <td className="py-3 pr-4 align-top">vegyeskarra, Ady Endre versére, partitura (2.40 perc)</td>
                          <td className="py-3 pr-4 align-top">1975 B: 1997 06 03</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Az idegen</th>
                          <td className="py-3 pr-4 align-top">vegyeskarra, Ch. Baudelaire versére, ford.: Szabó Lőrinc (2.30 perc)</td>
                          <td className="py-3 pr-4 align-top">1975 B: 1997 06 03</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A föld alatt</th>
                          <td className="py-3 pr-4 align-top">vegyeskarra, S, A, T, B. Tóth Árpád versére, partitura + szólamok</td>
                          <td className="py-3 pr-4 align-top">1975</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.2.4. Gyermekkarra</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Erdei mese</th>
                          <td className="py-3 pr-4 align-top">(Harkály apó meséi) (Víz Péter versére) Átdolgozás: 1985, akkor kapta új címét (Partitura)</td>
                          <td className="py-3 pr-4 align-top">1958</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A kis lovam</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (Víz P. szövege) (2 perc)</td>
                          <td className="py-3 pr-4 align-top">1991</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Bagatell</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Én is vagyok</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gyermekdalok Szalay Borbála verseire</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.3. Dal hangszeres kísérettel</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Úgy várnék rád</th>
                          <td className="py-3 pr-4 align-top">sanzon, zongorakísérettel szöveg: Víz Péter</td>
                          <td className="py-3 pr-4 align-top">1948</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Chanson sentimento zongorára</th>
                          <td className="py-3 pr-4 align-top">-</td>
                          <td className="py-3 pr-4 align-top">1948</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Délután 5-kor</th>
                          <td className="py-3 pr-4 align-top">táncdal, zongorakísérettel Szöveg: Víz Péter</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Nálad nélkül</th>
                          <td className="py-3 pr-4 align-top">dal, Tompa Mihály versére, zongorakísérettel (5 perc)<br />vonósnégyes kísérettel (partitúra + szólamok) (5 perc)</td>
                          <td className="py-3 pr-4 align-top">1957<br />1959</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Esküvői ének</th>
                          <td className="py-3 pr-4 align-top">dal, zongora-, vagy orgona-kísérettel, vagy a capella is</td>
                          <td className="py-3 pr-4 align-top">1959</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Mimi Pinson</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel (cca. 5.30 perc) Szöveg: Alfred de Musset, fordította: Kálnoky László</td>
                          <td className="py-3 pr-4 align-top">1960</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Alkonyatkor</th>
                          <td className="py-3 pr-4 align-top">lírai jelenet, női és férfi szólóra, zenekari kísérettel szöveg: Víz Péter (15 perc)</td>
                          <td className="py-3 pr-4 align-top">1961</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kinek ilyen, kinek olyan</th>
                          <td className="py-3 pr-4 align-top">lírai jelenet, 2 férfi szólóra és vegyeskarra, zenekari kísérettel (10 perc)</td>
                          <td className="py-3 pr-4 align-top">1961</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Etűdök énekhangra – zongorára</th>
                          <td className="py-3 pr-4 align-top">(oboán is előadható)</td>
                          <td className="py-3 pr-4 align-top">1962, 1964, 1965, 1966</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Magyar Népi Bordalok</th>
                          <td className="py-3 pr-4 align-top">énekhangra, népizenekarra (Partitura)</td>
                          <td className="py-3 pr-4 align-top">1964</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Cigánytánc</th>
                          <td className="py-3 pr-4 align-top">énekkarra, zenekari kísérettel (Partitura)</td>
                          <td className="py-3 pr-4 align-top">1964</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Jó Igazság</th>
                          <td className="py-3 pr-4 align-top">tercett (S, A, T), zongorakísérettel (szöveg: Paul Eluard)</td>
                          <td className="py-3 pr-4 align-top">1964</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ildikónak Gyermekdalok, népdalok</th>
                          <td className="py-3 pr-4 align-top">zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">1966-1969</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A Kincs</th>
                          <td className="py-3 pr-4 align-top">dal, zongora-kísérettel (szöveg: Kerkay Andorné Nagy Erzsébet)</td>
                          <td className="py-3 pr-4 align-top">1970</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Népi zene I-X.</th>
                          <td className="py-3 pr-4 align-top">énekhangra, vonósnégyes (Vl. I., Va ??, Vc., Cb.) (partiturák) Botos Józsefnek, a Táncház igazgatójának megőrzésre kísérettel átadtam 2000. október 16-án, Szfv-on.</td>
                          <td className="py-3 pr-4 align-top">1971-2-3</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Búcsúzóra</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel Borlói F.-nek, Kanada</td>
                          <td className="py-3 pr-4 align-top">1982</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Nataschas Worte (???)</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel (német szövegű)</td>
                          <td className="py-3 pr-4 align-top">1983</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hírért, dicsőségért</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel, Juhász Gyula versére</td>
                          <td className="py-3 pr-4 align-top">1987 (1952)</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gloriosus cultor Dei</th>
                          <td className="py-3 pr-4 align-top">ének – orgona</td>
                          <td className="py-3 pr-4 align-top">1988 B:</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Szent István Királyhoz</th>
                          <td className="py-3 pr-4 align-top">ének – orgona</td>
                          <td className="py-3 pr-4 align-top">1988 B:</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ave beate Rex Stephane</th>
                          <td className="py-3 pr-4 align-top">ének – orgona</td>
                          <td className="py-3 pr-4 align-top">1988 B:</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Az úton</th>
                          <td className="py-3 pr-4 align-top">ének – zongora (3.30 perc)</td>
                          <td className="py-3 pr-4 align-top">1989 B: 1990 12 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zsoltár</th>
                          <td className="py-3 pr-4 align-top">ének – zongora (Weöres Sándor versére) (4.40 perc)</td>
                          <td className="py-3 pr-4 align-top">1989 B: 1990 12 12</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Vonj sugaradba</th>
                          <td className="py-3 pr-4 align-top">ének – zongora (Weöres Sándor versére) (5.30 perc)</td>
                          <td className="py-3 pr-4 align-top">1991 B: 1994 10 24</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Pillanatélmény</th>
                          <td className="py-3 pr-4 align-top">ének – zongora</td>
                          <td className="py-3 pr-4 align-top">1992</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gazsó – Adler</th>
                          <td className="py-3 pr-4 align-top">énekkettős, z. kísérettel</td>
                          <td className="py-3 pr-4 align-top">-</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Hat Pilinszky dal zongorakísérettel</th>
                          <td className="py-3 pr-4 align-top">Introitusz (3.30 perc)<br />Örökkön – örökké (3 perc)<br />Én gyenge voltam (2.30 perc)<br />A többi kegyelem (3 perc)<br />Őszi vázlat (2.30 perc)<br />Ne félj (3.30 perc) (Összesen 18 perc)</td>
                          <td className="py-3 pr-4 align-top">1996 B: 1996 09 11</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Enigma</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel, német szövegre (2 perc)</td>
                          <td className="py-3 pr-4 align-top">1997. szeptember</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Lélektükör</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel (cca. 5 perc) szöveg: Babits Mihály (Psychoanalysis Christiana)</td>
                          <td className="py-3 pr-4 align-top">2001. július</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Estefelé</th>
                          <td className="py-3 pr-4 align-top">dal, z. kísérettel (1.40 perc)</td>
                          <td className="py-3 pr-4 align-top">2003. január</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Evangélium</th>
                          <td className="py-3 pr-4 align-top">egynemű karra (3 perc)</td>
                          <td className="py-3 pr-4 align-top">2003. május</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Katona vagyok én</th>
                          <td className="py-3 pr-4 align-top">dal, oboa – zongora kísérettel</td>
                          <td className="py-3 pr-4 align-top">2008. augusztus 13.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Elégia</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2008. augusztus 24.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Serkenj fel …</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel (Ildikó kérésére)</td>
                          <td className="py-3 pr-4 align-top">2011. május 22.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Ádventi ének</th>
                          <td className="py-3 pr-4 align-top">1., 2., 3. hegedűre, énekhangra, zongorakísérettel, Ildikó kérésére</td>
                          <td className="py-3 pr-4 align-top">2011.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">3 virágének</th>
                          <td className="py-3 pr-4 align-top">énekhangra, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2013. október 15.</td>
                        </tr>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Parapsalmus 55</th>
                          <td className="py-3 pr-4 align-top">dal, zongorakísérettel</td>
                          <td className="py-3 pr-4 align-top">2017. április</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-sm font-semibold tracking-wide text-slate-700 mb-2">6.4. Dal hangszeres kíséret nélkül</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-left text-slate-800 border-collapse">
                      <thead>
                        <tr className="text-[11px] uppercase tracking-wide text-slate-500">
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Mű címe</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">Egyéb információk</th>
                          <th scope="col" className="py-2 pr-4 font-medium border-b border-slate-200 align-top">A mű elkészülésének/bemutatásának időpontja</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="group hover:bg-slate-50 transition-colors">
                          <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">3 Francia népdal</th>
                          <td className="py-3 pr-4 align-top">(gyermekdal) S, A, T, B, szöveg: Víz P., Víz L., Várhelyi Antal (Partit.)</td>
                          <td className="py-3 pr-4 align-top">1960</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Accordion Item 7 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(6)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>EGYÉB ZENEMŰ</span>
            <span className="text-slate-800">
              {openItems[6] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[6] ? "max-h-[2000px]" : ""
              }`}
          >
            <div className="pb-5">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Mű címe</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Egyéb információk</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Időpontja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td colSpan={3} className="pt-4 pb-2 font-semibold text-slate-700">
                      Táncjáték-zenék Partiturák
                    </td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Dinnyelopás</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">1955</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Plakátragasztók</th>
                    <td className="py-3 pr-4 align-top">(átalakítani)</td>
                    <td className="py-3 pr-4 align-top">1958</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Cigányok</th>
                    <td className="py-3 pr-4 align-top">(átalakítani)</td>
                    <td className="py-3 pr-4 align-top">1956</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">J. S. Bach f-moll 3 szólamú invenció szerkezeti áttekintése</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">1995</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A &ldquo;Kedvenc&rdquo;</th>
                    <td className="py-3 pr-4 align-top">Ildikónak, nevenapjára, zongorára</td>
                    <td className="py-3 pr-4 align-top">1997. március 10.</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Kiskarácsony, Nagykarácsony</th>
                    <td className="py-3 pr-4 align-top">Ildikónak és M.vásári növ.-nek</td>
                    <td className="py-3 pr-4 align-top">1999</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td colSpan={3} className="pt-4 pb-2 font-semibold text-slate-700">
                      Apró mindenfélék
                    </td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rudolfnak</th>
                    <td className="py-3 pr-4 align-top">(Vejemnek)</td>
                    <td className="py-3 pr-4 align-top">2000 Karácsonyán</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Bagatell</th>
                    <td className="py-3 pr-4 align-top">zongorára (2 énekszólamra, vagy anélkül is) (2.40 perc)</td>
                    <td className="py-3 pr-4 align-top">2002</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Zenei hangkép három fuvoláslányról</th>
                    <td className="py-3 pr-4 align-top">1., 2., 3. fuvolára, énekhanggal</td>
                    <td className="py-3 pr-4 align-top">2004. január</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Cherbourg-i esernyők</th>
                    <td className="py-3 pr-4 align-top">ellenpontozás-gyakorlat</td>
                    <td className="py-3 pr-4 align-top">2008. augusztus 25.</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">10 kétszólamú gyakorlat</th>
                    <td className="py-3 pr-4 align-top">(Ildinek, Áginak)</td>
                    <td className="py-3 pr-4 align-top">2013 április 11.</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Solfeggio</th>
                    <td className="py-3 pr-4 align-top">(3 hangszerre v. énekhangra)</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Tavaszi szél…</th>
                    <td className="py-3 pr-4 align-top">(bármilyen hangszerre, énekre, igen egyszerű, zong.-kísérettel igényesebben)</td>
                    <td className="py-3 pr-4 align-top">2013 04 20</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Óda (&ldquo;Jöjjetek énekelni&rdquo;)</th>
                    <td className="py-3 pr-4 align-top">óda &ldquo;Az új iskolaigazgató&rdquo; című gyermekoperából, kórusra (szólóra) – zongorára</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Tíz kétszólamú gyakorlat</th>
                    <td className="py-3 pr-4 align-top">bármilyen hangszerre</td>
                    <td className="py-3 pr-4 align-top">2013</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Accordion Item 8 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(7)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>ZENEMŰ SZÖVEGE</span>
            <span className="text-slate-800">
              {openItems[7] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[7] ? "max-h-[800px]" : ""
              }`}
          >
            <div className="pb-5">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Mű címe</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Egyéb információk</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Időpontja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Der Prophet Jona (?)</th>
                    <td className="py-3 pr-4 align-top">(Szövegkönyv saját összeállításban és néhány saját gondolattal magyarul és németül)</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Magyar Te Deum</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Rekviem</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Megkötöm lovamat</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A négy évszak</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Accordion Item 9 */}
        <div className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(8)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>TANULMÁNY, ELEMZÉS</span>
            <span className="text-slate-800">
              {openItems[8] ? (
                <ChevronUpIcon className="w-5 h-5" />
              ) : (
                <ChevronDownIcon className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[8] ? "max-h-[600px]" : ""
              }`}
          >
            <div className="pb-5">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Mű címe</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Egyéb információk</th>
                    <th className="pb-3 pr-4 font-semibold text-slate-700 align-top">Időpontja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">Gondolatok a Magyar Himnuszról</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                  <tr className="group hover:bg-slate-50 transition-colors">
                    <th scope="row" className="py-3 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">A magyar néplélek tükröződése a magyar zenében</th>
                    <td className="py-3 pr-4 align-top">-</td>
                    <td className="py-3 pr-4 align-top">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Works;
