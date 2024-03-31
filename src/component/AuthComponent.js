import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../redux/actions/authAction'
import AuthSelect from './AuthSelect'
import AuthDispatch from './AuthDispatch'

export default function AuthComponent() {
    const auth= useSelector(state => state.auth)
    const dispatch= useDispatch()

  return (
    <div>
      <AuthDispatch/>
      <AuthSelect/>
        {/* <button onClick={()=>dispatch(login())}>LOGIN</button>
        <button onClick={()=>dispatch(logout())}>LOGOUT</button>
        <hr/>

        {
            auth ?
            <p>----------logged in--------</p>
            :
            <p>----------logged OUT--------</p>
        } */}
      
    </div>
  )
}
