import React, { useCallback } from "react"
import{useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import {incrementerCounter} from '../../store/store'


const Login =()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counter.counter)
    const increment = useCallback((counter)=> dispatch(incrementerCounter(counter)),[dispatch]);
    const router= useHistory()

    return(
        <div>

        <h1>login</h1>
        <h2>cpt : {counter}</h2>
    <h2 onClick={()=>increment(counter+1)}>increment</h2>
        <h2 onClick={()=> router.push('Home')}>Go to Home</h2>
        </div>
    )
}

export default Login