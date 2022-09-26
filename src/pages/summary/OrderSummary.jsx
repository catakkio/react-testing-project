import OrderEntry from '../entry/OrderEntry'
import SummaryForm from './SummaryForm'

export default function OrderSummary() {
  return (
    <>
      <h5>Form with tooltip:</h5>
      <SummaryForm />

      <h5>Order entry</h5>
      <OrderEntry />
    </>
  )
}
