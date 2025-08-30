import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function SolarLoadChart({data}){
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data} margin={{top:10,right:30,left:0,bottom:0}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="solar" stroke="#82ca9d" name="Solar (kWh)" />
        <Line type="monotone" dataKey="load" stroke="#8884d8" name="Load (kWh)" />
      </LineChart>
    </ResponsiveContainer>
  )
}
