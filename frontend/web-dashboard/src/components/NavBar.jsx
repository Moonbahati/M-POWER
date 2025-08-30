import React from 'react'
import Link from 'next/link'

export default function NavBar(){
  return (
    <nav className="bg-slate-900/60 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-teal-300 font-bold">M-Power</div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  )
}
