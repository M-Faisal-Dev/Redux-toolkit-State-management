import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';


function NavBar() {
  const selector = useSelector((state) => state.cart)
  return (
    <div    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
  }}>
        <span className='logo'>Redux Store</span>
      <nav>
<NavLink className="navLink" to= "/">Home</NavLink>
<NavLink  className="navLink" to= "/cart">Cart</NavLink>
<span className='cartCount'>Cart items : {selector.length} </span>
      </nav>
    </div>
  )
}

export default NavBar
