import React, {useState} from 'react'
import axios from 'axios'

export default function Login(){
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handle = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post('/auth/login',{phone,password})
      setMsg('Login success')
    }catch(err){
      setMsg('Login failed')
    }
  }

  return (
    <form onSubmit={handle} className="flex flex-col gap-2">
      <input className="p-2 rounded bg-slate-900" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" />
      <input className="p-2 rounded bg-slate-900" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
      <button className="mt-2 bg-teal-400 text-slate-900 px-3 py-2 rounded">Login</button>
      {msg && <p className="text-sm">{msg}</p>}
    </form>
  )
}
