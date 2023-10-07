import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [state, setstate] = useState(false)
    const navigate=useNavigate() 
    

    useEffect(()=>{
        console.log('hi')
        const auth = localStorage.getItem('user')
        if(auth){
            navigate('/')
        }
    },[])
  

    const collectdata = async () => {
        const data = { email, password }
        let result = await axios.post('http://localhost:3000/login', data)
            .then((response) => {
                // console.log("response",response.data.name)
                if (response.data.name) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                    setemail('')
                    setpassword('')
                    setstate(false)
                    navigate('/')
                } else {
                    console.log('error')
                    setstate(true)
                }
            })
    }
    return (
        <>
            <div className='mainbox'>
                <h1>Login Here</h1>
                {state && <h4 className='errors'> Error Found Password or Email is Wrong</h4>}
                <div className="mainbox2">
                    <h4>Email Address</h4>
                    <input type="email" placeholder='Devcareer@gmail.com' value={email} onChange={e => setemail(e.target.value)} />
                </div>
                <div className="mainbox2">
                    <h4>Password</h4>
                    <input type="password" placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} />
                </div>
                <button className='button' onClick={collectdata}>Login</button>
                <h4 className='guide'>If you are not SignedUp ,Then Signup first  <Link className='guidelink' to='/signup'>SignUp</Link> </h4>
            </div>
        </>
    )
}

export default Login