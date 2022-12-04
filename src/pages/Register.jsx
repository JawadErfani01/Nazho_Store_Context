import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Register = () => {
    const navigate=useNavigate()
  const [data, setdata] = useState({ email: '', password: '',userName:'' })
  const { email, password ,userName} = data
  const [showPassword, setshowPassword] = useState(false)

  const handelChange = (e) => {
    setdata((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
    // seterror(false)
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    window.localStorage.setItem("userInfo",JSON.stringify(data))
    navigate("/")
    setdata({email:'',password:'',userName:''})
    // handelRegister(data)
  }

  return (
    <div className='flex flex-col justify-center  items-center mt-[22%] sm:mt-[13%]'>
      <form
        onSubmit={handelSubmit}
        className='p-8 pb-2 shadow-xl text-center rounded-lg bg-slate-800 w-[85%] sm:w-[50%] lg:w-[30%] '
      >
        <h1 className='my-5 text-3xl text-white bg-transparent italic  rounded-lg'>
          Register Form
        </h1>
        <input
          name='userName'
          value={userName}
          onChange={handelChange}
          placeholder='userName...'
          required={true}
          type="text"
          className=' my-2 border-none w-full outline-none text-black py-1.5 rounded-full px-5 shadow-lg shadow-slate-600'
        />
        <input
          name='email'
          value={email}
          onChange={handelChange}
          placeholder='email...'
          required={true}
          type='email'
          className=' my-2 border-none w-full outline-none text-black py-1.5 rounded-full px-5 shadow-lg shadow-slate-600'
        />
        <div className='relative rounded-full my-2'>
          <input
            name='password'
            value={password}
            onChange={handelChange}
            placeholder='password...'
            required={true}
            type={`${showPassword?'password':'text'}`} 
            className='  border-none w-full outline-none text-black py-1.5 rounded-full px-5 shadow-lg shadow-slate-600'
          />
          <i className='absolute bg-transparent right-6 top-[10px] text-lg'>
            {showPassword ? (
              <FaEyeSlash className='bg-transparent cursor-pointer' onClick={() => setshowPassword(!showPassword)} />
            ) : (
              <FaEye className='bg-transparent cursor-pointer' onClick={() => setshowPassword(!showPassword)} />
            )}
          </i>
        </div>
        <input
          type='submit'
          className=' my-3 border-none w-[50%] bg-white outline-none text-black py-1.5 rounded-full px-5 cursor-pointer shadow-lg shadow-slate-600 hover:shadow-slate-400'
        />
        <div className='bg-transparent flex justify-end text-sm' >  <Link className='bg-transparent border-blue-400 hover:border-b-2 p-1 text-gray-400 hover:text-gray-200 '  to="/login">alredy have account</Link></div>
   
      </form>
    </div>
  )
}

export default Register
