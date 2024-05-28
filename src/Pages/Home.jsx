import React from 'react'
import Banner from '../components/Banner'
import { Container } from 'react-bootstrap'
import { TextWithImage } from '../components/TextWithImage'
import profilePic from '../assets/images/khurram.jpg';

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
      <TextWithImage content={aboutContent} imgSrc={profilePic} justifyContent='center' />
    </Container>
  )
}

export default Home