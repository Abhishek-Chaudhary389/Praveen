import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendBookingQuery, BOOKING_PHONE_DISPLAY, BOOKING_EMAIL } from '../utils/bookingDispatcher';

export default function Service() {
  const [booking, setBooking] = useState({
    name: '',
    pickup: '',
    drop: '',
    date: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const subject = `Service Reservation Query: ${booking.pickup} to ${booking.drop} (${booking.name})`;
    const msg = `Hello Parveen Fleet Booking Desk,%0A%0AI want to book an Instant Reservation:%0A👤 Name: ${booking.name}%0A📍 Pickup: ${booking.pickup}%0A🧭 Drop: ${booking.drop}%0A📅 Travel Date: ${booking.date}%0A%0APlease confirm availability and fare.`;
    const details = `PARVEEN FLEETS - SERVICE RESERVATION QUERY%0D%0A%0D%0AName: ${booking.name}%0D%0APickup Location: ${booking.pickup}%0D%0ADrop Location: ${booking.drop}%0D%0ATravel Date: ${booking.date}%0D%0A%0D%0APlease share quotation and confirm availability.`;

    sendBookingQuery({ subject, message: msg, details });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const servicesList = [
    'TECHNOLOGY BASED EMPLOYEE TRANSPORTATION',
    'LUXURY CAB SERVICES',
    'CAR RENTAL SERVICES',
    'SHUTTLE SERVICES',
    'AIRPORT PICK-UP & DROP',
    'LONG TERM RENTALS',
    'BUS & COACH SERVICES',
    'TRAVEL & TOURISM',
  ];

  const detailedServices = [
    {
      title: 'Shuttle Services',
      tag: 'Airport & Corporate Shuttles',
      desc: 'We offer a fast, convenient, and cost effective solution for booking airport ground transportation worldwide. Our reliable service allows travellers to compare prices and choose the best option for a seamless journey. Whether for business or leisure, we ensure safe, comfortable, and hassle-free travel at competitive rates.',
      highlights: [
        'Dedicated Airport Ground Transfers',
        'Fixed Corporate Daily Shuttles',
        'Punctual On-Time Guarantee',
        'Real-Time Flight Schedule Monitoring',
      ],
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    },
    {
      title: 'Employee Transportation',
      tag: 'Enterprise Staff Commute',
      desc: 'We provide a comprehensive solution for efficient, safe, and transparent employee and corporate staff transportation. With advanced tracking systems and real-time monitoring, we ensure seamless and secure commutes. Our well-maintained fleet and trained drivers guarantee a reliable and hassle-free travel experience for businesses.',
      highlights: [
        'Automated Safe Reach Confirmation',
        'Contactless OTP / App Boarding',
        'Special Safe Routing for Women',
        'Zero-Compromise Security Escorts',
      ],
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Cab Services on Call Basis',
      tag: '24x7 On-Demand Fleet',
      desc: "As India's leading on-call cab service, we offer reliable and efficient transportation solutions across PAN India. Specializing in corporate cab services and car rentals, we ensure safe, comfortable, and punctual travel. With a well-maintained fleet and professional chauffeurs, we provide seamless and affordable commuting experiences.",
      highlights: [
        'Instant 24x7 Cab Dispatch',
        'Sedan to Volvo Coach Range',
        'Clean, Sanitized & Inspected Cars',
        'Trained & Groomed Chauffeurs',
      ],
      icon: (
        <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full bg-white text-[#0b1a30] min-h-screen">
      
      {/* =========================================================================
          1. READY TO ROLL? INSTANT RESERVATION SECTION (MATCHING USER SCREENSHOT)
          (ON PURE WHITE BACKGROUND AS EXPLICITLY REQUESTED)
         ========================================================================= */}
      <section className="relative w-full bg-white pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          
          {/* Header matching screenshot */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs sm:text-sm font-black text-amber-500 tracking-[0.25em] uppercase block mb-1.5">
              INSTANT RESERVATION
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
              <span className="text-[#0b1a30] italic font-black">READY TO </span>
              <span className="text-amber-500 italic font-black">ROLL?</span>
            </h2>
          </div>

          {/* The Black Reservation Bar Frame from Screenshot */}
          <div className="relative rounded-3xl lg:rounded-[36px] bg-[#0e1626] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
            
            {/* Subtle inner ambient glow */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-400 text-center text-white">
                <div className="text-4xl mb-2 text-emerald-400">✓</div>
                <h3 className="text-xl font-black text-white">Reservation Request Sent!</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1">
                  Connecting to Parveen Fleet 24x7 Dispatch Desk on WhatsApp with your travel details...
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                {/* 4 Inputs + BOOK NOW Button Grid (Exact 5-element row from screenshot) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-3.5 items-center">
                  
                  {/* 1. Your Name */}
                  <div className="relative">
                    <div className="flex items-center w-full h-[54px] px-4 rounded-2xl bg-[#141e30] border border-slate-700/80 focus-within:border-amber-400 transition-colors">
                      <span className="text-amber-400 mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        value={booking.name}
                        onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-transparent text-white placeholder-gray-400 text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* 2. Pickup Point */}
                  <div className="relative">
                    <div className="flex items-center w-full h-[54px] px-4 rounded-2xl bg-[#141e30] border border-slate-700/80 focus-within:border-amber-400 transition-colors">
                      <span className="text-amber-400 mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        value={booking.pickup}
                        onChange={(e) => setBooking({ ...booking, pickup: e.target.value })}
                        placeholder="Pickup Point"
                        className="w-full bg-transparent text-white placeholder-gray-400 text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* 3. Drop Point */}
                  <div className="relative">
                    <div className="flex items-center w-full h-[54px] px-4 rounded-2xl bg-[#141e30] border border-slate-700/80 focus-within:border-amber-400 transition-colors">
                      <span className="text-gray-400 mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        required
                        value={booking.drop}
                        onChange={(e) => setBooking({ ...booking, drop: e.target.value })}
                        placeholder="Drop Point"
                        className="w-full bg-transparent text-white placeholder-gray-400 text-sm font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* 4. Date Picker */}
                  <div className="relative">
                    <div className="flex items-center w-full h-[54px] px-4 rounded-2xl bg-[#141e30] border border-slate-700/80 focus-within:border-amber-400 transition-colors">
                      <span className="text-gray-400 mr-3 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <input
                        type="date"
                        required
                        value={booking.date}
                        onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                        className="w-full bg-transparent text-white placeholder-gray-400 text-sm font-medium focus:outline-none [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* 5. Yellow Book Now Button (In the exact same row as inputs) */}
                  <div>
                    <button
                      type="submit"
                      className="w-full h-[54px] px-6 rounded-2xl bg-[#ffc107] hover:bg-amber-400 active:scale-95 text-black font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>BOOK NOW</span>
                      <span className="text-base font-black">→</span>
                    </button>
                  </div>

                </div>

                {/* Subtle Divider Line */}
                <div className="w-full h-px bg-slate-800/80 my-4" />

                {/* 3 Value Pillars with Amber Circles Centered below divider */}
                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                  
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 text-[10px] font-black">
                      ✓
                    </span>
                    <span>FIXED PRICES</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 text-[10px] font-black">
                      ✓
                    </span>
                    <span>CLEAN CARS</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-amber-400 flex items-center justify-center text-amber-400 text-[10px] font-black">
                      ✓
                    </span>
                    <span>24/7 SUPPORT</span>
                  </div>

                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. 8-BOX SERVICE GRID (WHITE BACKGROUND WITH GOLDEN CORNER ACCENTS)
         ========================================================================= */}
      <section className="relative w-full bg-white pt-6 sm:pt-8 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-7 sm:mb-9">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1.5">
              ✦ COMPREHENSIVE SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a30] tracking-tight uppercase">
              SERVICES <span className="text-amber-500">PORTFOLIO</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-12 h-1 rounded-full bg-amber-500"></span>
              <span className="w-6 h-1 rounded-full bg-blue-600"></span>
              <span className="w-2 h-1 rounded-full bg-gray-200"></span>
            </div>
          </div>

          {/* 8-Box Service Grid with Golden Corner Accents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {servicesList.map((service, idx) => {
              const isLeftAccent = [0, 2, 4, 6].includes(idx);
              return (
                <div
                  key={idx}
                  className="relative p-5 sm:p-6 rounded-xl bg-white border border-gray-200/90 shadow-md shadow-gray-200/50 flex items-center justify-center text-center group hover:bg-amber-50/20 hover:border-amber-400 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer min-h-[90px]"
                >
                  {isLeftAccent ? (
                    <>
                      <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-amber-500 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-300"></span>
                      <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-amber-500 pointer-events-none"></span>
                    </>
                  ) : (
                    <>
                      <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-amber-500 pointer-events-none group-hover:w-full group-hover:h-full transition-all duration-300"></span>
                      <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-amber-500 pointer-events-none"></span>
                    </>
                  )}

                  <span className="text-xs sm:text-sm font-black text-[#0b1a30] tracking-wider uppercase leading-snug group-hover:text-amber-600 transition-colors">
                    {service}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. 3 DETAILED SERVICE COLUMNS (SHUTTLE, EMPLOYEE TRANSPORT, ON-CALL CABS)
         ========================================================================= */}
      <section className="relative w-full bg-gray-50/60 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-2">
              ✦ SPECIALIZED SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a30] tracking-tight uppercase">
              DETAILED <span className="text-amber-500">OFFERINGS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 font-normal">
              Tailored ground transportation designed for modern corporate organizations and executive commuters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {detailedServices.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-black text-[#0b1a30] tracking-tight mb-4 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="tel:+917767000838"
                    className="w-full py-3 rounded-xl bg-gray-100 hover:bg-amber-400 hover:text-black text-[#0b1a30] text-xs font-black uppercase tracking-wider text-center block transition-all shadow-xs"
                  >
                    Inquire This Service →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. 24x7 DIRECT SUPPORT HELPLINE BANNER
         ========================================================================= */}
      <section className="py-8 sm:py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#0b1a30] via-[#10233f] to-[#0b1a30] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-slate-700">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
                ✦ 24x7 Operations & Corporate Travel Desk
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Need Customized Enterprise Transportation?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-2xl font-normal">
                Call our dedicated fleet managers directly at <strong className="text-amber-400">+91 77670 00841</strong> / <strong className="text-amber-400">+91 77670 00836</strong> / <strong className="text-amber-400">+91 95458 99838</strong> or write to <span className="text-white font-medium">sales@parveenfleets.in</span>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] font-black text-xs uppercase tracking-wider text-center shadow-lg transition-all"
              >
                Contact All Offices
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
