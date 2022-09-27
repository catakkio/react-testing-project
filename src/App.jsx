// import Button from './components/button/Button'
// import OrderSummary from './pages/summary/OrderSummary'
import OrderEntry from './pages/entry/OrderEntry'
import { OrderDetailsProvider } from './context/OrderDetails'

function App() {
  return (
    <div className='container'>
      {/* <h2>Button test:</h2>
      <Button />

      <h2 className='pt-5'>Order summary test:</h2>
      <OrderSummary /> */}

      {/* Summary page and entry page need provider */}
      <OrderDetailsProvider>
        <OrderEntry />
      </OrderDetailsProvider>
      {/*  confirmation page does not jneed provider */}
    </div>
  )
}

export default App
