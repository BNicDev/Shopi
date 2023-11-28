import Home from '../Home'
import MyAcount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound/Index'
import SignIn from '../SignIn'
import './App.css'

function App() {

  return (
    <div className='bg-red-600'>
    <Home/>
    <MyAcount/>
    <MyOrder/>
    <MyOrders/>
    <NotFound />
    <SignIn/>
    </div>
  )
}

export default App
