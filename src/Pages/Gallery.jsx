import React, { useState } from 'react';

export default function Gallery() {
  const [previewImage, setPreviewImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Executive Luxury Cabin',
      category: 'INTERIOR',
      src: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      desc: 'Beaded comfort seating with premium upholstery'
    },
    {
      id: 2,
      title: 'Mahindra Bolero Neo Front Line',
      category: 'EXTERIOR',
      src: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      desc: 'Pristine exterior ready for highway cruising'
    },
    {
      id: 3,
      title: 'Toyota Innova Crysta Flagship',
      category: 'EXTERIOR',
      src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      desc: 'Executive travel & airport transfer standard'
    },
    {
      id: 4,
      title: 'VIP Lounge Rear Cabin',
      category: 'INTERIOR',
      src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
      desc: 'Sanitized, climate-controlled comfort'
    },
    {
      id: 5,
      title: 'Maruti Suzuki Ertiga Smart Hybrid',
      category: 'EXTERIOR',
      src: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
      desc: 'Spacious 6+1 family touring setup'
    },
    {
      id: 6,
      title: 'Swift Dzire Highway Cruiser',
      category: 'EXTERIOR',
      src: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
      desc: 'Best in class fuel economy & smooth drive'
    },
    {
      id: 7,
      title: 'Driver Console & Navigation',
      category: 'INTERIOR',
      src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      desc: 'Modern infotainment with GPS connectivity'
    },
    {
      id: 8,
      title: 'VIP Chauffeur Fleet Lineup',
      category: 'CHAUFFEUR',
      src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
      desc: 'Direct terminal airport pickup service'
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-[#f7faff] relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Title & Header matching user reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-3">
            <span>★</span> FLEET SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0b1a30] tracking-tight">
            Our Vehicle <span className="text-amber-500">Gallery</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 font-medium leading-relaxed">
            Explore our diverse range of vehicles, perfectly maintained to ensure comfort, luxury, and reliability for every journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewImage(item)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-[4/5] bg-gray-100 cursor-pointer border border-gray-100"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                  {item.category}
                </span>
                <h4 className="text-base font-bold text-white mt-0.5 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-amber-300">
                  <span>View Photo</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl p-2 animate-in fade-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center text-sm font-bold cursor-pointer transition-transform hover:scale-110"
              >
                ✕
              </button>
              <div className="relative w-full max-h-[75vh] overflow-hidden rounded-2xl">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-full h-full object-contain max-h-[75vh] mx-auto"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block">
                    {previewImage.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0b1a30]">{previewImage.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{previewImage.desc}</p>
                </div>
                <a
                  href="#rent"
                  onClick={() => setPreviewImage(null)}
                  className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-bold text-xs tracking-wider shadow-md whitespace-nowrap"
                >
                  Book This Vehicle
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
