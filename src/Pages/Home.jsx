import React, { useState } from 'react'
import Banner from '../components/Banner'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TextWithImage } from '../components/TextWithImage'
import profilePic from '../assets/images/khurram.jpg'
import Services from '../components/Services'
import { TbWorldWww } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { GrVmMaintenance } from "react-icons/gr";
import cbImage from '../assets/images/projects/cb.png';
import idaImage from '../assets/images/projects/ida.png';
import vrImage from '../assets/images/projects/vr.png';
import wavetel from '../assets/images/projects/wavetel.png';
import Contact from '../components/Contact'

const Home = () => {
  const [services, setServices] = useState([
    { 
      id: 1,
      title: 'Static Website Developement',
      content: `Create a stunning online presence with our Static Website Development services. 
      Perfect for small businesses and personal portfolios, our static websites are fast, secure, and easy to maintain. 
      Let us build you a sleek, professional website that captures your brand and engages your audience.`,
      image: <TbWorldWww className='icon' />
    },
    {
      id: 2,
      title: 'Dynamic Website Development',
      content: `Engage and interact with your visitors through our Dynamic Website Development solutions. 
      Whether you need an e-commerce platform, a content management system, or a user-driven website, 
      our dynamic sites offer flexibility, scalability, and robust functionality to meet your unique business needs.`,
      image: <BsDatabase className='icon' />
    },
    {
      id: 3,
      title: 'Website Maintenance',
      content: `Keep your website running smoothly and securely with our comprehensive Website Maintenance services. 
      From regular updates and backups to troubleshooting and performance optimization, we ensure your site remains up-to-date, 
      fast, and secure, allowing you to focus on your business.`,
      image: <GrVmMaintenance className='icon' />
    }
  ]);

  const [projects, setProjects] = useState([
    {
      title: 'Content Bazaar',
      content: 'You can find anytype of content here',
      image: cbImage,
      url: 'https://www.contentcloud.media/'
    },
    {
      title: 'I Design Architecture',
      content: `IDA offers comprehensive engineering services tailored to meet the needs of diverse industries. 
      Specializing in innovative solutions, we provide expert consulting, design, and project management for civil, 
      mechanical, electrical, and software engineering projects.`,
      image: idaImage,
      url: 'https://ida.sa/index'
    },
    {
      title: 'Virtual Reality Solutions',
      content: 'This platform is designed to offer the latest in VR experiences across gaming, education, training, and entertainment.',
      image: vrImage,
      url: 'https://khurrammunir95.github.io/VirtualReality/'
    },
    {
      title: 'Wavetel Business',
      content: `Formed in 2010, Wavetel has grown to become a leading provider of telecom services in the UK and Rest of the world. 
      We are proud to be trusted by thousands of organizations across the country.`,
      image: wavetel,
      url: 'https://wavetelbusiness.co.uk/'
    }
  ])

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