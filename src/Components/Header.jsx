import React from 'react'
import '../Components/styles.css'
import {NavLink} from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-wrapp'>
        <section className='header-navigate'>
            <NavLink to='rubrics' className='rubrics'>RUBRICS</NavLink>
            <NavLink to='/' className='inpraguecity'>InPragueCity</NavLink>
            <input type='search' placeholder='search' className='search'/>
            <option className='lang'>CZ</option>
        </section>

    </div>
  )
}
