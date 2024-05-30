import React from 'react';
import ReactParticles from './ReactParticles';
import { Button } from 'react-bootstrap';

const Banner = ({title, subTitle}) => {
  return (
    <>
      <section className='section banner'>
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <Button variant='outline-success' href='#about-me'>About Me</Button>
          </div>
        </div>
        <ReactParticles />
      </section>
    </>
  )
}

export default Banner