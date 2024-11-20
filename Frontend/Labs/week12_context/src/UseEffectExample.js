// The hook
// Nothing to do with Context
import React from 'react'
import { useEffect, useState } from "react";

export default function UseEffectExample() {
    let [state, setState] = useState({name: 'Cham William', college: 'BGC, Nevada'})
    
    let x = 100
    useEffect(() => { // behaves/works like ComponentDidMount
      console.log("first")
    
      return () => {
        console.log("second")
      }
    }, [state.name])
    
    return (
    <div>
        <h2>useEffect() Example</h2>
        <p>Name: { state.name }</p>
        <p>College: { state.college }</p>
        <button onClick={ (e) => setState({...state, name: 'William Cham' + x})} >Update Name</button>
        {/*...state allows the unupdated state to remain the same */}
        <button onClick={ (e) => setState({...state, college: 'GBC, Toronto' + x})} >Update College</button>
        {/* + x in the setState allows us to display x which = 100, and everytime we update X and click update 
        name or college, it will display a new X beside it with a x + 1(amount of X updates) */}
        <button onClick={ (e) => x = x + 1} >Update X</button>
    </div>
  )
}