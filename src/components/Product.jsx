import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart, getTotalPrice } from '../Feuture/reducers/cartReducer/cartSlice'

const Product = ({ item }) => {
  const { title, price, image, rating } = item
  const dispatch = useDispatch()
  const { change } = useSelector((state) => state.cart)
  const handelAdd = (item) => {
    dispatch(getTotalPrice(item))
    dispatch(addToCart(item))
    toast.success(` ${item.title} added to your cart`)
  }
  return (
    <div className='product-card h-[440px] bg-red-300'>
      <img src={image} className='main-images h-[40%] w-[90%] ' alt={title} />
      <div className='pt-10 flex justify-between flex-col h-[53%]'>
        <div>
          <span className='shoe_name text-lg'>Name:{title}</span>
          <div className='flex justify-around color-price w-[100%]  '>
            <span>Price:{change ? `${price * 78} AF` : `${price} $`}</span>
            <span>
              rate:
              {rating.rate}
            </span>
          </div>
        </div>
     
      <div className='button'>
        <div className='button-layer'></div>
        <button onClick={() => handelAdd(item)}>Add To Cart</button>
      </div>

      </div>
    </div>
  )
}
export default Product
