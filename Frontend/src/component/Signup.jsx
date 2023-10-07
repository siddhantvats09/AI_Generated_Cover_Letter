import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const nevigate = useNavigate()
    
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            nevigate('/')
        }
    },[])
  

    

    const collectdata = async() => {

        const data = { name, email, password }
        await axios.post('http://localhost:3000/signup', data)
            .then((response) => {
                console.log(response.data)
                
            })
     
        
        setemail('')
        setname('')
        setpassword('')
        nevigate("/login")
    }
    return (
        <>
            <div className='mainbox'>
                <h1>SignIn Here</h1>
                <div className="mainbox2">
                    <h4>Full Name</h4>
                    <input type="text" placeholder='Your Name' value={name} onChange={e => setname(e.target.value)} required />
                </div>
                <div className="mainbox2">
                    <h4>Email Address</h4>
                    <input type="email" placeholder='Devcareer@gmail.com' value={email} onChange={e => setemail(e.target.value)} required />
                </div>
                <div className="mainbox2">
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} aria-required />
                </div>
                <button className='button' onClick={collectdata}>SignUp</button>
                <h4 className='guide'>If you are already SignedUp ,Then just LogIn  <Link className='guidelink' to='/login'>LogIn</Link> </h4>
            </div>
        </>
    )
}

export default Signup