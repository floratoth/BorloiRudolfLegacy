"use client";
import Image from "next/image";

export default function Home() {

  const events = [
    ["1935", "Első gyermekkori zongoradarabjának, a Primus-nak megkomponálása"],
    ["1948-1954", "Zeneakadémiai tanulmányok"],
    ["1948", "Az Úgy várnék rád című sanzon megkomponálása"],
    ["1950", "Öt rondó zongorára című kompozíció megírása"],
    ["1953", "Vonósszvit megkomponálása"],
    ["1957", "A Nápolyi kalmárok című két-felvonásos vígopera bemutatása"],
    ["1959", "Az új iskolaigazgató című gyermekopera bemutatása"],
    ["1960", "A Mimi Pinson című dal megkomponálása"],
    ["1963", "A vonós – zongora kvartett megkomponálása"],
    ["1972", "Az Alba Regia oratórium megkomponálása"],
    ["1973", "A Missa numerosa megkomponálása"],
    ["1973", "Zenekari szvit megkomponálása"],
    ["1974", "A Kvart Mise megkomponálása"],
    ["1974", "Fuvolaverseny megkomponálása"],
    ["1979", "I. Zongoraverseny megkomponálása"],
    ["1984", "A Patrokli Messe megkomponálása"],
    ["1987", "Orgonaverseny megkomponálása"],
    ["1991", "Az Ave Maria kórusmű megkomponálása"],
    ["1993", "A Missa Cantarella megkomponálása"],
    ["1994", "A brácsa – nagybőgő duó megkomponálása"],
    ["1995", "Az Organum Episcopale megkomponálása és bemutatása"],
    ["1996", "A 6 Pilinszky dal megkomponálása és bemutatása"],
    ["1996", "Fuvolatrió megkomponálása"],
    ["1997", "A Ferdinandus című zongoramű megkomponálása"],
    ["1997", "A Csillagom, révészem című kórusmű megkomponálása"],
    ["2000 .11. 18", "A Magyar Te Deum bemutatása"],
    ["2001", "A Barokk Ave Maria megkomponálása"],
    ["2003 .01 .12", "A Rekviem bemutatása"],
    ["2005", "A II. zongoraverseny komponálásának befejezése"],
    ["2011", "A hegedűverseny megkomponálása"],
    ["2014-2016", "Az 5 szecessziós zongora-szonáta megkomponálása"],
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Főoldal Cím */}
      <header className="mb-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Borlói Rudolf</h1>
        <p className="text-xl mb-1">zeneszerző, tanár, karmester életművének fontosabb eseményei</p>
        <p className="text-xl">(1927–2019)</p>
      </header>

      {/* Középre igazított kép */}
      <div className="mb-8">
        <Image
          src="/images/F_20.jpg"
          alt="Borlói Rudolf"
          width={250}   
          height={400}     
          className="mx-auto rounded-sm filter saturate-50 hue-rotate-[-20deg] contrast-105"
        />
      </div>

      {/* Életmű felsorolás */}
      <section className="max-w-3xl w-full mb-16">
        <ul className="divide-y divide-gray-300">
          {events.map(([date, text]) => (
            <li
              key={date + text}
              className="py-3 grid grid-cols-[6rem,1fr] gap-6"
            >
              {/* Fixed-width, left-aligned date column */}
              <span className="justify-self-start">{date}</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>
      
    </main>
  );
}
