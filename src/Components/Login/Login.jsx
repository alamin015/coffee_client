import React, { useContext } from 'react'
import { themeContext } from '../../Firebase/MyProvider'

const Login = () => {
    const {googleSign,setMyUser} = useContext(themeContext);

    const googleSignIn = () => {
        googleSign()
        .then((result) => {
            setMyUser(result.user)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }
  return (
    <div className='py-14'>
        <div className="container mx-auto">
            <button onClick={googleSignIn}>Google</button>
        </div>
    </div>
  )
}

export default Login