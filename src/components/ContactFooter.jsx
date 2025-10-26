import React from 'react'
import { Phone, Instagram, MessageCircle } from 'lucide-react'

const ContactFooter = () => {
  return (
    <div className="bg-white">
      {/* Contact / CTA */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#006D77]">Ready to Ride the Northeast?</h2>
          <p className="mt-3 text-gray-600">Connect with our team and plan your next adventure.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#packages"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E29578] text-white px-6 py-3 text-sm font-medium shadow hover:shadow-md transition"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/918257053344"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:border-gray-300 transition"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="tel:+918257053344"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:border-gray-300 transition"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
          <div className="mt-6 text-sm text-gray-700">
            <p>
              Phone: <a className="text-[#006D77] hover:underline" href="tel:+918257053344">+91 82570 53344</a> |{' '}
              <a className="text-[#006D77] hover:underline" href="tel:+919147066477">+91 91470 66477</a>
            </p>
            <p className="mt-1">
              Instagram: <a className="text-[#006D77] hover:underline" href="https://instagram.com/Country_Miles" target="_blank" rel="noreferrer">@Country_Miles</a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center space-x-3 select-none">
            <div className="text-base font-semibold tracking-widest text-[#006D77]">0KM</div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="text-sm font-semibold tracking-wide text-gray-900">COUNTRY MILES</div>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-700 hover:text-[#006D77]">Home</a>
            <a href="#packages" className="text-gray-700 hover:text-[#006D77]">Packages</a>
            <a href="#contact" className="text-gray-700 hover:text-[#006D77]">Contact</a>
            <a href="#terms" className="text-gray-700 hover:text-[#006D77]">Terms</a>
          </nav>
        </div>
        <div className="border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-gray-500">
            ©2025 Country Miles. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactFooter
