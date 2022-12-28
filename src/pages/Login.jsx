import { useContext, useState, useRef } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/userContext'
const Login = () => {
  const focusRef = useRef()
  const { userInfo } = useContext(userContext)
  const navigate = useNavigate()
  const [data, setdata] = useState({ email: '', password: '' })
  const { email, password } = data
  const [showPassword, setshowPassword] = useState(false)
  const [errorMessage, seterrorMessage] = useState(false)
  const handelChange = (e) => {
    setdata((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    seterrorMessage(false)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    if (userInfo?.email === email && userInfo?.password === password) {
      navigate('/')
      setdata({ email: '', password: '' })
    } else {
      seterrorMessage(true)
      focusRef.current.focus()
    }
    // handelLogin(data)
  }

  return (
    <div className='flex flex-col justify-center  items-center mt-[22%] sm:mt-[13%]'>
      <form
        onSubmit={handelSubmit}
        className='p-8 pb-3 shadow-xl text-center rounded-lg bg-slate-800 w-[85%] sm:w-[50%] lg:w-[30%] '
      >
        <h1 className='my-5 text-3xl text-white bg-transparent italic  rounded-lg'>
          Login Form
        </h1>
        {errorMessage && (
          <p className='text-lg bg-transparent  text-red-500 '>
            Email or Password is wrong{' '}
          </p>
        )}
        <input
          ref={focusRef}
          name='email'
          value={email}
          onChange={handelChange}
          placeholder='email...'
          required={true}
          type='email'
          className=' my-3 border-none w-full outline-none text-black py-1.5 rounded-full px-5 shadow-lg shadow-slate-600'
        />
        <div className='relative rounded-full my-2'>
          <input
            name='password'
            value={password}
            onChange={handelChange}
            placeholder='password...'
            required={true}
            type={`${showPassword ? 'password' : 'text'}`}
            className='  border-none w-full outline-none text-black py-1.5 rounded-full px-5 shadow-lg shadow-slate-600'
          />
          <i className='absolute bg-transparent right-6 top-[10px]  text-lg'>
            {showPassword ? (
              <FaEyeSlash
                className='bg-transparent cursor-pointer'
                onClick={() => setshowPassword(!showPassword)}
              />
            ) : (
              <FaEye
                className='bg-transparent cursor-pointer'
                onClick={() => setshowPassword(!showPassword)}
              />
            )}
          </i>
        </div>
        <input
          type='submit'
          value="Sign in"
          className='italic my-2 border-none w-[50%] bg-white outline-none text-black py-1.5 rounded-full px-5 cursor-pointer shadow-lg shadow-slate-600 hover:shadow-slate-400'
        />
        <div className='bg-transparent flex justify-end text-sm'>
          {' '}
          <Link
            className='bg-transparent border-blue-400 hover:border-b-2  text-gray-400 hover:text-gray-200'
            to='/register'
          >
            don't have account
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
