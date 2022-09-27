import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import { OrderDetailsProvider } from '../../../contexts/OrderDetails'

test('update scoop subtotal when soops change', async () => {
  render(<Options optionType='scoops' />, { wrapper: OrderDetailsProvider })

  // expect total starts as $0.00
  const scoopsTotal = screen.getByText('Scoops total: $', { exact: false })
  expect(scoopsTotal).toHaveTextContent('0.00')

  // update vanilla scoops to 1 and check the subtotal. (Every scoop costs 2$)
  const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })

  await userEvent.clear(vanillaInput) // IMPO when handeling an input with userEvent, is better to clear it before!
  await userEvent.type(vanillaInput, '1')

  expect(scoopsTotal).toHaveTextContent('2.00')

  // update chocolate scoops to 2 and check the subtotal. (Every scoop costs 2$)
  const chocolateScoops = await screen.findByRole('spinbutton', { name: 'Chocolate' })

  await userEvent.clear(chocolateScoops)
  await userEvent.type(chocolateScoops, '2')

  expect(scoopsTotal).toHaveTextContent('6.00')
})
