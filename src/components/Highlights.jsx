import React from 'react'
import { MapPin, ShieldCheck, BadgeCheck, Bike, Mountain } from 'lucide-react'

const WhyCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006D77]/10 text-[#006D77]">
        <Icon size={22} />
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  </div>
)

const PackageCard = ({ image, title, subtitle, price, href }) => (
  <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition">
    <div className="aspect-[16/9] w-full overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-[#006D77] font-semibold">From {price}</span>
        <a
          href={href}
          className="inline-flex items-center rounded-full bg-[#E29578] text-white px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition"
        >
          View Details
        </a>
      </div>
    </div>
  </div>
)

const Highlights = () => {
  return (
    <div className="bg-white">
      {/* Why Us */}
      <section id="why" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#006D77]">Why Travel With Country Miles?</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyCard
              icon={MapPin}
              title="Local Expertise"
              desc="Our crew & road captains are Northeast natives."
            />
            <WhyCard
              icon={ShieldCheck}
              title="Govt. Backed"
              desc="Supported by the Arunachal Tourism Board."
            />
            <WhyCard
              icon={BadgeCheck}
              title="Transparent Pricing"
              desc="No middlemen, no hidden costs."
            />
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section id="packages" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#006D77]">Our Signature Adventures</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PackageCard
              image="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2000&auto=format&fit=crop"
              title="Tawang–Kaziranga Adventure (9D/8N)"
              subtitle="Bike & SUV Expedition through lakes, monasteries, and Kaziranga Safari."
              price="₹22,999"
              href="#product1"
            />
            <PackageCard
              image="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=2000&auto=format&fit=crop"
              title="Tawang Winter Backpacking (6D/5N)"
              subtitle="Slow-travel backpacking through passes and valleys."
              price="₹17,999"
              href="#product2"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#E29578] text-white px-6 py-3 text-sm font-medium shadow hover:shadow-md transition"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-200 bg-white text-gray-900 px-6 py-3 text-sm font-medium hover:border-gray-300 transition"
            >
              Talk to Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Highlights
