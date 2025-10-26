import React from 'react'

const Hero = () => {
  return (
    <section className="relative pt-16">
      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop"
          alt="Rider on a mountain pass"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/40" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
          <div className="text-white">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Explore the Northeast with Country Miles
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Ride, Trek, and Discover the hidden gems of Arunachal — with local experts.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#packages"
                className="rounded-full bg-white/95 text-gray-900 px-6 py-3 text-sm font-medium shadow hover:bg-white transition"
              >
                View Packages
              </a>
              <a
                href="#contact"
                className="rounded-full bg-[#E29578] text-white px-6 py-3 text-sm font-medium shadow hover:shadow-md transition"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
