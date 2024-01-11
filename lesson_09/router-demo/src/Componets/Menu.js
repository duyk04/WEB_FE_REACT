import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/categories'}>Categories</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Menu