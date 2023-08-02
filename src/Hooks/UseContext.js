import React, {useState, createContext, useContext} from 'react'
const userContext = createContext()

const UseContext = () => {
    const [user, setUser] = useState("Jesse Hall");
    return (
     <userContext.Provider value={user}>
     
      <h1>Hello: {user}</h1>
      <Component2 />
     
     </userContext.Provider>
    )
  }
  const Component2 = () =>{
      const data = useContext(userContext)
      return(
          <>
          <h1>Hello Com2: {data}</h1>
          
          </>
      )
}

export default UseContext