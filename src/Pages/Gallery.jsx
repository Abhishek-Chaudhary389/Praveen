import React, { useState } from 'react';

// Import all 19 vehicle photos from assets/cars/
import dzireImg from '../assets/cars/maruti-suzuki-dzire.jpg';
import auraImg from '../assets/cars/hyundai-aura.jpg';
import ciazImg from '../assets/cars/maruti-suzuki-ciaz.jpg';
import cityImg from '../assets/cars/honda-city.jpg';
import ertigaImg from '../assets/cars/maruti-suzuki-ertiga.jpg';
import rumionImg from '../assets/cars/toyota-rumion.jpg';
import innovaCrystaImg from '../assets/cars/toyota-innova-crysta.jpg';
import innovaHycrossImg from '../assets/cars/toyota-innova-hycross.jpg';
import fortunerImg from '../assets/cars/toyota-fortuner.jpg';
import carnivalImg from '../assets/cars/kia-carnival.jpg';
import bmw5Img from '../assets/cars/bmw-5-series.jpg';
import eClassImg from '../assets/cars/mercedes-benz-e-class.jpg';
import glsImg from '../assets/cars/mercedes-benz-gls-450.jpg';
import caravanImg from '../assets/cars/caravan.jpg';
import tempoImg from '../assets/cars/tempo-traveller-17.jpg';
import urbaniaImg from '../assets/cars/force-urbania-16.jpg';
import bharatbenzImg from '../assets/cars/bharatbenz-coach-32.jpg';
import volvo43Img from '../assets/cars/volvo-coach-43.jpg';
import volvo49Img from '../assets/cars/volvo-multi-axle-49.jpg';

export default function Gallery() {
  const [previewImage, setPreviewImage] = useState(null);

  // All 19 vehicles photos
  const galleryItems = [
    { id: 1, src: dzireImg, title: 'Maruti Suzuki Dzire' },
    { id: 2, src: auraImg, title: 'Hyundai Aura' },
    { id: 3, src: ciazImg, title: 'Maruti Suzuki Ciaz' },
    { id: 4, src: cityImg, title: 'Honda City' },
    { id: 5, src: ertigaImg, title: 'Maruti Suzuki Ertiga' },
    { id: 6, src: rumionImg, title: 'Toyota Rumion' },
    { id: 7, src: innovaCrystaImg, title: 'Toyota Innova Crysta' },
    { id: 8, src: innovaHycrossImg, title: 'Toyota Innova HyCross' },
    { id: 9, src: fortunerImg, title: 'Toyota Fortuner' },
    { id: 10, src: carnivalImg, title: 'Kia Carnival' },
    { id: 11, src: bmw5Img, title: 'BMW 5 Series' },
    { id: 12, src: eClassImg, title: 'Mercedes-Benz E-Class 220' },
    { id: 13, src: glsImg, title: 'Mercedes-Benz GLS 450' },
    { id: 14, src: caravanImg, title: 'Caravan' },
    { id: 15, src: tempoImg, title: '17-Seater A/C Tempo Traveller' },
    { id: 16, src: urbaniaImg, title: '16-Seater Force Urbania' },
    { id: 17, src: bharatbenzImg, title: '32-Seater A/C BharatBenz Coach' },
    { id: 18, src: volvo43Img, title: '43-Seater Volvo Coach' },
    { id: 19, src: volvo49Img, title: '49-Seater Multi Axel Volvo Coach' }
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Title & Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span>★</span> FLEET SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0b1a30] tracking-tight">
            Our Vehicle <span className="text-amber-500 italic">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Explore our diverse range of vehicles, perfectly maintained to ensure comfort, luxury, and reliability for every journey.
          </p>
        </div>

        {/* Gallery Grid - Only Photos, 2 per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewImage(item)}
              className="group relative rounded-xl sm:rounded-3xl overflow-hidden shadow-sm sm:shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-white border border-amber-300/80 sm:border-2 sm:border-amber-300/70 hover:border-amber-500 cursor-pointer p-2 sm:p-3 flex items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Pure Photo Preview */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-3 sm:p-4 animate-in fade-in zoom-in duration-200 border border-amber-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-transform hover:scale-110"
              >
                ✕
              </button>

              <div className="relative w-full max-h-[80vh] overflow-hidden rounded-2xl flex items-center justify-center bg-slate-50 p-4">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-full h-full object-contain max-h-[80vh] mx-auto"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
