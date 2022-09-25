import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('display image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />)

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']) // toEqual used for object, array
})

it('display image for each topping option from server', async () => {
  render(<Options optionType="toppings" />)

  // find imgs
  const toppingImgs = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImgs).toHaveLength(2)

  // check alt text
  const altText = toppingImgs.map((scoopImg) => scoopImg.alt)
  expect(altText).toEqual(['Cherries topping', 'Banana topping'])
})
