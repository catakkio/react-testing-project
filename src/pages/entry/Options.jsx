/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOptions from './ScoopOptions'
import ToppingOptions from './ToppingOptions'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  useEffect(() => {
    async function fetchData() {
      console.log('entrato')
      // get data with fetch
      // const optionsResponse = await fetch(`http://localhost:3030/${optionType}`)
      // // if(optionsResponse.status != 200) throw Promise.reject() ??
      // setItems(await optionsResponse.json())

      // get data with axios
      try {
        const response = await axios.get(`http://localhost:3030/${optionType}`)
        setItems(response)
      } catch (e) {
        throw Error
      }
    }

    fetchData()
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? ScoopOptions : ToppingOptions
  const optionItems = items.map((item) => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ))

  return <Row>an {optionItems}</Row>
}
