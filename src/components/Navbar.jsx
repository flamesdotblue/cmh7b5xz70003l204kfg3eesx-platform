import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-3 select-none">
          <div className="text-base font-semibold tracking-widest text-[#006D77]">0KM</div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="text-sm sm:text-base font-semibold tracking-wide text-gray-900">COUNTRY MILES</div>
        </a>
        <nav className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="text-gray-700 hover:text-[#006D77] transition">Home</a>
          <a href="#why" className="text-gray-700 hover:text-[#006D77] transition">Why Us</a>
          <a href="#packages" className="text-gray-700 hover:text-[#006D77] transition">Packages</a>
          <a href="#contact" className="text-gray-700 hover:text-[#006D77] transition">Contact</a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center rounded-full bg-[#E29578] text-white px-5 py-2 font-medium shadow-sm hover:shadow-md transition"
          >
            Book Now
          </a>
        </nav>
        <div className="md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[#E29578] text-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            Book Now
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
