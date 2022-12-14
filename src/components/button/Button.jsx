import { useState } from 'react'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function Button() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [disabled, setDisabled] = useState(false)

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed'

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to
        {' '}
        {replaceCamelWithSpaces(newButtonColor)}

      </button>
      <br />

      <label htmlFor="disable-button-checkbox">
        Disable button
        <input
          type="checkbox"
          id="disable-button-checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
      </label>
    </div>
  )
}

export default Button
