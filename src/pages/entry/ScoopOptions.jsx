/* eslint-disable react/prop-types */
import React from 'react'
import Col from 'react-bootstrap/Col'

export default function ScoopOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  )
}