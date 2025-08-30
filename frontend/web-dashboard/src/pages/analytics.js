import React from 'react'
import NavBar from '../components/NavBar'
import SolarLoadChart from '../components/SolarLoadChart'

export default function Analytics(){
  const sampleData = Array.from({length:24}).map((_,i)=>({hour:i, solar: Math.random()*2, load: Math.random()*1.5}))
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <NavBar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Analytics</h1>
        <section className="bg-slate-800/60 rounded p-4">
          <SolarLoadChart data={sampleData} />
        </section>
      </main>
    </div>
  )
}
