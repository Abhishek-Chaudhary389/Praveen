import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#071325] text-white pt-16 pb-24 sm:pb-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Banner */}
        <div className="mb-12 pb-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
              ✦ Parveen Fleet Private Limited
            </span>
            <p className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Redefining Travel with Safety, Comfort, and Innovation!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+917767000838"
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0b1a30] text-xs font-black uppercase tracking-wider transition-colors shadow-md"
            >
              Call 24/7 Desk
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              All Offices
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand & Head Office */}
          <div>
            <div className="mb-4">
              <Link to="/" className="inline-block p-2.5 rounded-2xl bg-white shadow-md hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Parveen Fleets Pvt. Ltd."
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed mb-3">
              Formerly "Parveen Tours & Travels" (Est. 2012). PAN India employee transport & car rental services operating across 114+ cities.
            </p>
            <div className="text-xs text-gray-400 leading-relaxed border-t border-white/10 pt-3">
              <strong className="text-amber-400 block mb-1">Pune (Head Office):</strong>
              Shop No-02, Ground Floor, Ashish Apartment, Plot No- 05, Near Open Window Cake S.B. Road, Shivajinagar, Pune, MH-411016.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-gray-300 font-medium">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/rent" className="hover:text-amber-400 transition-colors">Our Fleet Garage</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Vehicle Gallery</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Parveen Fleet</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact All Offices</Link></li>
            </ul>

            <h4 className="text-xs font-black text-amber-400 uppercase tracking-wider mt-6 mb-2">Branch Locations</h4>
            <p className="text-xs text-gray-400">
              Pune (HO) • Mumbai • Delhi • Hyderabad
            </p>
          </div>

          {/* Col 3: Popular Fleet */}
          <div>
            <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider mb-4">Popular Fleet</h4>
            <ul className="space-y-2 text-xs text-gray-300 font-medium">
              <li>Toyota Innova Crysta (7+1 Seats)</li>
              <li>Maruti Suzuki Ertiga (6+1 Seats)</li>
              <li>Swift Dzire & Hyundai Aura (4+1 Seats)</li>
              <li>Mahindra Bolero Neo & Classic</li>
              <li>Luxury Volvo Coaches & Staff Shuttles</li>
            </ul>
            <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-300">
              <span className="text-amber-400 font-bold block mb-1">Website:</span>
              <a href="https://www.parveenfleets.in" target="_blank" rel="noreferrer" className="text-white hover:text-amber-400 underline font-medium">
                www.parveenfleets.in
              </a>
            </div>
          </div>

          {/* Col 4: Reach Us At */}
          <div>
            <h4 className="text-sm font-black text-amber-400 uppercase tracking-wider mb-4">Reach Us At</h4>
            
            <div className="space-y-3">
              <div>
                <span className="text-xs text-gray-400 uppercase tracking-wider block font-bold mb-1">Call at:</span>
                <a href="tel:+917767000841" className="text-sm font-bold text-amber-400 hover:text-amber-300 block">
                  +91 77670 00841
                </a>
                <a href="tel:+917767000836" className="text-sm font-bold text-gray-200 hover:text-amber-300 block mt-0.5">
                  +91 77670 00836
                </a>
                <a href="tel:+919545899838" className="text-sm font-bold text-gray-200 hover:text-amber-300 block mt-0.5">
                  +91 95458 99838
                </a>
              </div>

              <div className="border-t border-white/10 pt-2.5">
                <span className="text-xs text-gray-400 uppercase tracking-wider block font-bold mb-1">Email Us:</span>
                <a href="mailto:sales@parveenfleets.in" className="text-xs text-gray-200 hover:text-amber-400 block font-medium">
                  sales@parveenfleets.in
                </a>
                <a href="mailto:r.kanchan@parveenfleets.in" className="text-xs text-gray-300 hover:text-amber-400 block font-medium mt-0.5">
                  r.kanchan@parveenfleets.in
                </a>
                <a href="mailto:vajidmirza@parveenfleets.in" className="text-xs text-gray-300 hover:text-amber-400 block font-medium mt-0.5">
                  vajidmirza@parveenfleets.in
                </a>
              </div>

              <div className="border-t border-white/10 pt-2.5">
                <span className="text-xs text-gray-400 uppercase tracking-wider block font-bold">Hours:</span>
                <p className="text-xs text-emerald-400 font-semibold">24x7 Operations Support Desk</p>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span>© 2026 Parveen Fleet Private Limited. All rights reserved.</span>
          <span className="text-gray-400 hidden sm:inline">Pune • Mumbai • Delhi • Hyderabad • 114+ Cities PAN India</span>
          <p className="text-xs text-gray-400">
            Developed by{' '}
            <a
              href="https://www.snstudio.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition-colors"
            >
              SN studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
