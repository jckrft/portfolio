import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../assets/files/resume.pdf'

export default function About() {
  return (
    <div>
      <p>about</p>
      <Link to='/contact'>contact</Link>
      <a href={resume} target="_blank">resume</ a>
    </div>
  )
}
