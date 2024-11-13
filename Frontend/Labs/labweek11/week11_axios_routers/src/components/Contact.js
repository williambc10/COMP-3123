import React from 'react'
import { useParams} from 'react-router-dom'

export default function Contact() {

    const param = useParams()

    return (
      <div>
        <h2>Contact</h2>
        <h4>{param.name}</h4> 
        {/* this param is regarding the pattern and actual activation
         we were talking about in the app.js navlink and route */}
      </div>
    )
}
