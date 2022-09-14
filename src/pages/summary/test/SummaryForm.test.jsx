import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

const btnName = /confirm order/i;
const checkboxName = /terms and conditions/i;

let btn; let
  checkbox;

beforeEach(() => {
  render(<SummaryForm />);
  btn = screen.getByRole('button', { name: btnName });
  checkbox = screen.getByRole('checkbox', { name: checkboxName });
});

it('Initial condition', () => {
  // Checkbox unchecked  and btn disabled by default
  expect(checkbox).not.toBeChecked();
  expect(btn).toBeDisabled();
});

// it('Checkbox behavior', () => { I wrote 'checkbox behavior', but is too generic?
// Maybe is better to explain better the behavior
it('Checkbox enables btn on 1st click and disables on 2nd click', async () => {
  // Checking checkbox enables button
  userEvent.click(checkbox);
  expect(btn).toBeEnabled();

  // Unchecking checkbox disables button
  userEvent.click(checkbox);
  expect(btn).toBeDisabled();
});

it('popover responds to hover', async () => {
  const popoverText = /no ice cream will actually be delivered/i;
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  // const user = userEvent.setup();

  // popover starts out hidden
  const nullPopover = screen.queryByText(popoverText);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  userEvent.hover(termsAndConditions);
  const popover = screen.getByText(popoverText);
  /* using getBy, if we weren't able to find the elment, an error would be thrown.
   * So the next line, could seems uncessary,but for redability is better to include it */
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions);
  await waitFor(() => {
    // screen.queryByText(popoverText);
    const popoverDisappeared = screen.queryByText(popoverText);
    expect(popoverDisappeared).toBe(null);
  });
});
