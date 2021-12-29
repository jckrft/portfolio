import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>jacquelyn kraft</h1>
      <div>
        <Link to='/about'>about </Link>
        <Link to='/projects'>projects </Link>
        <Link to='/contact'>contact</Link>
      </div>
    </div>
  )
}
