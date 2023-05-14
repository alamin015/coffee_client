import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='py-6 bg-white shadow-xl'>
        <div className='container mx-auto flex items-center justify-center gap-4'>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
        </div>
    </div>
  )
}

export default Header