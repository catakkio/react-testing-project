import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function SummaryForm() {
    const [termsAndConditionChecked, setTermsAndConditionChecked] = useState(false)

    const toggleTermsAndConditions = () => setTermsAndConditionChecked(!termsAndConditionChecked)

    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: 'blue' }}> Terms and Conditions </span>
        </span>
    )
    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type='checkbox'
                    checked={termsAndConditionChecked}
                    onChange={toggleTermsAndConditions}
                    label={checkboxLabel}
                />
            </Form.Group>

            {/* <Popover.Body>No ice cream will actually be delivered</Popover.Body> */}

            <Button type="submit" disabled={!termsAndConditionChecked}>
                Confirm order
            </Button>
        </Form>
    )
}
