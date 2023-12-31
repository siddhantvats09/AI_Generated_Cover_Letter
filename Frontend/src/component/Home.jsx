import React, { useEffect, useState } from 'react'
import girl from "./girl.png"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [name, setname] = useState('')
  const [status, setstatus] = useState(false)
  useEffect(()=>{
    setstatus(false)
    const auths = localStorage.getItem('user')
    if(auths){
      const info = JSON.parse(auths)
      setname(info.name)
      setstatus(true)
    }
  })
  const nevigate=useNavigate()

  const click=()=>{
    const auth=localStorage.getItem('user')
    if(auth){
      nevigate('/details')
    }else{
      alert('First you need to Log In ')
    }
  }
  return (
    <div>
    <h1 className='mainheading'>Create Your Cover Letter</h1>
    <h1 className='mainheading2'>Get Job Ready</h1>
    {status ? <h3 className='mainheading3 buddy'> Welcome {name}</h3>:<></> }
    <h3 className='mainheading3'> Let's Start</h3>
    <div onClick={click} className="layout"><h3 className='mainheading5' > Building CL </h3></div>
    <h3 className='mainheading4'>With Us ! </h3>
    <img className='image' src={girl} alt="" />
  </div>
  )
}

export default Home