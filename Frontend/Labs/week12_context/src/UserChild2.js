import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class UserChild2 extends Component {
  render() {
    return (
      <div>
        <h2>User Child 2</h2>

        <UserConsumer> 
            {/*It's the same as using <UserContext.Consumer> since we declared 
            the constant cont UserConsumer = UserContext.Consumer in UserContext.js*/}
            {(userCtx) => {
                return(
                    <React.Fragment>
                        <p>User First Name : {userCtx.fnm}</p>
                        <p>User Last Name : {userCtx.lnm}</p>
                    </React.Fragment>
                )}
            }
        </UserConsumer>
      </div>
    )
  }
}