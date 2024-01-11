import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Categories() {
  const activeStyle = ({isActive}) =>{
    return{
      backgroundColor:isActive ? 'yellow' : 'blue',
      color:isActive? 'blue':'red'
    }
  }
  const activeClass = (isActive) =>{
    return isActive? 'selected': ''

    
  }
  return (
    <div>
      <h1 className='alert alert-danger'>
        Catagories
      </h1>
      <ul>
        <li>
          <NavLink className={activeClass} style={activeStyle} to={'program'}>Khoa hoc lap trinh</NavLink>
        </li>
        <li>
          <NavLink className={activeClass} style={activeStyle} to={'kid'}>Khoa hoc lap trinh cho tre em</NavLink>
        </li>
        <li>
          <NavLink className={activeClass} style={activeStyle} to={'network'}>Khoa hoc quan tri mang</NavLink>
        </li>
      </ul>
      <div className='container alert alert-info'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Categories