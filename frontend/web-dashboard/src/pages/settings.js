import React, {useEffect, useState} from 'react'
import NavBar from '../components/NavBar'

export default function Settings(){
  const [settings, setSettings] = useState({notifications:true,theme:'dark'})

  useEffect(()=>{
    // fetch user settings from backend
    // fetch('/settings/1').then(r=>r.json()).then(setSettings)
  },[])

  const save = (e)=>{e.preventDefault(); /* POST to backend */}

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      <NavBar />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">User Settings</h1>
        <form onSubmit={save} className="bg-slate-800/60 rounded p-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={settings.notifications} onChange={e=>setSettings(s=>({...s,notifications:e.target.checked}))} /> Enable notifications
          </label>
          <div className="mt-4">
            <label>Theme</label>
            <select value={settings.theme} onChange={e=>setSettings(s=>({...s,theme:e.target.value}))} className="block mt-1">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>
          <button className="mt-4 bg-teal-400 text-slate-900 px-4 py-2 rounded">Save</button>
        </form>
      </main>
    </div>
  )
}
