import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import FancyBox from '../FancyBox'
import myResume from '../assets/khurram_resume.pdf'

export const TextWithImage = ({ id, imgSrc, content, justifyContent, alignment }) => {
  return (
    <section className='section pt-0' id={id}>
        <Row className={`justify-content-${justifyContent} align-items-${alignment}`}>
            <Col md={2}>
                <img src={imgSrc} alt="Syed Khurram Munir" className="img-fluid img-shadow" />
            </Col>
            <Col md={8}>
                <h2 className='p-0'>About Me</h2>
                <p>{content}</p>
            </Col>
            <Col md={6}>
              <FancyBox>
                <Button variant='outline-success' data-fancybox data-type="pdf" data-width="2000" data-height="2000" href={myResume}>View Resume</Button>
              </FancyBox>
            </Col>
        </Row>
    </section>
  )
}