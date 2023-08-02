import React, {useState} from 'react'

const PropDrilling = () => {
    const [data, setData] = useState("John Wick")
    return (
      <>
      <h1>Hello: {data}</h1>
      <Component2 user = {data}/>
      </>
    )
  }
  
  const Component2 = ({user}) =>{
      return(
          <>
          <h1>Hello Com2: {user}</h1>
          <Component3 user={user} />
          </>
      )
  }
  
  const Component3 = ({user}) =>{
      return(
          <>
          <h1>Hello Com3: {user}</h1>
          </>
      )
}

export default PropDrilling