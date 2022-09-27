/* eslint-disable object-curly-newline */
/* eslint-disable radix */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import { React, createContext, useState, useMemo, useEffect, useContext } from 'react'
import { pricePerItem } from '../constants'

const OrderDetails = createContext()

// create custom hook to check wheter we're inside a provider
export function useOrderDetails() {
  const context = useContext(OrderDetails)

  // iw we're not inside the provider
  if (!context) {
    throw new Error('useORderDetails must be used within an OrderDetailsProvider')
  }

  return context
}

function calculateSubtotal(optionType, optionCounts) {
  let optionCount = 0
  for (const count of optionCounts[optionType].values()) {
    optionCount += count
  }

  return optionCount * pricePerItem[optionType]
}

export function OrderDetailsProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  })

  const [totals, setTotals] = useState({ scoops: 0, toppings: 0, grandTotal: 0 })

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts)
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts)
    const grandTotal = scoopsSubtotal + toppingsSubtotal
    setTotals({
      scoops: scoopsSubtotal,
      toppings: toppingsSubtotal,
      grandTotal,
    })
  }, [optionCounts])

  const value = useMemo(() => {
    function updateItemCount(itemName, newItemCount, optionType) {
      const newOptionCounts = { ...optionCounts }
      // update option count for this item with the new value
      const optionCountsMap = optionCounts[optionType]
      optionCountsMap.set(itemName, parseInt(newItemCount))

      setOptionCounts(newOptionCounts)
    }

    // getter: value of internal state ->
    //         object containing options counts for scoops and toppings, subtotal and total

    // setter: update option counts
    return [{ ...optionCounts, totals }, updateItemCount, totals]
  }, [optionCounts])
  return <OrderDetails.Provider value={value} {...props} />
}
