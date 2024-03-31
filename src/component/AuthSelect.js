import React from 'react'
import { useSelector } from 'react-redux'

export default function AuthSelect() {
    const auth= useSelector(state => state.auth)
  return (
    <div>
         {
            auth ?
            <p>----------logged in--------</p>
            :
            <p>----------logged OUT--------</p>
        }
      
    </div>
  )
}
