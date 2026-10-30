import React, { useState } from 'react';
import { sendBookingQuery, BOOKING_PHONE_DISPLAY, BOOKING_EMAIL } from '../utils/bookingDispatcher';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Pune (HO)',
    service: 'Employee Transportation',
    message: ''
  });

  const offices = [
    {
      city: 'Pune (Head Office)',
      badge: 'HQ',
      address: 'Shop No-02, Ground Floor, Ashish Apartment, Plot No- 05, Near Open Window Cake S.B. Road, Shivajinagar, Pune, MH-411016.',
      mapLink: 'https://maps.google.com/?q=Shivajinagar,+Pune+411016',
      iconColor: 'bg-amber-500 text-[#0b1a30]'
    },
    {
      city: 'Mumbai Branch',
      badge: 'Branch Office',
      address: 'Office No. 8 in Business Centre 123/24, Kapadia Industrial Estate, Bldg. 1, 2nd floor, Suite 12, Above Domino’s Pizza, Andheri Kurla Road, Andheri (East), Mumbai-400093.',
      mapLink: 'https://maps.google.com/?q=Andheri+Kurla+Road,+Andheri+East,+Mumbai+400093',
      iconColor: 'bg-blue-600 text-white'
    },
    {
      city: 'Hyderabad Branch',
      badge: 'Branch Office',
      address: 'MIG 155, KPR Complex, KPHB Road No. 1, Above State Bank of India, Kukatpally, Hyderabad, Telangana-500072.',
      mapLink: 'https://maps.google.com/?q=KPHB+Road+No+1,+Kukatpally,+Hyderabad+500072',
      iconColor: 'bg-emerald-600 text-white'
    },
    {
      city: 'Delhi Branch',
      badge: 'Branch Office',
      address: '1154, Ground Floor, Pocket-3, Sector-19, Akshardham Apartment, Dwarka, New Delhi, Delhi-110075.',
      mapLink: 'https://maps.google.com/?q=Sector+19+Dwarka,+New+Delhi+110075',
      iconColor: 'bg-purple-600 text-white'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const subject = `Booking & Fleet Inquiry: ${formData.service} - ${formData.name}`;
    const message = `Hello Parveen Fleet Team,%0A%0A• Name: ${formData.name}%0A• Phone: ${formData.phone}%0A• Email: ${formData.email}%0A• Branch: ${formData.city}%0A• Service: ${formData.service}%0A• Details: ${formData.message}`;
    const details = `PARVEEN FLEETS - BOOKING & CONTACT INQUIRY%0D%0A%0D%0ACustomer Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0APreferred Branch: ${formData.city}%0D%0AService Requested: ${formData.service}%0D%0AMessage / Details: ${formData.message}%0D%0A%0D%0APlease contact client and confirm details.`;

    sendBookingQuery({ subject, message, details });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-[#f3f8fd] via-white to-[#f0f6fd] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching company presentation */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-black uppercase tracking-widest mb-3 shadow-xs">
            <span>✦</span> REACH US AT
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b1a30] tracking-tight uppercase">
            GET IN TOUCH WITH <span className="text-amber-500">PARVEEN FLEET</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
            Redefining Travel with Safety, Comfort, and Innovation!
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-12 h-1 rounded-full bg-amber-500"></span>
            <span className="w-6 h-1 rounded-full bg-blue-600"></span>
            <span className="w-2 h-1 rounded-full bg-gray-200"></span>
          </div>
        </div>

        {/* Top 3 Quick Contact Action Cards (Call, Email, Website) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          
          {/* Card 1: Call Us */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-lg shadow-gray-200/40 hover:border-amber-400 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-amber-600 block mb-1">Call At</span>
            <a href="tel:+917767000841" className="text-lg font-black text-[#0b1a30] hover:text-amber-600 block transition-colors">
              +91 77670 00841
            </a>
            <a href="tel:+917767000836" className="text-base font-bold text-gray-700 hover:text-amber-600 block transition-colors mt-0.5">
              +91 77670 00836
            </a>
            <a href="tel:+919545899838" className="text-base font-bold text-gray-700 hover:text-amber-600 block transition-colors mt-0.5">
              +91 95458 99838
            </a>
            <p className="text-xs text-emerald-600 font-semibold mt-2">Available 24x7 for Corporate Support</p>
          </div>

          {/* Card 2: Email Us */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-lg shadow-gray-200/40 hover:border-amber-400 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-blue-600 block mb-1">Email Us</span>
            <a href="mailto:sales@parveenfleets.in" className="text-base font-black text-[#0b1a30] hover:text-blue-600 block transition-colors break-all">
              sales@parveenfleets.in
            </a>
            <a href="mailto:r.kanchan@parveenfleets.in" className="text-sm font-bold text-gray-700 hover:text-blue-600 block transition-colors break-all mt-0.5">
              r.kanchan@parveenfleets.in
            </a>
            <a href="mailto:vajidmirza@parveenfleets.in" className="text-sm font-bold text-gray-700 hover:text-blue-600 block transition-colors break-all mt-0.5">
              vajidmirza@parveenfleets.in
            </a>
            <p className="text-xs text-gray-400 font-medium mt-2">Guaranteed reply within 15 mins</p>
          </div>

          {/* Card 3: Visit Online */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-gray-200/90 shadow-lg shadow-gray-200/40 hover:border-amber-400 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-emerald-600 block mb-1">Visit Now</span>
            <a
              href="https://www.parveenfleets.in"
              target="_blank"
              rel="noreferrer"
              className="text-lg font-black text-[#0b1a30] hover:text-emerald-600 block transition-colors"
            >
              www.parveenfleets.in
            </a>
            <span className="text-xs text-gray-500 block mt-1">Official Web Portal & Online Booking</span>
            <p className="text-xs text-emerald-600 font-semibold mt-2">114+ Cities Network Portal</p>
          </div>

        </div>

        {/* 4 Office Address Cards Showcase (Pune HO, Mumbai, Hyderabad, Delhi) */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">✦ OUR LOCATIONS</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0b1a30] tracking-tight">
                Head Office & Branch Network
              </h2>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              4 Corporate Offices Nationwide
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                      {office.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-400">Office 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#0b1a30] mb-3">
                    {office.city}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    {office.address}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="tel:+917767000838"
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5"
                  >
                    <span>📞</span> Call +91 77670 00838
                  </a>
                  <a
                    href={office.mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    View Map ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white border border-gray-200/90 p-8 sm:p-12 shadow-xl shadow-blue-900/5">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-amber-600 mb-1 block">✦ QUICK BOOKING / INQUIRY</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b1a30]">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Connect with our corporate travel desk directly. We will revert within 15 minutes.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800">
              <div className="text-4xl mb-2">✓</div>
              <h4 className="font-black text-lg">Inquiry Sent Successfully!</h4>
              <p className="text-xs sm:text-sm mt-1">Our executive is connecting with you right away.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Preferred Office / City</label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                  >
                    <option>Pune (Head Office)</option>
                    <option>Mumbai Branch</option>
                    <option>Hyderabad Branch</option>
                    <option>Delhi Branch</option>
                    <option>Other PAN India City</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Service Type</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500"
                >
                  <option>Employee Transportation Service</option>
                  <option>Airport Pick-up & Drop</option>
                  <option>Luxury Cab & Car Rental</option>
                  <option>Shuttle Services</option>
                  <option>Bus & Coach Services (Volvo)</option>
                  <option>Long Term Corporate Lease</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 uppercase block mb-1.5">Requirements / Message</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about passenger count, routes, timing or vehicle preferences..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-semibold text-black focus:outline-none focus:border-amber-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] font-black text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95"
              >
                Send Inquiry to Safety & Sales Desk →
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
