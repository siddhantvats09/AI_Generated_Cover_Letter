import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
const navigate = useNavigate()
 const [auth, setauth] = useState(false)
 
 useEffect(()=>{
  console.log('hi')
  const auths = localStorage.getItem('user')
  if(auths){
     setauth(true)
  }
})


const logout=()=>{
  localStorage.clear()
  setauth(false)
    navigate('/')
}


  return (
    <div className='nav'>
      <>
      <img className='logo' src="https://i.pinimg.com/564x/65/e9/8d/65e98d883204fd459f2774dd82106684.jpg" alt="LOGO" />
        {auth ?
          <ul className='nav-ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/details">Generate Cover Letter</Link></li>
            <li><Link onClick={logout}>LogOut</Link></li>
          </ul>
          :
          <>
          <ul className='nav-ul'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
            <li><Link to="/login">LogIn</Link></li>
          </ul>
          </>
        }
      </>
    </div>
  )
}

export default Nav