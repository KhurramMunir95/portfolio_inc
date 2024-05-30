import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Form>
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>
            </Col>
            <Col md={6}>    
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
            </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder='Your Message...' rows={8} />
        </Form.Group>
        <Button variant="outline-success" className='mx-auto d-block' type="submit">
            Send Message
        </Button>
    </Form>
  )
}

export default Contact