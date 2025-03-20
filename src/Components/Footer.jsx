import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer-wrapp'>
        <section className="footer-navigate">
        <NavLink to='brands' className='brands'>BRANDS</NavLink>
        <NavLink to='about' className='about'>ABOUT</NavLink>
        <NavLink to='allrights' className='allrights'>All rights reserved</NavLink>
        </section>
    </div>
  )
}
