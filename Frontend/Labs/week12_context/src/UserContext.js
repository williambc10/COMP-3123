import React from 'react'

// We can name the context based on the object
// i.e. EmpContext or SchoolContext
const UserContext = React.createContext()

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export default UserContext