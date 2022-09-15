// Test cases done by me while following the lessons. A better version of this file is the App.test.js that is taken by the course.
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  // render(<App />);
  // // const linkElement = screen.getByText(/learn react/i);
  // const linkElement = screen.getByRole('link', { name: /learn react/i })
  // expect(linkElement).toBeInTheDocument();
})

describe('button', () => {
  let btn

  beforeEach(() => {
    render(<App />)
    btn = screen.getByRole('button', { name: 'Change to blue' })
  })

  it('has correct initial color and initial text ', () => {
    expect(btn).toHaveStyle({ backgroundColor: 'red' })
  })

  it('change properly text and color on click', () => {
    fireEvent.click(btn)
    expect(btn).toHaveStyle({ backgroundColor: 'blue' })
    expect(btn.textContent).toBe('Change to red')
  })

  it('has correct initial disabled and checkbox status', () => {
    const checkBox = screen.getByRole('checkbox')

    // checkbox starts unchecked
    expect(checkBox).not.toBeChecked()
    // button starts enabled
    expect(btn).toBeEnabled()
  })

  it('background reflects disabled status', () => {
    const checkBox = screen.getByRole('checkbox')
    fireEvent.click(checkBox)

    expect(btn).toHaveStyle({ backgroundColor: 'grey' })

    fireEvent.click(checkBox)

    expect(checkBox).not.toBeChecked()
    expect(btn).toHaveStyle({ backgroundColor: 'red' })
  })
})

describe('checkbox', () => {
  let btn
  let checkBox
  beforeEach(() => {
    render(<App />)

    btn = screen.getByRole('button', { name: 'Change to blue' })
    checkBox = screen.getByRole('checkbox')
  })

  it('disabels button on first click and enables on second click', () => {
    fireEvent.click(checkBox)
    expect(checkBox).toBeChecked()
    expect(btn).toBeDisabled()

    fireEvent.click(checkBox)
    expect(checkBox).not.toBeChecked()
    expect(btn).toBeEnabled()
  })
})
