import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increase } from '../actions/counter'
const Counter = () => {
    const counter=useSelector((state:any)=>state.counterReducer)
    const dispatch=useDispatch()
 
    const handleIncrease =()=>{
        dispatch(increase(3))
    }
    const handleDecrease =()=>{
        dispatch(increase(19))
    }
  return (
    <>
    <div>Counter</div>
    <h1>{counter}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleDecrease}>Decrease</button>
    </>
  )
}

export default Counter