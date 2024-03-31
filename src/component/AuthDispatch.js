import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../redux/actions/authAction'

export default function AuthDispatch() {
    const dispatch= useDispatch()

  return (
    <div>
        <button onClick={()=>dispatch(login())}>LOGIN</button>
        <button onClick={()=>dispatch(logout())}>LOGOUT</button>
        <hr/>
      
    </div>
  )
}
