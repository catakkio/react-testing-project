import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default function AlertBanner({
  message = 'An unexpected error occurred. Please try again later',
  variant = 'danger',
}) {
  return (
    <Alert variant={variant} style={{ backgroundColor: 'red' }}>
      {message}
    </Alert>
  )
}
