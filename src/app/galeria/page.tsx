"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "11.jpg", "12.jpg", "14.jpg", "15.jpg",
  "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg",
  "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg", "36.jpg", "37.jpg", "38.jpg",
  "41.jpg", "42.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg",
  "51.jpg", "52.jpg", "53.jpg", "54.jpg", "55.jpg", "56.jpg", "57.jpg",
  "61.jpg", "62.jpg", "63.jpg", "65.jpg",
  "71.jpg", "72.jpg", "73.jpg", "74.jpg", "75.jpg", "76.jpg", "77.jpg", "78.JPG",
  "81.jpg", "82.JPG", "83.jpg", "84.JPG", "85.jpg", "86.JPG", "87.jpg", "88.JPG", "89.jpg",
  "90.jpg", "91.jpg", "92.JPG", "93.jpg", "94.JPG", "95.jpg", "96.jpg", "97.jpg", "98.jpg",
  "101.jpg", "102.jpg", "103.jpg", "104.jpg", "105.jpg", "106.jpg", "107.jpg", "108.jpg",
  "121.jpg", "122.jpg",
  "131.jpg", "132.jpg", "133.jpg",
  "140.jpg", "141.jpg", "142.jpg", "143.jpg", "144.jpg",
  "201.jpg", "202.jpg", "203.jpg", "203a.jpg", "205.jpg", "206.jpg", "207.jpg",
  "208.jpg", "209.jpg", "210.jpg", "211.jpg", "212.jpg", "213.jpg", "214.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
      } else if (e.key === "ArrowRight") {
        setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  };

  const goToNext = () => {
    setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  };

  return (
    <>
      <section className="flex flex-wrap justify-center gap-6 p-8">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-64 h-64 relative rounded shadow cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-10"
            onClick={() => setSelectedImage(idx)}
          >
            <Image
              src={`/images/galery/${img}`}
              alt={`Gallery image ${idx + 1}`}
              fill
              style={{ objectFit: "cover" }}
              sizes="256px"
              className="rounded hover:brightness-75"
            />
          </div>
        ))}
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-6xl hover:text-gray-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 text-white text-8xl hover:text-gray-300 z-10 px-6 py-4 select-none"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
          >
            &#8249;
          </button>

          {/* Image container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/galery/${images[selectedImage]}`}
              alt={`Gallery image ${selectedImage + 1}`}
              width={1200}
              height={900}
              style={{ objectFit: "contain", maxHeight: "90vh" }}
              className="rounded"
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 text-white text-8xl hover:text-gray-300 z-10 px-6 py-4 select-none"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
