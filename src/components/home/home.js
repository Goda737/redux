import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import{useHistory} from 'react-router-dom'
import {incrementerCounter} from '../../store/store'

const Home =()=> {
    const dispatch = useDispatch();
    const counter = useSelector((state)=> state.counter.counter)
    const increment = useCallback((counter)=> dispatch(incrementerCounter(counter)),[dispatch]);
    const router= useHistory()
return(
    <div>
    <h1>Home</h1>
    <h2>cpt : {counter}</h2>
    <h2 onClick={()=>increment(counter+1)}>increment</h2>
    <h2 onClick={()=> router.push('Login')}>Go to login</h2>
    </div>
)


}

export default Home