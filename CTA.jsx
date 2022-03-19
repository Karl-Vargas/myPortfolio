import React from 'react'
import CV from '../../assets/KarlVargasCV.pdf'

// Call To Action. buttons like submit/signing in etc

const CTA = () => {
  return (
    <div className='cta'>

    <a href={CV} download className='btn'>Download CV</a>    
    <a href="#contact" className='btn btn-primary'> Let's talk</a>
    </div>
  )
}

export default CTA