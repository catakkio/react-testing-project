import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

const btnName = /confirm order/i
const checkboxName = /terms and conditions/i

let btn, checkbox, user;

beforeEach(() => {
    user = userEvent.setup()
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
it('Checkbox enables btn on 1st click and disables on 2nd click', async () => {
    // Checking checkbox enables button
    await userEvent.click(checkbox);
    expect(btn).toBeEnabled();

    //Unchecking checkbox disables button
    await userEvent.click(checkbox);
    expect(btn).toBeDisabled();
})

xit("Checkbox enables button on first click and disables on second click", async () => {
    // const user = userEvent.setup(); // THIS LINE
    render(<SummaryForm />);
    const checkbox = screen.getByRole("checkbox", {
        name: /terms and conditions/i,
    });
    const confirmButton = screen.getByRole("button", { name: /confirm order/i });

    await userEvent.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await userEvent.click(checkbox);
    expect(confirmButton).toBeDisabled();
});