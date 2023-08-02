import React, {useState, useMemo} from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(1)
    function somExpFun(x) {
        console.log("Called Exp Fun")
        return x + 10
    }
    // Issue, without useMemo try
    const result = useMemo(()=>somExpFun(12), []) 
  return (
    <>
        <h3>Clicked: {count}</h3>
        <h3>Result: {result}</h3>
        <button onClick={() =>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default UseMemo