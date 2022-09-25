import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import OrderEntry from '../OrderEntry'
import { server } from '../../../mocks/server'

it('handles error for scoops and toppings routes', () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) => rest(ctx.status(500))),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) => rest(ctx.status(500)))
  )

  render(<OrderEntry />)

  const alerts = screen.findAllByRole('alert', {
    name: 'An unexpected error occured.P PLease try again later',
  })
  console.log(alerts)
})
