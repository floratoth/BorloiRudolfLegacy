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


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  1. Mise
                  {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Mű címe
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Egyéb információk
                    </th>
                    <th scope="col" className="px-6 py-3">
                      A mű elkészülésének/bemutatásának időpontja
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Mise (Missa Numerosa)
                    </th>
                    <td className="px-6 py-4">
                      kétféle hangszerelésben
                    </td>
                    <td className="px-6 py-4">
                      1973
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Kvart mise
                    </th>
                    <td className="px-6 py-4">
                      (Kyrie, Gloria, Sanctus, Agnus Dei) orgona-kísérettel (8 perc);
                      magyar és latin szöveggel
                    </td>
                    <td className="px-6 py-4">
                      1974
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Patrokli Messe
                    </th>
                    <td className="px-6 py-4">
                      (Kyrie, Gloria, Credo, Sanctus, Agnus Dei), vegyeskarra;
                      zenekari változat (partitura) és orgona változat (partitura)
                    </td>
                    <td className="px-6 py-4">
                      1983-84
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Missa Cantarella
                    </th>
                    <td className="px-6 py-4">
                      (Kyrie, Gloria, Credo, Sanctus, Agnus Dei) egynemű karra
                    </td>
                    <td className="px-6 py-4">
                      1993
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  2. Oratórium
                  {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Mű címe
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Egyéb információk
                    </th>
                    <th scope="col" className="px-6 py-3">
                      A mű elkészülésének/bemutatásának időpontja
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Alba Regia
                    </th>
                    <td className="px-6 py-4">
                      oratórium, zongorakivonat az énekkar betanításához, partitura
                    </td>
                    <td className="px-6 py-4">
                      1971-72
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Psalmus Humanus
                    </th>
                    <td className="px-6 py-4">
                      (Drámai oratórium) zongorakivonatos és énekkari partitura;
                      Hangszerelés: néhány ütem kész
                    </td>
                    <td className="px-6 py-4">
                      1991
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Magyar Te Deum
                    </th>
                    <td className="px-6 py-4">
                      szoprán – alt szólóra, egynemű karra, orgonára,
                      saját szöveg (cca. 24 perc)
                    </td>
                    <td className="px-6 py-4">
                      2000
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Rekviem
                    </th>
                    <td className="px-6 py-4">
                      Oratórium (37 perc) (partitura: zenekar, zongorakivonat)
                    </td>
                    <td className="px-6 py-4">
                      2001-2002
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                  3. Egyéb szakrális zene
                  {/* <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Mű címe
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Egyéb információk
                    </th>
                    <th scope="col" className="px-6 py-3">
                      A mű elkészülésének/bemutatásának időpontja
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Karácsonyi dal
                    </th>
                    <td className="px-6 py-4">
                      szakrális dal, zongora (orgona) kísérettel
                    </td>
                    <td className="px-6 py-4">
                      1963
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Harcban
                    </th>
                    <td className="px-6 py-4">
                      szakrális dal, zongora – orgona kísérettel
                    </td>
                    <td className="px-6 py-4">
                      -
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Csillagfényes csöndes éjjel
                    </th>
                    <td className="px-6 py-4">
                      francia karácsonyi ének, zongora – orgona kísérettel
                    </td>
                    <td className="px-6 py-4">
                      -
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Gloria
                    </th>
                    <td className="px-6 py-4">
                      szakrális dal, zongora (orgona) kísérettel
                    </td>
                    <td className="px-6 py-4">
                      1966
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Pater Noster
                    </th>
                    <td className="px-6 py-4">
                      dal zongora-, illetve orgona-kísérettel
                    </td>
                    <td className="px-6 py-4">
                      1986
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Organum episcopale
                    </th>
                    <td className="px-6 py-4">
                      (variáció és fuga), orgonára (11 perc)
                    </td>
                    <td className="px-6 py-4">
                      1995. okt.-nov.
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Dona Nobis Pacem
                    </th>
                    <td className="px-6 py-4">
                      szóló szopránra és egynemű karra;
                      J. S. Bach: Wohltemp. Kl. I. cisz-moll preludium átírása (3 perc)
                    </td>
                    <td className="px-6 py-4">
                      1998. szeptember
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Barokk Ave Maria
                    </th>
                    <td className="px-6 py-4">
                      két énekszólamra, zongorakísérettel (orgona) (2 perc)
                    </td>
                    <td className="px-6 py-4">
                      2001. augusztus 16.
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Recordare
                    </th>
                    <td className="px-6 py-4">
                      egynemű karra
                    </td>
                    <td className="px-6 py-4">
                      2004. november
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Ó, én édes jó Istenem
                    </th>
                    <td className="px-6 py-4">
                      székely imádság, egynemű karra
                    </td>
                    <td className="px-6 py-4">
                      2013. október 27.
                    </td>
                  </tr>
                </tbody>
              </table>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[1] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              You can use Material Tailwind by importing its components into your Tailwind CSS project.
            </div>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[2] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.
            </div>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[3] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
            </div>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[4] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
            </div>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[5] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
            </div>
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[6] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[7] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
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
            className={`max-h-0 overflow-hidden transition-all duration-300 ease-in-out ${openItems[8] ? "max-h-40" : ""
              }`}
          >
            <div className="pb-5 text-sm text-slate-500">
              Material Tailwind provides a quick and easy way to integrate modern UI components with Tailwind CSS.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Works;
