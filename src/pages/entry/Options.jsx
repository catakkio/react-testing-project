/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import AlertBanner from '../../components/AlertBanner'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      // get data with axios
      axios
        .get(`${optionType}`)
        .then((response) => setItems(response.data))
        .catch(() => setError(true))

      // const response = await fetch(`http://localhost:3030/${optionType}`)
      // const data = await response.json()
      // setItems(data)
    }

    fetchData()
  }, [optionType])

  if (error) {
    return <AlertBanner />
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption
  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ))

  return <Row>{optionItems}</Row>
}
