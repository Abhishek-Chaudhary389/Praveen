import React, { useState } from 'react';

// Import all 15 authentic WhatsApp fleet images from src/assets/
import waImg1 from '../assets/WhatsApp Image 2026-10-29 at 2.49.22 PM (1).jpeg';
import waImg2 from '../assets/WhatsApp Image 2026-10-29 at 2.49.22 PM.jpeg';
import waImg3 from '../assets/WhatsApp Image 2026-10-29 at 2.49.23 PM (1).jpeg';
import waImg4 from '../assets/WhatsApp Image 2026-10-29 at 2.49.23 PM.jpeg';
import waImg5 from '../assets/WhatsApp Image 2026-10-29 at 2.49.24 PM.jpeg';
import waImg6 from '../assets/WhatsApp Image 2026-10-31 at 1.40.59 PM (1).jpeg';
import waImg7 from '../assets/WhatsApp Image 2026-10-31 at 1.40.59 PM.jpeg';
import waImg8 from '../assets/WhatsApp Image 2026-10-31 at 1.41.00 PM.jpeg';
import waImg9 from '../assets/WhatsApp Image 2026-10-31 at 1.41.01 PM.jpeg';
import waImg10 from '../assets/WhatsApp Image 2026-10-31 at 1.41.25 PM.jpeg';
import waImg11 from '../assets/WhatsApp Image 2026-10-31 at 1.41.35 PM.jpeg';
import waImg12 from '../assets/WhatsApp Image 2026-10-31 at 1.42.48 PM.jpeg';
import waImg13 from '../assets/WhatsApp Image 2026-10-31 at 1.42.49 PM.jpeg';
import waImg14 from '../assets/WhatsApp Image 2026-10-31 at 1.42.50 PM.jpeg';
import waImg15 from '../assets/WhatsApp Image 2026-10-31 at 1.42.52 PM.jpeg';

export default function Gallery() {
  const [previewImage, setPreviewImage] = useState(null);

  // All 15 real Parveen Fleets images arranged for best visual variety
  const galleryItems = [
    { id: 1, src: waImg7, title: 'Parveen Fleets Luxury Bus' },
    { id: 2, src: waImg2, title: 'Mercedes-Benz Luxury Fleet' },
    { id: 3, src: waImg8, title: 'Parveen Fleets Bus Interior' },
    { id: 4, src: waImg1, title: 'Parveen Fleets Fleet Vehicle' },
    { id: 5, src: waImg6, title: 'Parveen Fleets Travel Coach' },
    { id: 6, src: waImg9, title: 'Parveen Fleets Bus' },
    { id: 7, src: waImg10, title: 'Parveen Fleets Executive Coach' },
    { id: 8, src: waImg3, title: 'Parveen Fleets Luxury Transport' },
    { id: 9, src: waImg4, title: 'Parveen Fleets Fleet Operations' },
    { id: 10, src: waImg5, title: 'Parveen Fleets Commercial Fleet' },
    { id: 11, src: waImg11, title: 'Parveen Fleets Passenger Bus' },
    { id: 12, src: waImg12, title: 'Parveen Fleets Coach Lineup' },
    { id: 13, src: waImg13, title: 'Parveen Fleets Premium Travel' },
    { id: 14, src: waImg14, title: 'Parveen Fleets Corporate Shuttles' },
    { id: 15, src: waImg15, title: 'Parveen Fleets High-Capacity Coach' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Gallery Title & Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span>★</span> FLEET SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0b1a30] tracking-tight">
            Our Vehicle <span className="text-amber-500 italic">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Real snapshots from our on-ground fleet — luxury sedans, premium corporate coaches, and executive staff shuttles across PAN India.
          </p>
        </div>

        {/* Gallery Grid - 2 per row on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewImage(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-square bg-white border-2 border-amber-300/80 hover:border-amber-500 cursor-pointer p-2 sm:p-3 flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-contain rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-300 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Pure Photo Preview */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-5xl w-full max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-2 sm:p-4 animate-in fade-in zoom-in duration-200 border-2 border-amber-400"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/80 hover:bg-amber-500 text-white hover:text-black flex items-center justify-center text-lg font-bold cursor-pointer transition-all duration-200 shadow-xl border border-white/20"
                aria-label="Close Preview"
              >
                ✕
              </button>

              <div className="relative w-full max-h-[85vh] flex items-center justify-center p-1 sm:p-3">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
