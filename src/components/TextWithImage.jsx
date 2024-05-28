import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const TextWithImage = ({ imgSrc, content, justifyContent }) => {
  return (
    <section className='section'>
        <Row className={`justify-content-${justifyContent}`}>
            <Col md={2}>
                <img src={imgSrc} alt="Syed Khurram Munir" className="img-fluid img-shadow" />
            </Col>
            <Col md={8}>
                <h2>About Me</h2>
                <p>{content}</p>
            </Col>
        </Row>
    </section>
  )
}