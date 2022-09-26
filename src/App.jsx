import Button from './components/button/Button'
import OrderSummary from './pages/summary/OrderSummary'

function App() {
  return (
    <div className='container'>
      <h2>Button test:</h2>
      <Button />

      <h2 className='pt-5'>Order summary test:</h2>
      <OrderSummary />
    </div>
  )
}

export default App
