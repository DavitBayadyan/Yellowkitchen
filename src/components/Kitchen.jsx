import React from 'react'
import './Footer.css'
import First from '../img/Rectangle 10.png'
import Second from '../img/Rectangle 11.png'
import Third from '../img/Rectangle 12.png'
import Forth from '../img/Rectangle 13.png'
const Kitchen = () => {
  return (
    <div className='all'>
      <h1 className='yellow'>#YellowKitchens <span>in instagram </span></h1>
      <div className='photos'>
        <img src={First} alt="" />
        <img src={Second} alt="" />
        <img src={Third}alt="" />
        <img src={Forth} alt="" />
      </div>
    </div>
  )
}

export default Kitchen
