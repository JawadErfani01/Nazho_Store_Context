import { Link } from 'react-router-dom'
import BtnBack from '../components/BtnBack'
import { IoAdd } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { toast } from 'react-toastify'
import SwitchBtn from '../components/SwitchBtn'
import { useContext } from 'react'
import { cartContext } from '../Context/cartContext'

const Cart = () => {
  const { items, change, decrement, deleteItem, increment } =
    useContext(cartContext)

  const handelSubmit = () => {
    toast('Your Order was Recorded')
    console.log(items)
  }

  return (
    <div className='md:m-10 m-3'>
      <h1 className='p-3 text-center '>Your Cart</h1>
      <div className='shadow md:m-5 m-2 p-3'>
      <h1 className='welcomeText text-2xl sm:text-3xl md:text-4xl p-3 pb-0  text-center'>
        Your Orders
      </h1>
        <div className='md:mx-5 mx-2 mb-0 pb-0 p-3 flex flex-row items-center justify-between '>
      
          <BtnBack className='mt-0' url='/' />
       
          <SwitchBtn />
        </div>
        <hr className='my-4' />

        {items.length === 0 ? (
          <div className='text-center'>
            <p className='text-xl m-3 text-danger'>your cart id empaty</p>
            <Link
              className='text-xl p-2 rounded-lg px-4 m-4 border border-blue-500 hover:bg-blue-500 hover:text-white '
              to='/'
            >
              Buy Now
            </Link>
          </div>
        ) : (
          <div>
            {items.map((item, index) => {
              const { title, rating, image, description, price, quantitiy } =
                item
              return (
                <div
                  key={index}
                  className=' flex flex-col md:flex-row items-center  p-5 md:m-4 m-1 md:skew-x-6  border-2'
                >
                  <img
                    src={image}                  
                    className='p-2 w-[80%] md:w-[50%] h-56'
                    alt={title}
                  />
                  <div className='mt-3 text-center'>
                    <h2 className="text-xl">Name: {title}</h2>
                    <div>Description: {description}</div>
                    <div className='flex justify-around  pt-3 '>
                      <span>
                        Price:{' '}
                        {change
                          ? `${price * quantitiy * 78} AF`
                          : `${price * quantitiy} $`}
                      </span>
                      <span>
                        rate:
                        {rating.rate}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => increment(item)}
                        className='p-2 m-2 bg-slate-800 '
                        disabled={quantitiy === item.rating.count}
                      >
                        <IoAdd />
                      </button>
                      <span className='p-2 h4'> {quantitiy}</span>
                      <button
                        onClick={() => decrement(item)}
                        className='p-2 m-2 bg-slate-800'
                        disabled={quantitiy === 1}
                      >
                        <GrFormSubtract />
                      </button>
                    </div>

                    <button
                      onClick={() => deleteItem(item)}
                      className='p-1 px-3  bg-red-400 rounded-lg w-[80%]  md:w-[30%] m-3'
                    >
                      Delete From Cart
                    </button>
                  </div>
                </div>
              )
            })}

            <div className='flex flex-row mt-3  items-center justify-around '>
              <SwitchBtn  />

              <button
                onClick={handelSubmit}
                className='bg-blue-600 p-3  text-white rounded-lg mrl-3 w-[47%]  md:w-[25%] md:mx-5 '
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
