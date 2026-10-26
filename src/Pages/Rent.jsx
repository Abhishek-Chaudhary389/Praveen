import React, { useState } from 'react';

export default function Rent() {
  const [filter, setFilter] = useState('ALL');
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      id: 1,
      name: 'INNOVA CRYSTA',
      category: 'MUV',
      price: '₹18',
      unit: '/ KM',
      seats: '7+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'AUTO',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
      tag: 'POPULAR'
    },
    {
      id: 2,
      name: 'SWIFT DZIRE',
      category: 'SEDAN',
      price: '₹12',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'CNG',
      transmission: 'MANUAL',
      image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
      tag: 'ECONOMY'
    },
    {
      id: 3,
      name: 'HYUNDAI AURA',
      category: 'SEDAN',
      price: '₹12',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'CNG',
      transmission: 'MANUAL',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      tag: 'COMFORT'
    },
    {
      id: 4,
      name: 'ERTIGA',
      category: 'MUV',
      price: '₹13',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'CNG',
      transmission: 'MANUAL',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=800&q=80',
      tag: 'FAMILY'
    },
    {
      id: 5,
      name: 'BOLERO NEO',
      category: 'SUV',
      price: '₹13',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'MANUAL',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
      tag: 'RUGGED'
    },
    {
      id: 6,
      name: 'BOLERO',
      category: 'SUV',
      price: '₹13',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'MANUAL',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
      tag: 'CLASSIC'
    },
  ];

  const filteredCars = filter === 'ALL' ? cars : cars.filter(c => c.category === filter);

  return (
    <section id="rent" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching user reference */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow with Amber Line */}
          <div className="inline-flex items-center gap-3 justify-center mb-2">
            <span className="w-10 h-0.5 bg-amber-500 rounded-full"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-amber-500 uppercase">
              SELF DRIVE
            </span>
          </div>

          {/* Main Title: OUR GARAGE */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="text-black">OUR </span>
            <span className="text-amber-500 italic">GARAGE</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-gray-400 uppercase">
            PREMIUM SELECTION FOR YOUR NEXT JOURNEY
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {['ALL', 'SUV', 'SEDAN', 'MUV'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid (Matching 3-column reference design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-[32px] border-2 border-amber-400 hover:border-amber-500 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6 pb-2">
                {/* Vehicle Image Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-2">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {car.tag && (
                    <span className="absolute top-3 right-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-400 text-black shadow-xs">
                      {car.tag}
                    </span>
                  )}
                </div>

                {/* Car Title & Price Row */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black italic tracking-tight text-black group-hover:text-amber-600 transition-colors">
                      {car.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-amber-500">{car.price}</span>
                      <span className="text-xs font-bold text-gray-400">{car.unit}</span>
                    </div>
                  </div>

                  {/* Circular Black Arrow Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedCar(car)}
                    className="w-11 h-11 rounded-full bg-black hover:bg-amber-500 text-white hover:text-black flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110 active:scale-95 cursor-pointer"
                    aria-label={`Rent ${car.name}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom Specs Bar (Matching exact columns in reference) */}
              <div className="p-4 mx-4 mb-4 rounded-2xl bg-amber-50/50 border border-amber-100/70 grid grid-cols-3 divide-x divide-amber-200/50 text-center">
                <div className="px-2">
                  <svg className="w-4 h-4 mx-auto text-gray-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-[11px] font-extrabold uppercase text-gray-700 block tracking-wider">
                    {car.seats}
                  </span>
                </div>

                <div className="px-2">
                  <svg className="w-4 h-4 mx-auto text-gray-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span className="text-[11px] font-extrabold uppercase text-gray-700 block tracking-wider">
                    {car.fuel}
                  </span>
                </div>

                <div className="px-2">
                  <svg className="w-4 h-4 mx-auto text-gray-600 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="text-[11px] font-extrabold uppercase text-gray-700 block tracking-wider">
                    {car.transmission}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Booking Modal */}
        {selectedCar && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-amber-300 relative animate-in fade-in zoom-in duration-200">
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center"
              >
                ✕
              </button>

              <div className="text-center">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-widest block">Instant Booking</span>
                <h3 className="text-2xl font-black italic text-black mt-1">{selectedCar.name}</h3>
                <p className="text-sm font-bold text-amber-500 mt-1">{selectedCar.price} {selectedCar.unit}</p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Booking request submitted for ${selectedCar.name}! Our team will call you shortly.`);
                  setSelectedCar(null);
                }}
                className="mt-6 space-y-3"
              >
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (+91)"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                />
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-extrabold text-sm tracking-wide shadow-md transition-all cursor-pointer mt-2"
                >
                  Confirm Booking Now →
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
