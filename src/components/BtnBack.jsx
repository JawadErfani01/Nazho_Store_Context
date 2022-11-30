import React from "react"

import { FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
const BtnBack = ({ url }) => {
  return (

      <Link to={url}  className='btn  mx-5  btn-outline-dark btn-back'>
        <FaArrowLeft />
        Back
      </Link>

  )
}

export default BtnBack
