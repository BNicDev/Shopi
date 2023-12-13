import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopiCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const ChekoutSideMenu = ()=> {
    const context = useContext(ShopiCartContext)
    const handleDelete = (id)=>{
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    }
    const handleCheckout =()=>{
        const orderToAdd ={
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrders([...context.orders, orderToAdd])
        context.setCartProducts([])
    }

    return(
        <aside className={`${context.ischecoutOpen ? 'flex': 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}> 
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div onClick={()=>context.closeCheckout()} className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cartProducts.map(product=>
                    <OrderCard key={product.id} id={product.id} title={product.title} imageUrl = {product.image} price={product.price} handleDelete={handleDelete} />
                )
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button className='w-full bg-black py-3 text-white rounded-lg' onClick={()=>handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}
export default ChekoutSideMenu