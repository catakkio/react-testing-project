import { rest } from 'msw'

export const handlers = [
  rest.get('/scoops', (req, res, ctx) => res(
    ctx.status(200),
    ctx.json([
      { name: 'Chocolate', imagePath: '/images/chocolate.png' },
      { name: 'Vanilla', imagePath: '/images/vanilla.png' },
    ]),
  )),

  rest.get('/toppings', (req, res, ctx) => res(
    ctx.status(200),

    ctx.json([
      { name: 'Cherries', imagePath: '/images/cherries.png' },
      { name: 'Banana', imagePath: '/images/banana.png' },
    ]),
  )),
]
