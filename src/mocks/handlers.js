import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => res(
    ctx.json([
      { name: 'Chocolate', imagePath: '/images/chocolate.png' },
      { name: 'Vanilla', imagePath: '/images/vanilla.png' },
    ]),
  )),

  rest.get('http://localhost:3030/topping', (req, res, ctx) => res(
    ctx.json([
      { name: 'Cherries', imagePath: '/images/cherries.png' },
      { name: 'Banana', imagePath: '/images/banana.png' },
    ]),
  )),
]
