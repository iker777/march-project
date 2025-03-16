import React from 'react'
import { Card } from '../../Components/Card'

export const Game = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 min-h-screen'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
