import React from 'react'
import { Children } from 'react'

function Button({children , type='button', textColor ='text-white', bgcColor = 'bg-blue-600',className = '', ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcColor} ${te} ${className} ${textColor}`}{...props} >
        {Children}
    </button>
  )
}
export default Button
