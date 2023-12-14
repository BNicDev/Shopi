import{CalendarIcon} from '@heroicons/react/24/solid'
import{ShoppingBagIcon} from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
const OrdersCards = (props)=>{
    const {totalPrice, totalProducts}=props;

    return(
        <div className="flex justify-around items-center m-3 border border-black w-80 h-10 bg-black text-white rounded-lg p">
          <CalendarIcon className='basis-1/4 h-5'/>
            <span className='basis-1/4'>01.02.23</span>
            <ShoppingBagIcon className='basis-1/4 h-5'/>
            <span className='basis-1/4'>{totalProducts}</span>
            <span className='basis-1/2'>${totalPrice}</span>
            <ChevronRightIcon className='basis-1/4 h-5'/>
        </div>
    )
}
export default OrdersCards