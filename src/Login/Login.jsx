import "./UserLogin.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from "react-redux"
import { selectUser } from "../Redux/UserSlice"

const UserLogin = () => {
    const  user= useSelector(selectUser);

  const navigate= useNavigate()
const[Name ,setName]=useState('')
const [password ,setPassword]=useState('')
  const [message, setMessage] = useState("")



  const HandleLogin=()=>{
    if(Name===user.Email && password===user.password ){

        navigate('/')
    setMessage("Login successfull")
    }else{
setMessage("Login failed ")
    }
  };


   

  return (		
	<div className='full'>
	<input type="checkbox" id="chk" aria-hidden="true"/>

<div className="signup">
    <form>
        <label className='labels' for="chk" aria-hidden="true">LOGIN</label>
        <input className='inputs'  id="Name" onChange={(e) =>setName(e.target.value)} value={Name} type="Name" name="Name" placeholder="User name" required=""/>
        <input className='inputs' id="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" placeholder="Password" required=""/>
        <p style={{display:"flex",justifyContent:"center",color:"red"}}> {message }</p>
        <button className='buttonss' onClick={HandleLogin}>login</button>
    </form>
</div>

    </div>
  )
}

export default UserLogin