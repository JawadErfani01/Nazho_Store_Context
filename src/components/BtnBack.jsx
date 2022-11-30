import React from "react"

import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
const BtnBack = ({ url }) => {
  return (

      <Link to={url}  className='flex items-center mx-5 px-4 skew-x-6  border  p-2 border-gray-900   btn-back'>
        <FaArrowLeft className="mx-2 text-black " />
        Back
      </Link>

  )
}

export default BtnBack
