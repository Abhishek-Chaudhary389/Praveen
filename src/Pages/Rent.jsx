import React, { useState, useMemo } from 'react';

// Import all 19 generated/downloaded vehicle photos from local assets
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
import { sendBookingQuery, BOOKING_PHONE_INT, BOOKING_PHONE_DISPLAY, BOOKING_EMAIL } from '../utils/bookingDispatcher';

export default function Rent() {
  const [filter, setFilter] = useState('ALL');
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('');

  // 19 Vehicles across 7 Categories as requested
  const cars = [
    // 1. Sedans
    {
      id: 1,
      name: 'Maruti Suzuki Dzire',
      category: 'SEDANS',
      categoryLabel: 'Sedans',
      price: '₹12',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'PETROL / CNG',
      transmission: 'MANUAL / AUTO',
      image: dzireImg,
      tag: 'POPULAR'
    },
    {
      id: 2,
      name: 'Hyundai Aura',
      category: 'SEDANS',
      categoryLabel: 'Sedans',
      price: '₹12',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'PETROL / CNG',
      transmission: 'MANUAL',
      image: auraImg,
      tag: 'ECONOMY'
    },

    // 2. Premium Sedans
    {
      id: 3,
      name: 'Maruti Suzuki Ciaz',
      category: 'PREMIUM_SEDANS',
      categoryLabel: 'Premium Sedans',
      price: '₹15',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'PETROL',
      transmission: 'AUTOMATIC',
      image: ciazImg,
      tag: 'EXECUTIVE'
    },
    {
      id: 4,
      name: 'Honda City',
      category: 'PREMIUM_SEDANS',
      categoryLabel: 'Premium Sedans',
      price: '₹16',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'PETROL',
      transmission: 'CVT AUTO',
      image: cityImg,
      tag: 'PREMIUM'
    },

    // 3. MUVs
    {
      id: 5,
      name: 'Maruti Suzuki Ertiga',
      category: 'MUVS',
      categoryLabel: 'MUVs',
      price: '₹14',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'PETROL / CNG',
      transmission: 'MANUAL / AUTO',
      image: ertigaImg,
      tag: 'FAMILY'
    },
    {
      id: 6,
      name: 'Toyota Rumion',
      category: 'MUVS',
      categoryLabel: 'MUVs',
      price: '₹15',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'PETROL / CNG',
      transmission: 'AUTOMATIC',
      image: rumionImg,
      tag: 'COMFORT'
    },

    // 4. SUVs
    {
      id: 7,
      name: 'Toyota Innova Crysta',
      category: 'SUVS',
      categoryLabel: 'SUVs',
      price: '₹18',
      unit: '/ KM',
      seats: '7+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'MANUAL / AUTO',
      image: innovaCrystaImg,
      tag: 'MOST POPULAR'
    },
    {
      id: 8,
      name: 'Toyota Innova HyCross',
      category: 'SUVS',
      categoryLabel: 'SUVs',
      price: '₹22',
      unit: '/ KM',
      seats: '7+1 SEATS',
      fuel: 'HYBRID',
      transmission: 'AUTOMATIC',
      image: innovaHycrossImg,
      tag: 'HYBRID LUXURY'
    },
    {
      id: 9,
      name: 'Toyota Fortuner',
      category: 'SUVS',
      categoryLabel: 'SUVs',
      price: '₹35',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: '4x4 DIESEL',
      transmission: 'AUTOMATIC',
      image: fortunerImg,
      tag: 'POWER SUV'
    },

    // 5. Premium & Luxury Vehicles
    {
      id: 10,
      name: 'Kia Carnival',
      category: 'LUXURY',
      categoryLabel: 'Premium & Luxury',
      price: '₹38',
      unit: '/ KM',
      seats: '7+1 VIP SEATS',
      fuel: 'DIESEL',
      transmission: 'AUTOMATIC',
      image: carnivalImg,
      tag: 'VIP LOUNGE'
    },
    {
      id: 11,
      name: 'BMW 5 Series',
      category: 'LUXURY',
      categoryLabel: 'Premium & Luxury',
      price: '₹65',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'PETROL',
      transmission: 'AUTOMATIC',
      image: bmw5Img,
      tag: 'ROYAL LUXURY'
    },
    {
      id: 12,
      name: 'Mercedes-Benz E-Class 220',
      category: 'LUXURY',
      categoryLabel: 'Premium & Luxury',
      price: '₹70',
      unit: '/ KM',
      seats: '4+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'AUTOMATIC',
      image: eClassImg,
      tag: 'EXECUTIVE VIP'
    },
    {
      id: 13,
      name: 'Mercedes-Benz GLS 450',
      category: 'LUXURY',
      categoryLabel: 'Premium & Luxury',
      price: '₹110',
      unit: '/ KM',
      seats: '6+1 SEATS',
      fuel: 'PETROL HYBRID',
      transmission: '4MATIC AUTO',
      image: glsImg,
      tag: 'FLAGSHIP SUV'
    },
    {
      id: 14,
      name: 'Caravan (Luxury Motorhome)',
      category: 'LUXURY',
      categoryLabel: 'Premium & Luxury',
      price: '₹8,500',
      unit: '/ DAY',
      seats: '4-6 BERTHS',
      fuel: 'DIESEL',
      transmission: 'A/C LIVING + TOILET',
      image: caravanImg,
      tag: 'CAMPER LIFE'
    },

    // 6. Tempo Travellers & Urbania
    {
      id: 15,
      name: '17-Seater A/C Tempo Traveller',
      category: 'TEMPO_URBANIA',
      categoryLabel: 'Tempo Travellers & Urbania',
      price: '₹24',
      unit: '/ KM',
      seats: '17+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'HIGH ROOF A/C',
      image: tempoImg,
      tag: 'GROUP TRAVEL'
    },
    {
      id: 16,
      name: '16-Seater Force Urbania',
      category: 'TEMPO_URBANIA',
      categoryLabel: 'Tempo Travellers & Urbania',
      price: '₹28',
      unit: '/ KM',
      seats: '16+1 RECLINERS',
      fuel: 'DIESEL',
      transmission: 'LUXURY COMMUTE',
      image: urbaniaImg,
      tag: 'ULTRA LUXURY'
    },

    // 7. Buses & Coaches
    {
      id: 17,
      name: '32-Seater A/C BharatBenz Coach',
      category: 'BUSES',
      categoryLabel: 'Buses & Coaches',
      price: '₹42',
      unit: '/ KM',
      seats: '32+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'AIR SUSPENSION',
      image: bharatbenzImg,
      tag: 'TOURIST COACH'
    },
    {
      id: 18,
      name: '43-Seater Volvo Coach',
      category: 'BUSES',
      categoryLabel: 'Buses & Coaches',
      price: '₹55',
      unit: '/ KM',
      seats: '43+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'ULTRA COMFORT',
      image: volvo43Img,
      tag: 'INTERCITY VIP'
    },
    {
      id: 19,
      name: '49-Seater Multi Axel Volvo Coach',
      category: 'BUSES',
      categoryLabel: 'Buses & Coaches',
      price: '₹68',
      unit: '/ KM',
      seats: '49+1 SEATS',
      fuel: 'DIESEL',
      transmission: 'MULTI-AXLE GLIDER',
      image: volvo49Img,
      tag: 'ROYAL SLEEPER'
    }
  ];

  const categories = [
    { key: 'ALL', label: 'All Fleet', count: cars.length },
    { key: 'SEDANS', label: 'Sedans', count: cars.filter(c => c.category === 'SEDANS').length },
    { key: 'PREMIUM_SEDANS', label: 'Premium Sedans', count: cars.filter(c => c.category === 'PREMIUM_SEDANS').length },
    { key: 'MUVS', label: 'MUVs', count: cars.filter(c => c.category === 'MUVS').length },
    { key: 'SUVS', label: 'SUVs', count: cars.filter(c => c.category === 'SUVS').length },
    { key: 'LUXURY', label: 'Premium & Luxury', count: cars.filter(c => c.category === 'LUXURY').length },
    { key: 'TEMPO_URBANIA', label: 'Tempo & Urbania', count: cars.filter(c => c.category === 'TEMPO_URBANIA').length },
    { key: 'BUSES', label: 'Buses & Coaches', count: cars.filter(c => c.category === 'BUSES').length },
  ];

  const filteredCars = useMemo(() => {
    if (filter === 'ALL') return cars;
    return cars.filter(car => car.category === filter);
  }, [filter]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const tripType = formData.get('tripType');

    const subject = `Booking Query: ${selectedCar.name} (${name})`;
    const message = `Hello Parveen Fleets,%0A%0AI want to book *${selectedCar.name}*%0A• Category: ${selectedCar.categoryLabel}%0A• Name: ${name}%0A• Phone: ${phone}%0A• Travel Date: ${date}%0A• Trip Type: ${tripType}%0A%0APlease share quotation and confirm availability.`;
    const details = `PARVEEN FLEETS - ONLINE BOOKING QUERY%0D%0A%0D%0AVehicle: ${selectedCar.name}%0D%0ACategory: ${selectedCar.categoryLabel}%0D%0ACustomer Name: ${name}%0D%0ACustomer Phone: ${phone}%0D%0ATravel Date: ${date}%0D%0ATrip Type: ${tripType}%0D%0A%0D%0APlease provide quotation and confirm vehicle availability.`;

    setBookingStatus('Opening WhatsApp & Email simultaneously to submit your query...');
    setTimeout(() => {
      sendBookingQuery({ subject, message, details });
      setSelectedCar(null);
      setBookingStatus('');
    }, 600);
  };

  return (
    <section id="rent" className="py-16 sm:py-24 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase">
              POPULAR FLEET & LUXURY RENTALS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
            OUR <span className="text-amber-500 italic">GARAGE</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-xs sm:text-sm font-bold tracking-[0.15em] text-slate-500 uppercase">
            19 Premium Vehicles — From Daily Sedans & VIP SUVs to 49-Seater Luxury Volvo Coaches
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const active = filter === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setFilter(cat.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    active
                      ? 'bg-amber-500 text-black shadow-md shadow-amber-500/25 scale-105'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    active ? 'bg-black text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs font-bold text-slate-500 px-2">
          <span>Showing {filteredCars.length} of {cars.length} Vehicles</span>
          {filter !== 'ALL' && (
            <button
              onClick={() => setFilter('ALL')}
              className="text-amber-600 hover:text-amber-700 underline cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm">
            <svg className="w-12 h-12 text-slate-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <p className="text-base font-bold text-slate-700">No vehicles match your search</p>
            <p className="text-xs text-slate-400 mt-1">Try resetting the filter or changing your search terms.</p>
            <button
              type="button"
              onClick={() => { setFilter('ALL'); setSearchQuery(''); }}
              className="mt-4 px-5 py-2 rounded-full bg-amber-500 text-black text-xs font-black uppercase tracking-wider"
            >
              Show All Vehicles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-2xl sm:rounded-[28px] border sm:border-2 border-amber-300/80 hover:border-amber-500 shadow-xs sm:shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-2.5 sm:p-5 pb-1 sm:pb-2">
                  {/* Category Pill & Status Tag */}
                  <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 sm:px-2.5 py-0.5 rounded-md truncate max-w-[65%]">
                      {car.categoryLabel}
                    </span>
                    {car.tag && (
                      <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-400 text-black shadow-xs shrink-0">
                        {car.tag}
                      </span>
                    )}
                  </div>

                  {/* Vehicle Image Container */}
                  <div className="relative w-full h-28 sm:h-52 rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-1.5 sm:p-3 border border-slate-100">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Car Title Row */}
                  <div className="mt-2 sm:mt-4 flex items-center justify-between gap-1 sm:gap-2">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs sm:text-lg lg:text-xl font-black italic tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors truncate">
                        {car.name}
                      </h3>
                    </div>

                    {/* Quick Rent Action Button */}
                    <button
                      type="button"
                      onClick={() => setSelectedCar(car)}
                      className="w-7 h-7 sm:w-11 sm:h-11 shrink-0 rounded-full bg-slate-950 hover:bg-amber-500 text-white hover:text-black flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110 active:scale-95 cursor-pointer"
                      aria-label={`Rent ${car.name}`}
                      title={`Book ${car.name}`}
                    >
                      <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bottom Specs Bar */}
                <div className="p-1.5 sm:p-3 mx-2 sm:mx-4 mb-2 sm:mb-4 rounded-lg sm:rounded-xl bg-amber-50/60 border border-amber-200/50 grid grid-cols-3 divide-x divide-amber-200/60 text-center">
                  <div className="px-0.5 sm:px-1.5">
                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mx-auto text-slate-600 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-[8px] sm:text-[11px] font-extrabold uppercase text-slate-700 block tracking-wider truncate">
                      {car.seats}
                    </span>
                  </div>

                  <div className="px-0.5 sm:px-1.5">
                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mx-auto text-slate-600 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-[8px] sm:text-[11px] font-extrabold uppercase text-slate-700 block tracking-wider truncate">
                      {car.fuel}
                    </span>
                  </div>

                  <div className="px-0.5 sm:px-1.5">
                    <svg className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 mx-auto text-slate-600 mb-0.5 sm:mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <span className="text-[8px] sm:text-[11px] font-extrabold uppercase text-slate-700 block tracking-wider truncate">
                      {car.transmission}
                    </span>
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="px-2 sm:px-4 pb-2.5 sm:pb-4 pt-0.5 sm:pt-1 flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCar(car)}
                    className="flex-1 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-amber-400 hover:bg-amber-500 text-black text-[10px] sm:text-xs font-black uppercase tracking-wider transition-colors shadow-xs cursor-pointer text-center truncate"
                  >
                    Book Now
                  </button>
                  <a
                    href={`https://wa.me/${BOOKING_PHONE_INT}?text=Hello%20Parveen%20Fleets,%20I%20am%20interested%20in%20booking%20*${encodeURIComponent(car.name)}*%20(${encodeURIComponent(car.categoryLabel)}).`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors shrink-0"
                    title="Enquire on WhatsApp"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.077-2.001-.465-1.579-.652-2.589-2.27-2.67-2.378-.078-.108-.646-.861-.646-1.639 0-.779.406-1.163.551-1.32.144-.157.315-.195.42-.195.105 0 .21.002.302.007.098.005.228-.037.357.273.131.312.449 1.096.488 1.176.039.08.065.174.013.278-.052.105-.078.172-.156.262-.078.092-.164.205-.235.275-.078.078-.16.163-.069.319.092.156.407.672.873 1.087.6.535 1.106.702 1.263.78.156.078.248.066.339-.039.092-.105.393-.457.498-.614.105-.157.21-.131.353-.078.144.052.915.431 1.072.509.157.078.262.117.301.183.039.066.039.379-.105.784z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Booking Modal */}
        {selectedCar && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-amber-300 relative my-8 animate-in fade-in zoom-in duration-200">
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
                <div className="w-24 h-20 rounded-xl bg-slate-50 border border-slate-200 p-1 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={selectedCar.image}
                    alt={selectedCar.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-amber-500 block">
                    {selectedCar.categoryLabel}
                  </span>
                  <h3 className="text-xl font-black italic text-slate-900 leading-tight">
                    {selectedCar.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-600 font-bold">{selectedCar.seats}</span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-600 font-bold">{selectedCar.fuel}</span>
                  </div>
                </div>
              </div>

              {bookingStatus && (
                <div className="mb-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold text-center animate-pulse">
                  {bookingStatus}
                </div>
              )}

              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXXXXXXX"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase text-slate-600 mb-1">
                      Trip Type
                    </label>
                    <select
                      name="tripType"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500 bg-white"
                    >
                      <option value="Outstation Roundtrip">Outstation Roundtrip</option>
                      <option value="Local 8hr/80km">Local (8hr / 80km)</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Corporate / Event">Corporate / Event</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-black font-black text-sm tracking-wide shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Confirm & Send Query (WhatsApp & Email)</span>
                    <span>→</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    Helpline: <strong className="text-slate-700">{BOOKING_PHONE_DISPLAY}</strong> | Email: <strong className="text-slate-700">{BOOKING_EMAIL}</strong>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
