import React from 'react'
import NavBar from '../components/NavBar'
import SolarLoadChart from '../components/SolarLoadChart'
import Login from '../components/Login'

export default function Home() {
  // In a full app you'd fetch data from backend
  const sampleData = Array.from({length:24}).map((_,i)=>({hour:i, solar: Math.random()*2, load: Math.random()*1.5}))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <NavBar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">M-Power Dashboard</h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-slate-800/60 rounded p-4">
            <h2 className="text-xl mb-2">Solar vs Load (24h)</h2>
            <SolarLoadChart data={sampleData} />
          </div>
          <div className="bg-slate-800/60 rounded p-4">
            <h2 className="text-xl mb-2">User Login</h2>
            <Login />
          </div>
        </section>
      </main>
    </div>
  )
}
