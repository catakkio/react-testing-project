/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import ScoopOption from './ScoopOption'
import ToppingOption from './ToppingOption'
import AlertBanner from '../../components/AlertBanner'
import { pricePerItem } from '../../constants'
import { useOrderDetails } from '../../context/OrderDetails'

export default function Options({ optionType }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState(false)
  const [orderDetails, updateItemCount] = useOrderDetails()

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
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ))

  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]} $
      </p>
      <Row>{optionItems}</Row>
    </>
  )
}
