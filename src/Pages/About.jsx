import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { number: '2012', label: 'Journey Started' },
    { number: '114+', label: 'PAN India Cities' },
    { number: '4+', label: 'HQ & Branch Offices' },
    { number: '24×7', label: 'Operating Support' },
  ];

  const features = [
    {
      title: 'Zero Hidden Charges',
      description: 'Clear, transparent pricing per kilometer with no surprise add-ons or hidden fees.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Sanitized & Inspected Fleet',
      description: 'Every vehicle undergoes rigorous mechanical inspection and sanitization before departure.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: '24/7 Roadside Assistance',
      description: 'Round-the-clock customer support and immediate emergency assistance wherever you drive.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Self-Drive & Chauffeur Options',
      description: 'Choose complete privacy behind the wheel or relax with our background-verified drivers.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Company Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-extrabold uppercase tracking-widest mb-3">
              <span>✦</span> ABOUT OUR COMPANY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a30] tracking-tight leading-tight">
              Parveen Fleet <br />
              <span className="text-amber-500">Private Limited</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <strong>Parveen Fleet Private Limited</strong> started its journey in the year 2012 as a proprietorship firm by the name “Parveen Tours & Travels”. In 2021, the company was registered as a private limited business entity. We are a PAN India company headquartered in Pune with 3 branch offices at Mumbai, Delhi & Hyderabad and providing services across 114 cities.
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              We are a technology-based company with a proven track record & providing services to many renowned corporates across PAN India with well-trained staff operating 24x7. We are known for managing services with our own fleet with disciplined & well-groomed chauffeurs. We rely on technology for seamless travel, safety & timely and accurate billing. We majorly operate with our own fleet which includes a range of vehicles starting from sedan to Volvo Buses.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/rent"
                className="px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-500 text-black font-extrabold text-sm tracking-wide shadow-md transition-all active:scale-95"
              >
                Explore Fleet Garage →
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm tracking-wide transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Stats Showcase Box */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 bg-white p-6 sm:p-8 rounded-[36px] border border-blue-100/80 shadow-xl shadow-blue-900/5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-100 shadow-md shadow-slate-100/80 text-center hover:shadow-lg hover:border-amber-200 transition-all duration-200"
              >
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-500 block">
                  {stat.number}
                </span>
                <span className="text-xs sm:text-sm md:text-base font-bold text-slate-700 mt-2 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision, Mission & Motto Showcase Box */}
        <div className="mt-16 bg-gradient-to-br from-[#0b1a30] via-[#112440] to-[#081324] rounded-[36px] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-900/40">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Eyebrow */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-extrabold uppercase tracking-widest mb-3">
              ✦ CORE PRINCIPLES & PURPOSE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Guiding Our Journey Forward
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            
            {/* Box 1: Our Vision */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-amber-400 tracking-tight mb-3">
                  Our Vision
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Our Vision is to become a pioneer in the Car Rental, Employee Transportation, and Tourism industry by prioritizing customer satisfaction, employee growth, innovation, and operational efficiency. We strive to deliver exceptional value, seamless travel experiences, and world-class service, making us the preferred choice for corporate and leisure transportation.
                </p>
              </div>
            </div>

            {/* Box 2: Our Mission */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-blue-400/40 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-blue-400 tracking-tight mb-3">
                  Our Mission
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed font-normal">
                  Our mission is to drive long-term growth and customer satisfaction by delivering world-class transportation services. We are committed to quality, reliability, and continuous improvement, ensuring a seamless experience for our clients.
                </p>
              </div>
            </div>

            {/* Box 3: Our Motto */}
            <div className="bg-gradient-to-br from-amber-400/10 to-amber-500/5 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-amber-400/30 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-black flex items-center justify-center mb-5 shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-black text-amber-400 tracking-tight mb-3">
                  Our Motto
                </h4>
                <div className="p-4 rounded-2xl bg-black/40 border border-amber-400/30 mt-2 shadow-inner">
                  <p className="text-lg font-black italic text-amber-300 leading-snug">
                    “Driven by Excellence, Committed to Service.”
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-4 leading-relaxed font-normal">
                  The foundational creed guiding every chauffeur, operation manager, and corporate partnership across India.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Feature Pillars */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-600 flex items-center justify-center mb-4">
                {feat.icon}
              </div>
              <h3 className="text-base font-bold text-[#0b1a30]">{feat.title}</h3>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Reach Us At: Corporate Offices Network */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 block mb-1">
              ✦ REACH US AT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1a30] tracking-tight">
              Head Office & Branch Locations
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Redefining Travel with Safety, Comfort, and Innovation!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pune HO */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200 uppercase">
                Head Office
              </span>
              <h4 className="text-lg font-black text-[#0b1a30] mt-3 mb-2">Pune (HO)</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Shop No-02, Ground Floor, Ashish Apartment, Plot No- 05, Near Open Window Cake S.B. Road, Shivajinagar, Pune, MH-411016.
              </p>
            </div>

            {/* Mumbai */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase">
                Branch Office
              </span>
              <h4 className="text-lg font-black text-[#0b1a30] mt-3 mb-2">Mumbai</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Office No. 8 in Business Centre 123/24, Kapadia Industrial Estate, Bldg. 1, 2nd floor, Suite 12, Above Domino’s Pizza, Andheri Kurla Road, Andheri (East), Mumbai-400093.
              </p>
            </div>

            {/* Hyderabad */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase">
                Branch Office
              </span>
              <h4 className="text-lg font-black text-[#0b1a30] mt-3 mb-2">Hyderabad</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                MIG 155, KPR Complex, KPHB Road No. 1, Above State Bank of India, Kukatpally, Hyderabad, Telangana-500072.
              </p>
            </div>

            {/* Delhi */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-sm hover:border-amber-400 hover:shadow-md transition-all">
              <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 uppercase">
                Branch Office
              </span>
              <h4 className="text-lg font-black text-[#0b1a30] mt-3 mb-2">Delhi</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                1154, Ground Floor, Pocket-3, Sector-19, Akshardham Apartment, Dwarka, New Delhi, Delhi-110075.
              </p>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="mt-8 p-6 rounded-2xl bg-[#0b1a30] text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm">
              <div>
                <span className="text-gray-400 block text-xs">Call 24/7 Desk:</span>
                <span className="font-bold text-amber-400">+91 95458 99838 / +91 77440 00844</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="text-gray-400 block text-xs">Email:</span>
                <span className="font-bold text-white">sales@parveenfleets.in</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] font-black text-xs uppercase tracking-wider transition-colors shadow-md flex-shrink-0"
            >
              Contact Travel Desk
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

