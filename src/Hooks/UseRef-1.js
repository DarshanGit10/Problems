import React, {useState, useEffect, useRef} from 'react'

const UseRef = () => {
    const [name, setName] = useState("")
    // const [countRender, setCountRender] = useState(1)
    const countRender = useRef(1)
    // Issue try to Inc countRender without using useRef
    useEffect(()=>{
        countRender.current = countRender.current+1
    })
  return (
    <>
    <input type="text" name='name' id='name' onChange={(e) =>{
        setName(e.target.value)
    }}/>
    <h3>Typing: {name}</h3>
    <h3>Count: {countRender.current}</h3>
    </>
  )
}

export default UseRef