import { useEffect, useState } from 'react'

const Login = () => {
  // const { handelLogin, success, seterror, error, message, loading } = globalContext()
  const [data, setdata] = useState({ email: '', password: '' })
  const { email, password } = data

  const handelChange = (e) => {
    setdata((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    // seterror(false)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    // handelLogin(data)
  }

  return (
    <div className='flex flex-col justify-center  items-center h-screen'>
      <form
        onSubmit={handelSubmit}
        className='p-10 shadow-xl text-center rounded-lg bg-slate-800 w-[85%] sm:w-[50%] lg:w-[35%] '
      >
        <h1 className='my-5 text-3xl  rounded-lg'>Login Form</h1>
        <input
          name='email'
          value={email}
          onChange={handelChange}
          placeholder='email...'
          required={true}
          type='email'
          className=' my-3 border-none w-full outline-none text-black py-2 rounded-lg px-5 shadow-lg shadow-slate-600'
        />
        <input
          name='password'
          value={password}
          onChange={handelChange}
          placeholder='password...'
          required={true}
          type='password'
          className=' my-3 border-none w-full outline-none text-black py-2 rounded-lg px-5 shadow-lg shadow-slate-600'
        />
        <input
          type='submit'
          className=' my-3 border-none w-[50%] bg-white outline-none text-black py-2 rounded-lg px-5 cursor-pointer shadow-lg shadow-slate-600 hover:shadow-slate-400'
        />
      </form>
    </div>
  )
}

export default Login
