import { useState } from 'react'
import {
  Button, Form, OverlayTrigger, Popover,
} from 'react-bootstrap'

export default function SummaryForm() {
  const [termsAndConditionChecked, setTermsAndConditionChecked] = useState(false)

  const toggleTermsAndConditions = () => setTermsAndConditionChecked(!termsAndConditionChecked)

  const popover = (
    <Popover id="tc-popover">
      <Popover.Body>
        No ice cream will actually be delivered
      </Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}> Terms and Conditions </span>
      </OverlayTrigger>
    </span>
  )

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsAndConditionChecked}
          onChange={toggleTermsAndConditions}
          label={checkboxLabel}
        />
      </Form.Group>

      <Button type="submit" disabled={!termsAndConditionChecked}>
        Confirm order
      </Button>
    </Form>
  )
}
