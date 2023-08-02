import React, {useState} from 'react'

const Register = () => {
    const [data, setData] = useState({
        userName: "",
        email: "",
        phoneNumber: ""
    })
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const response = await fetch('http://localhost:5000/api/createUser', {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                userName: data.userName,
                email: data.email,
                phoneNumber: data.phoneNumber
            })
        })
        const resultData = await response.json()
        if (resultData.error === 'User already exists'){
            alert("User already exists ...")
        }
        else if (resultData.success){
            alert("User registered successfully !!!")
        }
        
    }
    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }
  

  return (
    <>
    <center>
  <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div>
        <label>Name: </label>
        <input type="text" name='userName' required onChange={handleChange}/>
        </div>
        <div>
        <label>Email: </label>
        <input type="email" name='email' required onChange={handleChange}/>
        </div>
        <div>
       <label>Phone Number: </label>
        <input type="tel" name='phoneNumber' required onChange={handleChange}/>
        </div>
        <button type='submit'>Submit</button>
        
  </form>
  </center>
    </>
  )
}

export default Register