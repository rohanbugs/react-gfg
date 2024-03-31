import React from 'react'

import { useDispatch } from 'react-redux'
import { increment } from '../redux/reducers/appReducer'

export default function CounterDispatch() {
    const dispatch= useDispatch()
  return (
    <div>
         <button onClick={()=> dispatch(increment())}>Increment</button>
            {/* <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(reset())}>RESET</button> */}
      
    </div>
  )
}
