import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import heroImage from '../../assets/praveen Home.png';
import { sendBookingQuery } from '../../utils/bookingDispatcher';

export default function Hero() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tripType, setTripType] = useState('with-driver');
  const [passengerName, setPassengerName] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [citySearch, setCitySearch] = useState('');

  const handleSearchOrBook = () => {
    if (pickupLocation || dropLocation || passengerName) {
      const subject = `Booking Query: ${pickupLocation || 'Pickup'} to ${dropLocation || 'Drop'} (${passengerName || 'Client'})`;
      const message = `Hello Parveen Fleets,%0A%0AI want to book a trip:%0A• Trip Type: ${tripType}%0A• Passenger: ${passengerName || 'Not specified'}%0A• Pickup: ${pickupLocation || 'Not specified'}%0A• Drop: ${dropLocation || 'Not specified'}%0A%0APlease provide vehicle options and quote.`;
      const details = `PARVEEN FLEETS - HERO BOOKING QUERY%0D%0A%0D%0ATrip Type: ${tripType}%0D%0APassenger: ${passengerName || 'Not specified'}%0D%0APickup Location: ${pickupLocation || 'Not specified'}%0D%0ADrop Location: ${dropLocation || 'Not specified'}%0D%0A%0D%0APlease provide vehicle options, quotation, and confirm availability.`;

      sendBookingQuery({ subject, message, details });
    }
    navigate('/rent');
  };

  useEffect(() => {
    if (location.pathname === '/services' || location.hash === '#services') {
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [location]);

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

  const safetyPoints = [
    'Automated multi-mode safe reach confirmation.',
    'Instant call trigger with alarm when the SOS is raised.',
    'Call masking feature for employee privacy.',
    'Contactless confirmation using the employee app or OTP.',
    'Special routing for female employees.',
    'Provision to add escort guards for enhanced security.',
    'Trip link sharing with family and trusted contacts.',
    'Special provisions for employees with special needs.',
    'Stoppage adherence, speed violation, and route deviation alerts.',
  ];

  const poshPoints = [
    'Strict adherence to the PoSH Act, ensuring a safe and harassment-free work staff environment.',
    'Mandatory PoSH training sessions for all employees, including drivers and support.',
    'Dedicated internal complaints committee for handling grievances confidentially.',
    'Zero-tolerance policy towards workplace harassment and misconduct.',
    'Real-time monitoring and incident reporting mechanisms for quick action.',
    'Awareness campaigns to educate employees about their rights and safety measures.',
  ];

  const supportPoints = [
    '24x7 Customer support.',
    'Dedicated support team for technical assistance.',
    'Comprehensive training programs for staff & Chauffers.',
    'Continuous learning and skill development programs.',
  ];

  const chauffeurPillars = [
    {
      title: 'Disciplined & Well-Groomed',
      desc: 'Uniformed chauffeurs maintaining high standards of personal hygiene, courteous demeanor, and etiquette.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: '100% Police Verified',
      desc: 'Thorough background checks, address authentication, police verification, and valid commercial licensing.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Defensive Driving Certified',
      desc: 'Trained on defensive maneuvering, speed adherence, safe following distance, and crisis avoidance.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Passenger Courtesy & Discretion',
      desc: 'Strict passenger confidentiality, luggage assistance, English/Hindi communication, and VIP guest handling.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  const fleetOverview = [
    {
      category: 'Executive Sedans',
      models: 'Swift Dzire, Hyundai Aura',
      capacity: '4+1 Seater',
      desc: 'Perfect for executive travel, daily corporate commutes, and comfortable point-to-point transit.',
    },
    {
      category: 'Premium MUVs',
      models: 'Innova Crysta, Maruti Ertiga',
      capacity: '6+1 / 7+1 Seater',
      desc: 'Spacious luggage capacity and luxury seating for corporate delegations and airport transfers.',
    },
    {
      category: 'Rugged & Enterprise SUVs',
      models: 'Mahindra Bolero Neo, Bolero',
      capacity: '6+1 Seater',
      desc: 'Dependable all-terrain capability for outstation client visits and rugged corporate duty.',
    },
    {
      category: 'Luxury Coaches & Buses',
      models: 'Volvo Coaches, AC Staff Shuttles',
      capacity: '20 to 50+ Seater',
      desc: 'High-capacity staff transportation, events, group travel, and intercity corporate shuttle services.',
    },
  ];

  const networkCities = [
    {
      state: 'Jammu & Kashmir',
      color: 'text-emerald-400',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      cities: ['Jammu', 'Pulwama', 'Akhnoor', 'Patnitop', 'Srinagar'],
    },
    {
      state: 'Punjab',
      color: 'text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      cities: ['Amritsar', 'Barnala', 'Jalandhar', 'Firozpur'],
    },
    {
      state: 'Rajasthan',
      color: 'text-orange-400',
      badgeColor: 'border-orange-500/40 text-orange-300 bg-orange-500/10',
      cities: ['Ajmer', 'Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
    },
    {
      state: 'Haryana',
      color: 'text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      cities: ['Gurugram', 'Karnal', 'Faridabad', 'Ambala', 'Sonipat'],
    },
    {
      state: 'Madhya Pradesh',
      color: 'text-yellow-400',
      badgeColor: 'border-yellow-500/40 text-yellow-300 bg-yellow-500/10',
      cities: ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain'],
    },
    {
      state: 'Uttar Pradesh',
      color: 'text-orange-400',
      badgeColor: 'border-orange-500/40 text-orange-300 bg-orange-500/10',
      cities: ['Agra', 'Lucknow', 'Meerut', 'Noida', 'Varanasi'],
    },
    {
      state: 'Uttarakhand',
      color: 'text-amber-300',
      badgeColor: 'border-amber-300/40 text-amber-200 bg-amber-300/10',
      cities: ['Dehradun', 'Haridwar', 'Almora', 'Auli', 'Rishikesh'],
    },
    {
      state: 'Assam',
      color: 'text-green-400',
      badgeColor: 'border-green-500/40 text-green-300 bg-green-500/10',
      cities: ['Guwahati', 'Dibrugarh', 'Jorhat', 'Tezpur', 'Silchar'],
    },
    {
      state: 'Odisha',
      color: 'text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      cities: ['Bhubaneswar', 'Cuttack', 'Brahmapur', 'Raurkela', 'Sambalpur', 'Puri'],
    },
    {
      state: 'Telangana',
      color: 'text-sky-400',
      badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-500/10',
      cities: ['Hyderabad', 'Karimnagar', 'Ramagundam', 'Mahabubnagar', 'Siddipet', 'Suryapet', 'Adilabad'],
    },
    {
      state: 'Tamil Nadu',
      color: 'text-amber-200',
      badgeColor: 'border-amber-200/40 text-amber-100 bg-amber-200/10',
      cities: ['Chennai', 'Coimbatore', 'Coonoor', 'Kanyakumari', 'Madurai', 'Rameswaram', 'Thanjavur', 'Tiruchirappalli', 'Vellore'],
    },
    {
      state: 'Gujarat',
      color: 'text-amber-400',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
      cities: ['Vadodara', 'Dwarka', 'Gandhinagar', 'Ahmedabad', 'Surat', 'Rajkot', 'Junagadh', 'Jamnagar', 'Porbandar'],
    },
    {
      state: 'Maharashtra',
      color: 'text-orange-500',
      badgeColor: 'border-orange-500/40 text-orange-400 bg-orange-500/10',
      cities: ['Pune', 'Solapur', 'Kolhapur', 'Nagpur', 'Aurangabad', 'Mumbai', 'Ahmednagar', 'Shirdi', 'Nashik Latur', 'Akola'],
    },
    {
      state: 'Kerala',
      color: 'text-lime-400',
      badgeColor: 'border-lime-500/40 text-lime-300 bg-lime-500/10',
      cities: ['Thiruvananthapuram', 'Kozhikode', 'Thrissur', 'Kochi', 'Kannur', 'Kottayam', 'Kasaragod', 'Valanchery'],
    },
    {
      state: 'Andhra Pradesh',
      color: 'text-purple-300',
      badgeColor: 'border-purple-400/40 text-purple-200 bg-purple-400/10',
      cities: ['Amaravati', 'Nellore', 'Chittoor', 'Eluru', 'Guntur', 'Tirupati', 'Kurnool', 'Vijayawada', 'Visakhapatnam'],
    },
    {
      state: 'Karnataka',
      color: 'text-yellow-400',
      badgeColor: 'border-yellow-400/40 text-yellow-300 bg-yellow-400/10',
      cities: ['Bangalore', 'Mysuru', 'Mangaluru', 'Udupi', 'Hubballi', 'Dharwad', 'Uttara Kannada'],
    },
    {
      state: 'West Bengal',
      color: 'text-emerald-400',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
      cities: ['Kolkata', 'Asansol', 'Siliguri', 'Durgapur', 'Kharagpur', 'Cooch Behar', 'Shantipur', 'Krishnanagar', 'Medinipur'],
    },
  ];

  const filteredNetworkCities = networkCities
    .map((item) => {
      if (!citySearch.trim()) return item;
      const query = citySearch.toLowerCase();
      const matchesState = item.state.toLowerCase().includes(query);
      const matchedCities = item.cities.filter((c) => c.toLowerCase().includes(query));
      if (matchesState) return item;
      if (matchedCities.length > 0) return { ...item, cities: matchedCities };
      return null;
    })
    .filter(Boolean);

  return (
    <div id="home" className="relative w-full bg-gradient-to-b from-[#f3f8fd] via-[#f7faff] to-[#e6f1fc] overflow-hidden">

      {/* =========================================================================
          1. MOBILE VERSION (SAME TO SAME AS USER SCREENSHOT: md:hidden)
         ========================================================================= */}
      <div className="block md:hidden w-full pb-6">

        {/* Mobile Car Showcase Frame (Image is Background: Upper Sky contains Headline, Middle contains SUV) */}
        <div className="relative w-full aspect-[4/5] min-h-[520px] max-h-[620px] -mt-20 overflow-hidden">

          {/* Background Photo: Toyota Luxury SUV with Sky, Sunset & Modern Villa */}
          <img
            src={heroImage}
            alt="Car Rental Showcase"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{ objectPosition: '89% 30%' }}
            loading="eager"
          />

          {/* Subtle Contrast Wash so text stands out cleanly while keeping the sky visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-transparent pointer-events-none" />

          {/* Centered Headline Inside the Sky of the Car Image */}
          <div className="relative z-10 pt-24 px-4 text-center">
            {/* Eyebrow */}
            <p className="text-[11px] font-bold tracking-[0.28em] text-gray-600 uppercase drop-shadow-xs">
              Y O U R &nbsp; J O U R N E Y
            </p>

            {/* Main Headline (Single Line) */}
            <h1 className="mt-1 text-[24px] xs:text-[27px] sm:text-[32px] leading-tight font-black text-[#0b1a30] tracking-tight drop-shadow-xs whitespace-nowrap">
              Car and Bus Rental
            </h1>
            <h2 className="text-[24px] xs:text-[27px] sm:text-[32px] leading-tight font-black tracking-tight mt-0.5 drop-shadow-xs whitespace-nowrap">
              <span className="text-[#d99b26]">Made</span>{' '}
              <span className="text-[#0b1a30]">Simple</span>
            </h2>

            {/* Centered Color Bars */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="w-11 h-1.5 rounded-full bg-[#d99b26]"></span>
              <span className="w-11 h-1.5 rounded-full bg-[#dbeafe]"></span>
            </div>
          </div>

        </div>

        {/* Mobile Booking / Search Card (Overlapping the bottom of the car picture) */}
        <div className="relative z-30 px-3.5 -mt-10 sm:-mt-14">
          <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 border border-gray-100 p-4">

            {/* Top 2 Tab Buttons (All in 1 Row) */}
            <div className="grid grid-cols-2 gap-2 mb-3.5">
              {/* Tab 1: With Driver */}
              <button
                type="button"
                onClick={() => setTripType('with-driver')}
                className={`py-3 px-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${tripType === 'with-driver'
                    ? 'bg-[#1e61d8] text-white shadow-md shadow-blue-500/25'
                    : 'bg-[#f0f4f9] text-[#1e293b] hover:bg-gray-100'
                  }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="truncate">With Driver</span>
              </button>

              {/* Tab 2: Airport Transfer */}
              <button
                type="button"
                onClick={() => setTripType('airport-transfer')}
                className={`py-3 px-1.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${tripType === 'airport-transfer'
                    ? 'bg-[#1e61d8] text-white shadow-md shadow-blue-500/25'
                    : 'bg-[#f0f4f9] text-[#1e293b] hover:bg-gray-100'
                  }`}
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="truncate">Airport Transfer</span>
              </button>
            </div>

            {/* 3 Input Fields Vertical Stack */}
            <div className="space-y-3">

              {/* Field 1: Passenger */}
              <div className="relative">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200/90 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white transition-all">
                  <svg className="w-5 h-5 text-[#0b1a30] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-black text-[#0b1a30] block uppercase tracking-wider">
                      Passenger
                    </span>
                    <input
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field 2: Pickup */}
              <div className="relative">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200/90 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white transition-all">
                  <svg className="w-5 h-5 text-[#0b1a30] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-black text-[#0b1a30] block uppercase tracking-wider">
                      Pickup
                    </span>
                    <input
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter Your Location"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field 3: Drop */}
              <div className="relative">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border border-gray-200/90 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white transition-all">
                  <svg className="w-5 h-5 text-[#0b1a30] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-black text-[#0b1a30] block uppercase tracking-wider">
                      Drop
                    </span>
                    <input
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder="Enter Drop Location"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile Search Cars Action Button */}
            <button
              type="button"
              onClick={handleSearchOrBook}
              className="mt-3.5 w-full py-4 rounded-2xl bg-[#1e61d8] hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
            >
              <span>Search Cars</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

          </div>
        </div>

        {/* Mobile 3 Trust Badges (Horizontal 3-Column with Dividers) */}
        <div className="mt-8 px-2 max-w-lg mx-auto grid grid-cols-3 divide-x divide-gray-200 text-center">

          {/* Badge 1: Safe & Secure */}
          <div className="flex flex-col items-center px-1">
            <div className="w-12 h-12 rounded-full bg-[#eef5ff] text-[#1e61d8] flex items-center justify-center mb-2 shadow-xs">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-xs font-black text-[#0b1a30] leading-snug">Safe & Secure</h4>
            <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">Your Safety, Our Priority</p>
          </div>

          {/* Badge 2: Wide Range */}
          <div className="flex flex-col items-center px-1">
            <div className="w-12 h-12 rounded-full bg-[#fef7ee] text-[#d99b26] flex items-center justify-center mb-2 shadow-xs">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H8c-.7 0-1.3.3-1.8.7C5.3 8.6 4 10 4 10s-2.7.6-4.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2m16 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0M3 17a2 2 0 114 0m-4 0a2 2 0 104 0" />
              </svg>
            </div>
            <h4 className="text-xs font-black text-[#0b1a30] leading-snug">Wide Range</h4>
            <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">Hatchback to Luxury</p>
          </div>

          {/* Badge 3: 24/7 Support */}
          <div className="flex flex-col items-center px-1">
            <div className="w-12 h-12 rounded-full bg-[#eef5ff] text-[#1e61d8] flex items-center justify-center mb-2 shadow-xs">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 14h2a2 2 0 012 2v3a2 2 0 01-2 2H3a1 1 0 01-1-1v-5a1 1 0 011-1zm18 0h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a1 1 0 001-1v-5a1 1 0 00-1-1z" />
              </svg>
            </div>
            <h4 className="text-xs font-black text-[#0b1a30] leading-snug">24/7 Support</h4>
            <p className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">Always Here for You</p>
          </div>

        </div>

        {/* Mobile Pagination Dots, Scroll Down Indicator & Wave */}
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          {/* 3 Pagination Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-5 h-1.5 rounded-full bg-[#1e61d8]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-200"></span>
          </div>

          {/* SCROLL DOWN Text */}
          <span className="text-[10px] font-extrabold tracking-[0.25em] text-gray-400 uppercase mt-4 mb-1">
            SCROLL DOWN
          </span>
          <svg className="w-4 h-4 text-[#0b1a30] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Light Blue Soft Curved Wave at Bottom */}
        <div className="w-full h-14 bg-gradient-to-t from-blue-100/70 via-blue-50/30 to-transparent mt-4 rounded-t-[50px] pointer-events-none" />

      </div>

      {/* =========================================================================
          2. DESKTOP / TABLET VERSION (hidden md:block)
         ========================================================================= */}
      <div className="hidden md:block w-full -mt-20 pb-14 sm:pb-20">

        {/* Decorative Soft Background Waves */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        {/* Full-width Edge-to-Edge Hero Image Showcase */}
        <div className="relative w-full">
          <div className="relative w-full aspect-[1672/780] min-h-[580px] lg:min-h-[700px] overflow-hidden">
            <img
              src={heroImage}
              alt="Toyota Luxury SUV at Coastal Villa"
              className="w-full h-full object-cover object-bottom block"
              loading="eager"
            />

            {/* Subtle Contrast Gradient for Left Typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 to-transparent w-full sm:w-3/5 lg:w-1/2 pointer-events-none" />


            {/* Left Content Area (Tucked placement) */}
            <div className="absolute top-36 left-14 lg:left-24 z-10 max-w-2xl">
              <p className="text-xs sm:text-sm font-bold tracking-[0.28em] text-gray-600 uppercase">
                Y O U R &nbsp; J O U R N E Y
              </p>

              <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black tracking-tight text-[#0b1a30] leading-tight whitespace-nowrap">
                Car and Bus Rental
              </h1>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-black tracking-tight leading-tight mt-1 whitespace-nowrap">
                <span className="text-[#e5a93c]">Made</span>{' '}
                <span className="text-[#0b1a30]">Simple</span>
              </h2>

              <div className="flex items-center gap-2 mt-4 sm:mt-6">
                <span className="w-12 h-2 rounded-full bg-[#e5a93c]"></span>
                <span className="w-12 h-2 rounded-full bg-[#93c5fd]"></span>
                <span className="w-12 h-2 rounded-full bg-[#e2e8f0]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Search Booking Box Area */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 -mt-36 lg:-mt-44 xl:-mt-48">

          {/* Top Service Selection Tabs */}
          <div className="inline-flex items-center bg-white/95 backdrop-blur-md rounded-t-3xl border border-b-0 border-gray-100 shadow-md p-1.5 gap-1">
            <button
              type="button"
              onClick={() => setTripType('with-driver')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${tripType === 'with-driver'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>With Driver</span>
            </button>

            <button
              type="button"
              onClick={() => setTripType('airport-transfer')}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${tripType === 'airport-transfer'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Airport Transfer</span>
            </button>
          </div>

          {/* Main Search Bar Form Container */}
          <div className="bg-white rounded-3xl rounded-tl-none shadow-xl shadow-blue-900/10 border border-gray-100 p-5">
            <div className="grid grid-cols-4 gap-4 items-center">

              {/* Field 1: Passenger */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100/70 border border-gray-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <svg className="w-5 h-5 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="passenger-name" className="text-xs font-black text-[#0b1a30] block uppercase tracking-wider cursor-pointer">
                      Passenger
                    </label>
                    <input
                      id="passenger-name"
                      type="text"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field 2: Pickup */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100/70 border border-gray-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <svg className="w-5 h-5 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="pickup-location" className="text-xs font-black text-[#0b1a30] block uppercase tracking-wider cursor-pointer">
                      Pickup
                    </label>
                    <input
                      id="pickup-location"
                      type="text"
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      placeholder="Enter Your Location"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field 3: Drop */}
              <div className="relative">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100/70 border border-gray-200/70 focus-within:border-blue-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                  <svg className="w-5 h-5 text-gray-700 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="drop-location" className="text-xs font-black text-[#0b1a30] block uppercase tracking-wider cursor-pointer">
                      Drop
                    </label>
                    <input
                      id="drop-location"
                      type="text"
                      value={dropLocation}
                      onChange={(e) => setDropLocation(e.target.value)}
                      placeholder="Enter Drop Location"
                      className="w-full bg-transparent text-sm font-bold text-[#0b1a30] placeholder:text-gray-400 placeholder:font-normal focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Field 4: Search Cars Action Button */}
              <div>
                <button
                  type="button"
                  onClick={handleSearchOrBook}
                  className="w-full h-full min-h-[56px] py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all duration-200 cursor-pointer"
                >
                  <span>Search Cars</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Trust & Feature Badges (Desktop) */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-3 gap-8 items-center justify-items-center">

          {/* Badge 1: Safe & Secure */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#0b1a30] leading-snug">Safe & Secure</h4>
              <p className="text-xs font-medium text-gray-500">Your Safety, Our Priority</p>
            </div>
          </div>

          {/* Badge 2: Wide Range */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H8c-.7 0-1.3.3-1.8.7C5.3 8.6 4 10 4 10s-2.7.6-4.5 1.1C.7 11.3 0 12.1 0 13v3c0 .6.4 1 1 1h2m16 0a2 2 0 11-4 0m4 0a2 2 0 10-4 0M3 17a2 2 0 114 0m-4 0a2 2 0 104 0" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#0b1a30] leading-snug">Wide Range</h4>
              <p className="text-xs font-medium text-gray-500">Hatchback to Luxury</p>
            </div>
          </div>

          {/* Badge 3: 24/7 Support */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 shadow-xs">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6M3 14h2a2 2 0 012 2v3a2 2 0 01-2 2H3a1 1 0 01-1-1v-5a1 1 0 011-1zm18 0h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a1 1 0 001-1v-5a1 1 0 00-1-1z" />
              </svg>
            </div>
            <div>
              <h4 className="text-base font-extrabold text-[#0b1a30] leading-snug">24/7 Support</h4>
              <p className="text-xs font-medium text-gray-500">Always Here for You</p>
            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. OUR SERVICES SECTION (WHITE BACKGROUND AS REQUESTED)
         ========================================================================= */}
      <section id="services" className="relative w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-100">

        {/* Subtle Ambient Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-xs font-black uppercase tracking-widest mb-3">
              <span>✦</span> WHAT WE OFFER
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a30] tracking-tight">
              OUR <span className="text-amber-500">SERVICES</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-12 h-1 rounded-full bg-amber-500"></span>
              <span className="w-6 h-1 rounded-full bg-blue-600"></span>
              <span className="w-2 h-1 rounded-full bg-gray-200"></span>
            </div>
          </div>

          {/* 8-Box Service Grid with Golden Corner Accents (Matching Screenshot on White) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-20">
            {servicesList.map((service, idx) => {
              // Alternating corner accents as shown in user's image
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

          {/* 3 Detailed Service Columns (Shuttle Services, Employee Transportation, Cab Services on Call Basis) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">

            {/* Column 1: Shuttle Services */}
            <div className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Airport & Corporate Shuttles
                </span>
                <h3 className="text-2xl font-black text-[#0b1a30] tracking-tight mb-4 group-hover:text-amber-600 transition-colors">
                  Shuttle Services
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  We offer a fast, convenient, and cost effective solution for booking airport ground transportation worldwide. Our reliable service allows travellers to compare prices and choose the best option for a seamless journey. Whether for business or leisure, we ensure safe, comfortable, and hassle-free travel at competitive rates.
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

            {/* Column 2: Employee Transportation */}
            <div className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  Enterprise Staff Commute
                </span>
                <h3 className="text-2xl font-black text-[#0b1a30] tracking-tight mb-4 group-hover:text-amber-600 transition-colors">
                  Employee Transportation
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  We provide a comprehensive solution for efficient, safe, and transparent employee and corporate staff transportation. With advanced tracking systems and real-time monitoring, we ensure seamless and secure commutes. Our well-maintained fleet and trained drivers guarantee a reliable and hassle-free travel experience for businesses.
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

            {/* Column 3: Cab Services on Call Basis */}
            <div className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl hover:border-amber-400 transition-all duration-300 group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  24x7 On-Demand Fleet
                </span>
                <h3 className="text-2xl font-black text-[#0b1a30] tracking-tight mb-4 group-hover:text-amber-600 transition-colors">
                  Cab Services on Call Basis
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  As India's leading on-call cab service, we offer reliable and efficient transportation solutions across PAN India. Specializing in corporate cab services and car rentals, we ensure safe, comfortable, and punctual travel. With a well-maintained fleet and professional chauffeurs, we provide seamless and affordable commuting experiences.
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

          </div>

        </div>
      </section>

      {/* =========================================================================
          4. EMPLOYEE AND WOMEN SAFETY SECTION (EXACT DESIGN MATCHING USER SLIDE)
         ========================================================================= */}
      <section id="safety" className="relative w-full bg-[#051329] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden text-white border-t border-slate-800">

        {/* Subtle Ambient Decorative Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              PRIORITY & PROTECTION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
              EMPLOYEE AND <span className="text-amber-500">WOMEN SAFETY</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="w-12 h-1 rounded-full bg-amber-500"></span>
              <span className="w-6 h-1 rounded-full bg-blue-500"></span>
              <span className="w-2 h-1 rounded-full bg-white/20"></span>
            </div>
          </div>

          {/* Slide-Style Point by Point List Box (Identical to user's screenshot) */}
          <div className="max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
            <ul className="space-y-4 sm:space-y-5">
              {safetyPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3.5 sm:gap-4 text-white text-base sm:text-lg lg:text-[19px] font-normal tracking-wide leading-relaxed hover:text-amber-300 transition-colors duration-200 group"
                >
                  {/* Hollow Circle Bullet matching user image */}
                  <span className="flex-shrink-0 mt-1 sm:mt-1.5">
                    <svg
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/90 group-hover:text-amber-400 transition-colors"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================================================================
              PoSH COMPLIANCE AND WORKPLACE SAFETY (MATCHING USER SLIDE)
             ========================================================================= */}
          <div className="mt-14 sm:mt-20">
            {/* PoSH Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
                <span>✦</span> STATUTORY COMPLIANCE & GOVERNANCE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                PoSH COMPLIANCE AND <span className="text-amber-500">WORKPLACE SAFETY</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-1 rounded-full bg-amber-500"></span>
                <span className="w-6 h-1 rounded-full bg-blue-500"></span>
                <span className="w-2 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>

            {/* PoSH Points List Card */}
            <div className="max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
              <ul className="space-y-4 sm:space-y-5">
                {poshPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3.5 sm:gap-4 text-white text-base sm:text-lg lg:text-[19px] font-normal tracking-wide leading-relaxed hover:text-amber-300 transition-colors duration-200 group"
                  >
                    {/* Hollow Circle Bullet */}
                    <span className="flex-shrink-0 mt-1 sm:mt-1.5">
                      <svg
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white/90 group-hover:text-amber-400 transition-colors"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                      >
                        <circle cx="12" cy="12" r="8" />
                      </svg>
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =========================================================================
              WORLD CLASS CUSTOMER SUPPORT & RECOGNITION & AWARD (MATCHING USER SLIDE)
             ========================================================================= */}
          <div className="mt-14 sm:mt-20 max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

              {/* Left Column: World Class Customer Support */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-amber-500 uppercase tracking-wider mb-6">
                  WORLD CLASS CUSTOMER SUPPORT
                </h3>
                <ul className="space-y-4 sm:space-y-5">
                  {supportPoints.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3.5 sm:gap-4 text-white text-base sm:text-lg font-normal tracking-wide leading-relaxed hover:text-amber-300 transition-colors duration-200 group"
                    >
                      <span className="flex-shrink-0 mt-1 sm:mt-1.5">
                        <svg
                          className="w-4 h-4 text-white/90 group-hover:text-amber-400 transition-colors"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <circle cx="12" cy="12" r="8" />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Recognition & Award */}
              <div className="lg:border-l lg:border-white/10 lg:pl-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl">🏆</span>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-500 uppercase tracking-wider">
                    RECOGNITION & AWARD
                  </h3>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0b1a30]/80 border border-amber-500/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                    <strong className="text-amber-400 font-semibold">Mr. Vajid Mirza</strong>, Director of Parveen Fleet Pvt. Ltd., was honored with the Prestigious <span className="text-white font-semibold">International Business Startup and Entrepreneur's Association (IBSEA)</span> Award for <span className="text-amber-400 font-semibold">"Best Corporate Car Rental of the Year 2024."</span>
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    This esteemed recognition was presented on Saturday, 21st December 2024, celebrating excellence in corporate transportation services.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* =========================================================================
              OUR CHAUFFEURS AND FLEETS SECTION
             ========================================================================= */}
          <div id="chauffeurs-and-fleets" className="mt-14 sm:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
                <span>✦</span> EXCELLENCE BEHIND THE WHEEL
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                OUR CHAUFFEURS AND <span className="text-amber-500">FLEETS</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto">
                We operate with our disciplined, police-verified chauffeurs and an owned fleet ranging from executive sedans to luxury Volvo buses.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-1 rounded-full bg-amber-500"></span>
                <span className="w-6 h-1 rounded-full bg-blue-500"></span>
                <span className="w-2 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>

            {/* 4 Chauffeur Standard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
              {chauffeurPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#071732] border border-white/10 hover:border-amber-400 hover:bg-[#0a1f42] transition-all duration-300 shadow-xl group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-[#0b1a30] transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center text-xs font-semibold text-emerald-400">
                    <span>✓ Certified Standard</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Owned Fleet Range Cards (Sedan to Volvo Buses) */}
            <div className="max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md mb-14">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-amber-500 uppercase tracking-wider">
                    OUR DIVERSE FLEET LINEUP
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    Operated with our own well-maintained vehicles across PAN India
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Sedan to Volvo Buses
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {fleetOverview.map((fleet, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#0b1a30]/80 border border-white/10 hover:border-amber-400/60 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base sm:text-lg font-black text-white group-hover:text-amber-400 transition-colors">
                        {fleet.category}
                      </h4>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300">
                        {fleet.capacity}
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-amber-400/90 mb-1.5">
                      {fleet.models}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {fleet.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =========================================================================
              CHAUFFEURS TRAINING SECTION (MATCHING USER SLIDES 2 & 3)
             ========================================================================= */}
          <div id="chauffeurs-training" className="mt-14 sm:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
                <span>✦</span> RIGOROUS SKILL & SAFETY CURRICULUM
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                CHAUFFEURS <span className="text-amber-500">TRAINING</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-1 rounded-full bg-amber-500"></span>
                <span className="w-6 h-1 rounded-full bg-blue-500"></span>
                <span className="w-2 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>

            {/* Slide 1 Frame: Introduction, Maintenance, Safe Driving, Customer Service (Image 2) */}
            <div className="relative max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md mb-10 sm:mb-12">
              {/* Golden Corner Accents as seen in user slide */}
              <span className="absolute top-0 left-0 w-8 h-8 sm:w-14 sm:h-14 border-t-3 border-l-3 border-amber-500 pointer-events-none rounded-tl-3xl"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 sm:w-14 sm:h-14 border-b-3 border-r-3 border-amber-500 pointer-events-none rounded-br-3xl"></span>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                {/* Left Column */}
                <div className="space-y-7">
                  {/* INTRODUCTION TO CHAUFFEURING */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      INTRODUCTION TO CHAUFFEURING
                    </h3>

                    {/* Role and Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Role and Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Provide safe, comfortable, and efficient transportation.',
                          'Maintain a professional and courteous demeanor.',
                          'Ensure vehicle cleanliness and maintenance.',
                          'Assist passengers with luggage and special requests.',
                          'Adhere to traffic laws and company policies.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Professional Appearance */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Professional Appearance
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Wear a well-groomed uniform or business attire.',
                          'Maintain good personal hygiene.',
                          'Avoid excessive accessories and strong fragrances.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* VEHICLE MAINTENANCE AND SAFETY */}
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      VEHICLE MAINTENANCE AND SAFETY
                    </h3>
                    <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                      Pre-Trip Inspection
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Check tire pressure and tread.',
                        'Inspect fluid levels (oil, coolant, windshield washer, brake fluid).',
                        'Ensure headlights, brake lights, and indicators are functional.',
                        'Verify cleanliness of interior and exterior.',
                        'Ensure proper fuel levels.',
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                          <span className="flex-shrink-0 mt-1">
                            <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-7 lg:border-l lg:border-white/10 lg:pl-10">
                  {/* Safe Driving Practices */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                      Safe Driving Practices
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Follow speed limits and road signs.',
                        'Maintain a safe following distance.',
                        'Avoid aggressive driving behaviors.',
                        'Use defensive driving techniques.',
                        'Adjust driving based on weather and traffic conditions.',
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                          <span className="flex-shrink-0 mt-1">
                            <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CUSTOMER SERVICE EXCELLENCE */}
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      CUSTOMER SERVICE EXCELLENCE
                    </h3>

                    {/* Communication Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Communication Skills
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Greet passengers with courtesy and professionalism.',
                          'Confirm destination and preferred route.',
                          'Engage in polite conversation if requested.',
                          'Maintain confidentiality and discretion.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Handling Special Requests */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Handling Special Requests
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Provide amenities such as bottled water or newspapers.',
                          'Adjust climate and music per passenger preferences.',
                          'Assist with mobility aids and luggage.',
                          'Handle VIP and high-profile clients with discretion.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Slide 2 Frame: Navigation, Emergency, First Aid, Legal & Ethics (Image 3) */}
            <div className="relative max-w-4xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
              {/* Golden Corner Accents as seen in user slide */}
              <span className="absolute top-0 left-0 w-8 h-8 sm:w-14 sm:h-14 border-t-3 border-l-3 border-amber-500 pointer-events-none rounded-tl-3xl"></span>
              <span className="absolute bottom-0 right-0 w-8 h-8 sm:w-14 sm:h-14 border-b-3 border-r-3 border-amber-500 pointer-events-none rounded-br-3xl"></span>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                {/* Left Column */}
                <div className="space-y-7">
                  {/* NAVIGATION AND ROUTE PLANNING */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      NAVIGATION AND ROUTE PLANNING
                    </h3>

                    {/* Using GPS and Maps */}
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Using GPS and Maps
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Familiarize yourself with multiple routes.',
                          'Use GPS for real-time traffic updates.',
                          'Be aware of construction zones and road closures.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Time Management */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Time Management
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Plan for delays and peak traffic hours.',
                          'Arrive at pick-up locations ahead of schedule.',
                          'Monitor flight and train schedules for timely arrivals.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* EMERGENCY PROCEDURES */}
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      EMERGENCY PROCEDURES
                    </h3>
                    <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                      Handling Accidents and Breakdowns
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Ensure passenger safety first.',
                        'Call emergency services if required.',
                        'Report the incident to the employer or dispatch.',
                        'Follow company protocol for insurance and repairs.',
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                          <span className="flex-shrink-0 mt-1">
                            <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-7 lg:border-l lg:border-white/10 lg:pl-10">
                  {/* First Aid and Crisis Management */}
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                      First Aid and Crisis Management
                    </h4>
                    <ul className="space-y-2">
                      {[
                        'Keep a stocked first-aid kit in the vehicle.',
                        'Assist passengers in case of medical emergencies.',
                        'Follow proper procedures in case of fire or evacuation needs.',
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                          <span className="flex-shrink-0 mt-1">
                            <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <circle cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LEGAL AND ETHICAL RESPONSIBILITIES */}
                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-4">
                      LEGAL AND ETHICAL RESPONSIBILITIES
                    </h3>

                    {/* Traffic Laws and Regulations */}
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Traffic Laws and Regulations
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Hold a valid driver’s license and necessary permits.',
                          'Understand local and national driving regulations.',
                          'Never drive under the influence of drugs or alcohol.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Confidentiality and Ethics */}
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-amber-500 mb-2.5">
                        Confidentiality and Ethics
                      </h4>
                      <ul className="space-y-2">
                        {[
                          'Maintain discretion regarding passenger conversations.',
                          'Avoid discussing personal or company matters with clients.',
                          'Uphold integrity and professionalism at all times.',
                        ].map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                            <span className="flex-shrink-0 mt-1">
                              <svg className="w-3.5 h-3.5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="8" />
                              </svg>
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Support & Action Bar */}
            <div className="mt-10 max-w-4xl mx-auto p-6 rounded-2xl bg-[#0b1a30]/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Dedicated to Professional Chauffeur Development & Passenger Peace of Mind
                </span>
              </div>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex-shrink-0"
              >
                Inquire Corporate Fleet
              </button>
            </div>
          </div>

          {/* =========================================================================
              SERVING CLIENTS IN 114 CITIES (PAN INDIA NETWORK)
             ========================================================================= */}
          <div id="cities-network" className="mt-14 sm:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                PAN INDIA PRESENCE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                SERVING CLIENTS IN <span className="text-amber-500">114 CITIES</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-300 font-normal max-w-2xl mx-auto">
                Comprehensive ground transport infrastructure, corporate staff fleets, and trusted car rentals operating seamlessly across 17 states and 114+ cities.
              </p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-1 rounded-full bg-amber-500"></span>
                <span className="w-6 h-1 rounded-full bg-emerald-500"></span>
                <span className="w-2 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>

            {/* Quick Interactive Search Bar */}
            <div className="max-w-md mx-auto mb-10 sm:mb-12">
              <div className="relative">
                <input
                  type="text"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  placeholder="Search any city or state (e.g. Pune, Delhi, Mumbai)..."
                  className="w-full pl-11 pr-14 py-3 rounded-2xl bg-[#071732] border border-white/15 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 shadow-xl transition-all"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  🔍
                </span>
                {citySearch && (
                  <button
                    onClick={() => setCitySearch('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-amber-400 hover:text-white font-semibold"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* 114 Cities Across 17 States Grid Box */}
            <div className="max-w-6xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
                {filteredNetworkCities.map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-1.5">
                      <h4 className={`text-sm sm:text-base font-black tracking-wide ${item.color}`}>
                        {item.state}
                      </h4>
                    </div>
                    <ul className="space-y-1.5">
                      {item.cities.map((city, cIdx) => (
                        <li
                          key={cIdx}
                          className="flex items-center gap-2 text-white/90 text-xs sm:text-[13px] hover:text-amber-300 transition-colors"
                        >
                          <span className="text-gray-400 text-[11px] font-bold">➯</span>
                          <span>{city}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {filteredNetworkCities.length === 0 && (
                <div className="text-center py-10 text-gray-400 text-sm">
                  No cities or states found matching "{citySearch}".
                </div>
              )}

              {/* Bottom Network Summary Bar */}
              <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-200">
                    PAN India Network: 17 States & Union Territories | 114+ Cities
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] font-black text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md flex-shrink-0"
                >
                  Book Pan India Cab
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              REACH US AT (OFFICIAL CORPORATE CONTACT & LOCATIONS SLIDE)
             ========================================================================= */}
          <div id="reach-us" className="mt-14 sm:mt-20">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
                <span>✦</span> CONNECT WITH US
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
                REACH <span className="text-amber-500">US AT</span>
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="w-12 h-1 rounded-full bg-amber-500"></span>
                <span className="w-6 h-1 rounded-full bg-blue-500"></span>
                <span className="w-2 h-1 rounded-full bg-white/20"></span>
              </div>
            </div>

            {/* Slide-Style 2-Column Box (Identical to user's Reach Us At screenshot) */}
            <div className="max-w-5xl mx-auto bg-[#071732] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                {/* Left Column: 4 Office Addresses (7 cols on lg) */}
                <div className="lg:col-span-7 space-y-6">

                  {/* Pune (HO) */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 uppercase tracking-wide">
                        Pune (HO):
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pl-4 font-normal">
                      Shop No-02, Ground Floor, Ashish Apartment, Plot No- 05, Near Open Window Cake S.B. Road, Shivajinagar, Pune, MH-411016.
                    </p>
                  </div>

                  {/* Mumbai */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 uppercase tracking-wide">
                        Mumbai:
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pl-4 font-normal">
                      Office No. 8 in Business Centre 123/24, Kapadia Industrial Estate, Bldg. 1, 2nd floor, Suite 12, Above Domino’s Pizza, Andheri Kurla Road, Andheri (East), Mumbai-400093.
                    </p>
                  </div>

                  {/* Hyderabad */}
                  <div className="border-b border-white/10 pb-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 uppercase tracking-wide">
                        Hyderabad:
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pl-4 font-normal">
                      MIG 155, KPR Complex, KPHB Road No. 1, Above State Bank of India, Kukatpally, Hyderabad, Telangana-500072.
                    </p>
                  </div>

                  {/* Delhi */}
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 uppercase tracking-wide">
                        Delhi:
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed pl-4 font-normal">
                      1154, Ground Floor, Pocket-3, Sector-19, Akshardham Apartment, Dwarka, New Delhi, Delhi-110075.
                    </p>
                  </div>

                </div>

                {/* Right Column: Contact Channels & Tagline (5 cols on lg) */}
                <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-white/10 lg:pl-8 flex flex-col justify-between h-full">
                  <div className="space-y-6">
                    {/* Call at */}
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 mb-2">
                        Call at:
                      </h4>
                      <a href="tel:+917767000841" className="text-base sm:text-lg font-bold text-white hover:text-amber-400 block transition-colors">
                        +91 77670 00841
                      </a>
                      <a href="tel:+917767000836" className="text-base sm:text-lg font-bold text-white hover:text-amber-400 block transition-colors mt-1">
                        +91 77670 00836
                      </a>
                      <a href="tel:+919545899838" className="text-base sm:text-lg font-bold text-white hover:text-amber-400 block transition-colors mt-1">
                        +91 95458 99838
                      </a>
                    </div>

                    {/* Email Us */}
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 mb-2">
                        Email Us:
                      </h4>
                      <a href="mailto:sales@parveenfleets.in" className="text-xs sm:text-sm text-gray-200 hover:text-amber-400 block transition-colors font-medium break-all">
                        sales@parveenfleets.in
                      </a>
                      <a href="mailto:r.kanchan@parveenfleets.in" className="text-xs sm:text-sm text-gray-200 hover:text-amber-400 block transition-colors font-medium break-all mt-1">
                        r.kanchan@parveenfleets.in
                      </a>
                      <a href="mailto:vajidmirza@parveenfleets.in" className="text-xs sm:text-sm text-gray-200 hover:text-amber-400 block transition-colors font-medium break-all mt-1">
                        vajidmirza@parveenfleets.in
                      </a>
                    </div>

                    {/* Visit Now */}
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-amber-400 mb-2">
                        Visit Now:
                      </h4>
                      <a
                        href="https://www.parveenfleets.in"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm sm:text-base text-white hover:text-amber-400 block transition-colors font-bold underline"
                      >
                        www.parveenfleets.in
                      </a>
                    </div>
                  </div>

                  {/* Corporate Motto / Tagline Banner */}
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-amber-400 text-sm sm:text-base font-black tracking-wide">
                      Redefining Travel with
                    </p>
                    <p className="text-white text-lg sm:text-xl font-black tracking-tight mt-0.5">
                      Safety, Comfort, and Innovation!
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
