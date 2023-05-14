import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { themeContext } from '../../Firebase/MyProvider';

const Header = () => {
  const {myUser} = useContext(themeContext);

  return (
    <div className='py-6 bg-white shadow-xl'>
        <div className='container mx-auto flex items-center justify-center gap-4'>
            <Link to="/">Home</Link>
            <Link to="/card">Card</Link>
            {
              myUser ? <Link to="/login">Logout</Link>: <Link to="/login">Login</Link>
            }
            
        </div>
    </div>
  )
}

export default Header