import React from 'react'
import Hero from '../components/Hero'
import CustomFilter from '../components/CustomFilter'

export default function HomePage() {
  return (
    <main className="w-full max-w-7xl mx-auto py-10">
      <Hero />
      <CustomFilter />
    </main>
  )
}
