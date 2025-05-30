// components/Radar.tsx
'use client'

import { useState } from 'react'
import './radar.css'

export const Radar = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className={`absolute bottom-20 left-10 opacity-5 ${checked ? 'radar-mode-2' : ''}`}
      id="radar-container"
    >
      <div id="radar">
        <div id="targets" />
      </div>
    </div>
  )
}
