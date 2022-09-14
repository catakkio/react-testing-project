import { render, screen, fireEvent } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

const btnName = /confirm order/i
const checkboxName = /terms and conditions/i

let btn;
let checkbox;

beforeEach(() => {
    render(<SummaryForm />)
    btn = screen.getByRole('button', { name: btnName })
    checkbox = screen.getByRole('checkbox', { name: checkboxName })
})

it('Initial condition', () => {
    // Checkbox unchecked  and btn disabled by default
    expect(checkbox).not.toBeChecked();
    expect(btn).toBeDisabled()

})

// it('Checkbox behavior', () => { I wrote 'checkbox behavior', but is too generic? Maybe is better to explain better the behavior
it('Checkbox enables btn on 1st click and disables on 2nd click', () => {
    // Checking checkbox enables button
    fireEvent.click(checkbox);
    expect(btn).toBeEnabled();

    //Unchecking checkbox disables button
    fireEvent.click(checkbox);
    expect(btn).toBeDisabled();
})
