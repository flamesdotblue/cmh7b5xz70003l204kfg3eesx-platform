import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <ContactFooter />
      </main>
    </div>
  )
}

export default App
