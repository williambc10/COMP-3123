import React, { useContext } from 'react'
import UserContext from './UserContext'
import User1Child1 from './User1Child1';

export default function UserChild1() {

  let userCtx = useContext(UserContext);

  return (
    <div>
        <h3>User Child 1</h3>
        <p>User Context: {JSON.stringify(userCtx)}</p>
        <p>User First Name: {userCtx.fnm}</p>
        <User1Child1/>

    </div>
  )
}
