import React from 'react'
import { Card } from 'react-bootstrap'

const Services = ({ service, image }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Header className='border-0 bg-transparent'>{ image ? <a href={service.url} target='_blank'><img src={service.image} width='100' /></a>  :  service.image}</Card.Header>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text className='font-wight-bold'>
            {service.content}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Services