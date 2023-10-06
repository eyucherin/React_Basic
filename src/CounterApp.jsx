import React, { useState } from 'react'
import Counter from './components/Counter'

export default function CounterApp() {
    let [totalCount,setCurrentCount]  = useState(0)
  return (
    <div className = "counterContainer">
        <h1 style={{margin:"20px"}} className = "putMiddle">The total count is {totalCount}</h1>
        <Counter setCurrentCount = {setCurrentCount} totalCount = {totalCount}/>
        <Counter setCurrentCount = {setCurrentCount} totalCount = {totalCount}/>

    </div>
  )
}
