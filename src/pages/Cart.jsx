import { useSelector, useDispatch } from 'react-redux/es/exports'
import { Link } from 'react-router-dom'
import BtnBack from '../components/BtnBack'
import { IoAdd } from 'react-icons/io5'
import { GrFormSubtract } from 'react-icons/gr'
import { toast } from 'react-toastify'
import { decrement, deleteItem, increment } from '../Feuture/reducers/cartReducer/cartSlice'
import SwitchBtn from '../components/SwitchBtn'

const Cart = () => {
  const dispatch = useDispatch()

  const { items, change } = useSelector((state) => state.cart)

  const handelSubmit = () => {
    toast('Your Order was Recorded')
    console.log(items)
  }

  return (
    <div>
      <h1 className='p-3 text-center'>Your Cart</h1>
      <div className='shadow m-5 p-3'>
        <div className='mx-5 mb-0 pb-0 p-3 d-flex flex-row align-items-center justify-content-between '>
          <BtnBack className='mt-0' url='/' />
          <div className='text-end  px-5 mx-4 d-flex justify-content-end align-items-center'>
            <div className='form-check form-switch'>
              <SwitchBtn />
            </div>
          </div>
        </div>
        {items.length === 0 ? (
          <div className='text-center'>
            <p className='h4 text-danger'>your cart id empaty</p>
            <Link className='h5' to='/'>
              Buy Now
            </Link>
          </div>
        ) : (
          <div>
            {items.map((item, index) => {
              const { title, rating, image, description, price, quantitiy } =
                item
              return (
                <div className='m-5' key={index}>
                  <div className='w-100 d-flex flex-row align-items-center  p-3 pb-0 ml-4'>
                    <img
                      src={image}
                      style={{ height: 200, width: '40%' }}
                      className='p-2'
                      alt={title}
                    />
                    <div className='mt-3 text-center'>
                      <div tag='h5'>Name: {title}</div>
                      <div>Description: {description}</div>
                      <div className='d-flex justify-content-around w-100 pt-3 '>
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
                          onClick={() => dispatch(increment(item))}
                          className='p-2 m-2 '
                          disabled={quantitiy === item.rating.count}
                        >
                          <IoAdd />
                        </button>
                        <span className='p-2 h4'> {quantitiy}</span>
                        <button
                          onClick={() => dispatch(decrement(item))}
                          className='p-2 m-2 '
                          disabled={quantitiy === 1}
                        >
                          <GrFormSubtract />
                        </button>
                      </div>

                      <button
                        onClick={() => dispatch(deleteItem(item))}
                        className='btn btn-outline-danger text-black w-50 '
                      >
                        Delete From Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

            <div className='d-flex flex-row mt-0   m-auto align-items-center justify-content-between '>
              <div className='form-check  form-switch'>
                <SwitchBtn />
              </div>
              <button
                onClick={handelSubmit}
                className='btn btn-outline-primary w-25 mx-5  justify-content-center'
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
