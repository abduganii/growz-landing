import React from 'react'
import { IBrand } from './type'

export default function Container({children, className}: IBrand) {
  return (
    <div className={`${className && className} w-full max-w-[1300px] mx-auto px-[15px]`}>{children}</div>
  )
}
