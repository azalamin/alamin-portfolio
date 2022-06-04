import React from 'react'
import resume from '../../assets/al-amin-sheikh-resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} className='btn'  download>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA