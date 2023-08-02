import React, {useState, useCallback} from 'react'

const funCount = new Set()

const UseCallBack = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // // Issue
    // const handleOneInc = () =>{
    //     setCount(count+1)
    // }
    // const handleOneDec = () =>{
    //     setCount(count-1)
    // }
    // const handleTwoInc = () =>{
    //     setCount2(count2+1)
    // }

    // Using CallBack
    const handleOneInc = useCallback(()=>{
        setCount(count+1)
    }, [count])  
    const handleOneDec = useCallback(()=>{
        setCount(count-1)
    }, [count])  
    const handleTwoInc = useCallback(()=>{
        setCount2(count2+1)
    }, [count2])

    funCount.add(handleOneInc)
    funCount.add(handleOneDec)
    funCount.add(handleTwoInc)
    console.log(funCount)
  return (
    <>
        <h3>Count: {count}</h3>
        <h3>Count2: {count2}</h3>
        <button onClick={handleOneInc}>+</button>
        <button onClick={handleOneDec}>-</button>
        <button onClick={handleTwoInc}>Inc2</button>
    </>
  )
}

export default UseCallBack