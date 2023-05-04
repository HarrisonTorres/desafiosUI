'use client'
import React from "react"

import Avaliacao from '../components/desafiosFrontEndEAfins/Avaliacao/avaliacao'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Avaliacao/>
      </div>
    </main>
  )
}
