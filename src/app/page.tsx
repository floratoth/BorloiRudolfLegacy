"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {/* Főoldal Cím */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Borlói Rudolf</h1>
        <p className="text-xl mb-1">zeneszerző, tanár, karmester élete és munkássága</p>
        <p className="text-xl">(1927–2019)</p>
      </header>

      {/* Korai élet és tanulmányok */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Gyermekkor és tanulmányok</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Borlói Rudolf 1927. október 13-án második fiúként született egy katolikus polgári családba. Édesapja jogászember, édesanyja háztartásbeli volt.
          <br /><br />
          Már kisgyermekkorában rendkívüli vonzalmat mutatott a zene iránt. A zongora mágnesként hatott rá, sokszor éjfélig is gyakorolt, játszott, improvizált. A zenedarabok hallás utáni lejátszása természetes úton vezetett el a komponáláshoz. Már kisgyermekkorában is több zongora- és hegedűdarabot írt. Első darabja (Primus) 7 éves kora körül született, amikor még nem tudott kottát írni, de kapott segítséget: a helyi kántor lejegyezte művét. 8-9 éves korában kezdett hegedűt tanulni.
          <br /><br />
          Elemi iskoláit Békésen, középiskoláit Békésen, Nagyváradon és Németországban végezte. Középiskolás éveiben már zongoraetűdöket írt, amelyekkel saját technikáját is magas szintre fejlesztette. Tangóharmonikán is játszott. Sokszor szerepelt iskolai rendezvényeken, zenés esteken.
        </p>
      </div>

      {/* Akadémiai és szakmai kezdetek */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Akadémiai és szakmai kezdetek</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          1947 őszén Budapestre jött és beiratkozott a Budai Zeneakadémia Egyesület Zeneiskolájába. Viski János a zeneszerzés főtanszak növendékeinek évzáró hangversenyén figyelt fel rá, amint saját darabját játssza, s meghívta őt magához a Zeneakadémiára, ahova 1948-ban iratkozott be. Viski János és Szervánszky Endre voltak a zeneszerzés tanárai. De tanította többek között Ádám Jenő, Bárdos Lajos, Járdányi Pál, Kodály Zoltán is.
          <br /><br />
          A zeneakadémiai évek alatt megélhetéséről magának kellett gondoskodnia. Különböző művészegyüttesekben vállalt munkát: Vasas Szakszervezet, Telefongyár; korrepetitor volt a Madách Színháznál, vezényelt az Erkel Színházban és a Néphadsereg Színházban. Emellett házi-tanítóskodott és jazz-zongoristakent játszott szórakozóhelyeken.
        </p>
      </div>

      {/* Tanári és igazgatói pálya */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Tanári és igazgatói pálya</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          1954-ben diplomázott a Zeneakadémián. Ezután Ceglédre, az Állami Zeneiskolába nevezték ki tanárnak. 13 évet töltött ott, szolfézst, zeneelméletet, zeneirodalmi ismereteket, zongorát és kamarazenét tanított. Az akkori igazgatótól szabad kezet kapott, így ő maga írta meg a tananyagot.
          <br /><br />
          Egyedülálló eseménynek számított, hogy zeneiskolai bázison két-felvonásos vígoperát vitt színpadra. „A Nápolyi Kalmárok”-nak 1957-ben volt a bemutatója. Két évvel később újabb operát írt, egy egyfelvonásos gyermekoperát „Az új iskolaigazgató” címmel. Ezt Budapesten, Székesfehérváron és Dunaújvárosban is bemutatták.
          <br /><br />
          1967-ben kezdte meg igazgatói tevékenységét a székesfehérvári Állami Zeneiskolában. Irányítása alatt a Zeneiskola látványos fejlődésnek indult. Fontos szerepet játszott Fejér megye zeneiskolai tagiskolai hálózatának kialakításában. Az iskolai Vonószenekar, Koncert-fúvószenekar és a Népzenei Együttes munkájának kiemelt figyelmet szentelt.
          <br /><br />
          A házi és megyei zenei versenyek mellett meghonosodott az 1978-tól háromévente megrendezett, rendkívüli szervezési munkát igénylő Alba Regia Országos Kamarazenei Találkozó. Az ország legkiválóbb szakembereit, tanárait nyerte meg a zsűri elnökének és tagjainak.
        </p>
      </div>

      {/* Pedagógiai filozófia és eredmények */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Pedagógiai filozófia és eredmények</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Tudatosan alakította a tantestület arculatát. Minimálisra csökkentette az utazó tanárok, óraadók létszámát. Iskolavezetői filozófiája szerint, a zeneiskola tanárai többségének teljes állású, székesfehérvári lakosnak kell lenni. Az iskola által kinevelt, zenei pályára készülő és végzett növendékeket pedig vissza kell hozni Fehérvárra. Ezen szándékát az ezredfordulóig az iskola későbbi vezetői továbbra is követendő példának tartották. Így elérte, hogy zeneiskolai tanárképzőt, főiskolát végzett diplomás tanárok tanítottak alsó- és középfokon, de néha felsőfokon is a székesfehérvári Állami Zeneiskolában.
          <br /><br />
          Ezzel a törekvésével egyben biztosította a város 1967-től 1978-ig általa vezetett Szimfonikus Zenekarának állandó tagságát, azt a zeneiskola fehérvári lakóhellyel rendelkező tanáraival stabilizálta. Borlói Rudolfnak köszönhető a zenekar fejlesztése úgy, hogy akár havonta is adhattak koncerteket. Számos művet dirigált a Szimfonikus Zenekar élén; főleg barokk, klasszikus és romantikus műveket adtak elő.
        </p>
      </div>

      {/* Későbbi pálya és zeneszerzői munka */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Későbbi pálya és zeneszerzői munka</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Közel másfél évtizeden át,1994-ig tanított zeneelméletet és szolfézst docensként a Pécsi Zeneművészeti Főiskolán. Ezt követően is sokaknak segített a különböző zenei vizsgákra való felkészülésben.
          <br /><br />
          Alkotóművészi munkáját áttekintve megállapítható, hogy Borlói Rudolf szinte minden műfajban komponált; jelentős hatást tett rá Kodály és Bartók művészete. Misék, oratórium, két opera, szimfonikus zenekari művek, versenyművek, kórusművek, táncjátékok, filmzenék, hangszeres művek, dalok, népzenei feldolgozások kerültek ki a keze alól. Nagy sikert aratott például a Cigányvirtus táncjáték és a Sej, veres az ég lefelé (1955) című moldvai csángó dal feldolgozása. A zeneiskolás növendékek és a muzsikusok felkérésére számos zongora-, illetve más hangszeres darabot írt. Sok kamarazenei műnek is ő az alkotója.
          <br /><br />
          Kiemelkedő a Magyar Rapszódia (1953, zongorára és zenekarra), Vonós- és a Zenekari Szvit (1953), két zongoraverseny (1979, 1994), egy hegedűverseny, egy fuvolaverseny (1974), egy orgonaverseny (1987). Filmzenéket is komponált. Az 1960-as évektől a Filmgyár sok zenét rendelt tőle. Írt szimfonikus jazzt és szólódarabokat is. Mintegy 70 zenei blokkot komponált. Nagyon sikeres volt a &quot;Kockajáték&quot; című rövidfilmhez írt zenéje. Az 1964-ben a tokiói olimpiáról készített riportfilmben nagyrészt az ő zenéje szólalt meg.
        </p>
      </div>

      {/* Vokális és kórusművek */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Vokális és kórusművek</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Sok dalt komponált: Weöres Sándor, Pilinszky János, Ady Endre, Tóth Árpád, Vörösmarty Mihály, Vasadi Péter költeményei mellett saját verseire is. A Pilinszky-dalok 1996-ban születtek meg. Kórusművei közül kiemelkedik a Missa Cantarella (1993) és a Csillagom, révészem (1997).
          <br /><br />
          Már említett két operája a Nápolyi Kalmárok (1957) és Az új iskolaigazgató (1959).
        </p>
      </div>

      {/* Egyházi és zenekari művek */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Egyházi és zenekari művek</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Vallásos tárgyú művei között szerepel több szakrális dal, valamint miséi: Missa Numerosa (ritmusos mise, 1973), Kvart Mise (1974) egynemű karra, orgonakísérettel, Patrokli Messe (zenekari- és orgonaváltozat, 1984), amelynek Németországban volt a bemutatója. Oratóriumai is jelentős szerepet töltenek be gazdag életművében: az Alba Regia Oratórium (1972), a Magyar Te Deum (2000) és a Rekviem (2002), mely utóbbit Bobory Zoltán felkérésére, a Donnál elesett magyar katonák és a II. világháború valamennyi áldozatának emlékére alkotott. Szövegét és zenéjét egyaránt ő írta. Első ízben 2003-ban, második alkalommal pedig 2017-ban, a szerző jelenlétében mutatták be Székesfehérváron, mindkétszer Medveczky Ádám vezényletével.
          <br /><br />
          A felsorolt legjelentősebb műveken túl számos más zenedarabot is komponált, melyek közül csak példaként említjük a fuvolatriót és a Fa Nándor tiszteletére írt Ferdinandus című zongoraművét. Székesfehérváron több alkalommal bemutatták az iskola tanárai vonós Kvartettjét és zongorás Kvintettjét.
        </p>
      </div>

      {/* Örökség és személyiség */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Örökség és személyiség</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Mint zeneszerző, szinte élete végéig aktív maradt. Bizonyítják ezt az utóbbi években írt szecessziós szonáták és a következő idézet is: „Borlói Rudolf életének utolsó éveiben is szeretettel gondolt egykori székesfehérvári éveire, a gyerekekre, a tanításra, a zenélésre. Hálás szívvel gondolunk rá, és nem feledkezünk meg a sok-sok meghitt, vidám pillanatról, a zeneovis mesebemutatókról, koncertekről. Neki köszönhetjük, hogy sok kis zeneóvodás és zeneiskolai zongora szakos növendék együtt muzsikálta az általa komponált dallamokat, kíséreteket.” (A Tálos Edit Alapítvány vezetője, Bergerné Szőnyi Anna gondolatait idézve.)
          <br /><br />
          Igazi művészemberként minden iránt nyitott volt, minden érdekelte, kereste az Igazságot. Írt verseket, tanulmányokat. 1997-ben előadást tartott a Magyar néplélek tükröződése a magyar zenében címmel. 1998-ban felkérték egy Himnusz tanulmány megírására, amelyet magas színvonalon el is készített.
          <br /><br />
          Számos kitüntetése közül itt csak a következőket említjük: Népek Barátsága Liga Ezüst fokozata (1972), Alba Regia Emlékérem (1973), Pro Urbe Székesfehérvár (1986), Kiváló Munkáért kitüntetés (1987), Fejér megye Díszpolgára cím elnyerése (1996).
        </p>
      </div>

      {/* Személyes élet és búcsú */}
      <div className="mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Személyes élet és búcsú</h3>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Amíg egészsége engedte, sportos életet élt, szeretett úszni, kirándulni, kerékpározni. A zene iránti elkötelezettsége mellett is kisgyermekkora óta utolsó napjaiig elkísérte a technika iránti lelkesedése és az e téren is megmutatkozó adottságai: fantáziája, invenciózussága, kreativitása.
          <br /><br />
          Mindeközben megmaradt szerető szívű családfőnek, jó testvérnek, hűséges rokonnak és barátnak, határozott, de egyben emberséges vezetőnek, kollegának, példát mutató tanárnak. De sokat megőrizve gyermekkori önmagából, megmaradt ábrándos, kedves, időnként tréfálkozó, néha önfeledten nevető, szeretnivaló embernek is.
          <br /><br />
          Búcsúzunk egy igaz nagy magyar embertől, akinek egész élete, egyénisége, tudása, munkabírása, kitartása, zenei munkássága, zeneszeretete követendő példa mindenki számára. Büszkék vagyunk arra, hogy pályatársai, kollégái és barátai lehettünk.
          <br /><br />
          Nyugodjon békében!
        </p>
      </div>
    </main>
  );
}
