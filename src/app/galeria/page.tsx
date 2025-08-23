"use client";
import Image from "next/image";

const images = [
  "203.jpg",
  "203a.jpg",
  "205.jpg",
  "206.jpg",
  "207.jpg",
  "208.jpg",
  "209.jpg",
  "210.jpg",
  "211.jpg",
  "212.jpg",
  "213.jpg",
  "214.jpg",
];

export default function Gallery() {
  return (
    <section className="flex flex-wrap justify-center gap-6 p-8">
      {images.map((img, idx) => (
        <div key={idx} className="w-64 h-64 relative rounded shadow overflow-hidden">
          <Image
            src={`/images/galery/${img}`}
            alt={`Gallery image ${idx + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="256px"
            className="rounded"
          />
        </div>
      ))}
    </section>
  );
}
