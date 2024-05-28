import React from 'react'
import ReactParticles from './ReactParticles'

const Banner = ({title, subTitle}) => {
  return (
    <>
      <section className='section banner'>
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
          </div>
        </div>
        <ReactParticles />
      </section>
    </>
  )
}

export default Banner