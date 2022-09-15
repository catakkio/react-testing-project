/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOptions from './ScoopOptions'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('entrato')
      const options = await fetch(`http://localhost:3030/${optionType}`)
      setItems(await options.json())
    }

    fetchData()
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : null
  const optionItems = items.map((item) => (

    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return (
    <Row>
      an
      {' '}
      {optionItems}
    </Row>
  )
}
