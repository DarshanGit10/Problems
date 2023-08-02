import React, {useState} from 'react'
const Title = () =>{
    console.log("Title Called");
    return <h1>Use call back and React Memo Example</h1>
}
const MemoizedTitle = React.memo(Title);
const Count = ({text, number}) =>{
    console.log(`${text} rendered`)
    return <h3>{text}:{number}</h3>
}   
const MemoizedCount = React.memo(Count)

const Button = ({child, buttonHandle}) =>{
    console.log(`${child} rendered`)

    return <button onClick={buttonHandle}>{child}</button>
}
const MemoizedButton = React.memo(Button)
const ReactMemo = () => {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(10000)

    const incAge = () =>{
        setAge(age+1)
    }

    const incSalary = ()=>{
        setSalary(salary+1000)
    }
  return (
    <>
    <MemoizedTitle />
    <MemoizedCount text={"age"} number={age}/>
    <MemoizedButton buttonHandle={incAge} child="IncAge" />
    <MemoizedCount text={"salary"} number={salary}/>
    <MemoizedButton buttonHandle={incSalary} child="IncSalary" />

    
    </>
    
  )
}

export default ReactMemo