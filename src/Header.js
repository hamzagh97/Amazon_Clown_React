import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div>
      <div className='header'>
      <img alt='logo' src='https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1' className='header_logo'/>
      <div className='deliver_location'>
        <span>icon</span>
        <div className='location'>
          <span className='option_line_one'>deliver to</span>
          <span className='option_line_two'>tunisia</span>
        </div>
      </div>
      <div className='header_search'>
        <input className='search'></input>
      </div>
      <div className='header_options'>
        <div className='flag'>USA</div>
        <div className='option'>
          <span className='option_line_one'>hello, sign in</span>
          <span className='option_line_two'>acount and lists</span>
        </div>
        <div className='option'>
          <span className='option_line_one'>marchandise returns</span>
          <span className='option_line_two'>and orders</span>
        </div>
      </div>
      <div className='checkout'>
        <span>icon</span>
        <span>shopping venture</span>
      </div>
    </div>
    <div className='small_menu'>
      <ul>
        
      </ul>
    </div>
    </div>
  )
}

export default Header