import React, { useState } from 'react'
import Banner from '../components/Banner'
import { Col, Container, Row } from 'react-bootstrap'
import { TextWithImage } from '../components/TextWithImage'
import profilePic from '../assets/images/khurram.jpg'
import Services from '../components/Services'

import projects from '../assets/data/Projects';
import services from '../assets/data/Services';

import Contact from '../components/Contact'

const Home = () => {

  const aboutContent = `Dive into the dynamic world of software development with me 
  at the helm! With a wealth of expertise spanning React, Node.js, MongoDB, 
  and both frontend and backend realms, I orchestrate digital marvels that captivate and inspire. 
  From crafting sleek user interfaces to architecting robust backend solutions, 
  my passion for innovation fuels every line of code. Join me on a journey where creativity meets technical mastery, 
  and let's build tomorrow's digital landscape together, one groundbreaking project at a time!`;

  return (
    <Container>
      <Banner title='Syed Khurram Munir' subTitle='Software Developer' />
      <TextWithImage id="about-me" content={aboutContent} imgSrc={profilePic} justifyContent='center' alignment='center' />
      <section className='section services-section' id="services">
        <h2 className='text-center'>Services</h2>
        <Row>
        {
          services.map((service) => (
            <Col md={4} key={service.id}>
              <Services service={service} />
            </Col>
          ))
        }
        </Row>
      </section>
      <section className='section projects-section' id="projects">
        <h2 className='text-center'>Projects</h2>
        <Row>
        {
          projects.map((project) => (
            <Col md={4} key={project.title} className='mt-3'>
              <Services service={project} image="image" />
            </Col>
          ))
        }
        </Row>
      </section>
      <section className='section contact-section' id='contact-me'>
        <h2 className='text-center'>Connect with Me Today!</h2>
        <Row className='justify-content-center'>
          <Col md={8}>
            <Contact /> 
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Home