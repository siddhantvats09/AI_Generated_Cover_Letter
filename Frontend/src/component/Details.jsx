import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setdata } from '../slice/Dataslice'

const Details = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [portfolio, setportfolio] = useState('')
  const [skills, setskills] = useState('')
  const [portfolio2, setportfolio2] = useState('')
  const [domain, setdomain] = useState('')
  const [city, setcity] = useState('')
  const [max, setmax] = useState('')
  const [maxword, setmaxword] = useState(500)
  const [anything, setanything] = useState('')
  const [softskill, setsoftskill] = useState('')
  
  const navigate = useNavigate()
  const dispatch=useDispatch()
  

  useEffect(() => {

    console.log('hi')
    const auths = localStorage.getItem('user')
    if (!auths) {
      navigate('/')
    }
  })
  
  const proceed = () => {
    const collection={name:name,contact:contact,email:email,domain:domain,portfolio:portfolio,portfolio2:portfolio2,city:city}
    localStorage.removeItem('collect')
    localStorage.setItem('collect',JSON.stringify(collection))
    //console.log(collection)
    setmaxword(max)
    if(max>500){
      setmaxword(490)
    }
    else{
      setmaxword(max)
    }
    // const datas=''
    // dispatch(setdata(datas))
    const data= `write a cover letter for ${domain} & have Skilled in these technologies like ${skills} . whose Soft Skills & other Quelities are ${softskill} and These Lines in addition ${anything} . Length of cover letter would be ${maxword} `
    // dispatch(setdata(data))
     navigate('/edit')
    console.log("your data",data)
  }
  

  return (
    <>
      <div className='mainbox'>
        <h1>Generate Cover Letter</h1>
        <div className="mainbox2">
          <h4>Full Name</h4>
          <input type="text" placeholder='Your Name' value={name} onChange={e => setname(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Email Address</h4>
          <input type="email" placeholder='Devcareer@gmail.com' value={email} onChange={e => setemail(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Contact Info</h4>
          <input type="number" placeholder='+91 98548****3' value={contact} onChange={e => setcontact(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Portfolio Link</h4>
          <input type="text" placeholder='Portfolio / Linked in' value={portfolio} onChange={e => setportfolio(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Other Profile Links</h4>
          <input type="text" placeholder='GitHub / Linked in / Behance' value={portfolio2} onChange={e => setportfolio2(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Profession / Domain</h4>
          <input type="text" placeholder='Domain' value={domain} onChange={e => setdomain(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Skills</h4>
          <input type="text" placeholder='Enter Skills' value={skills} onChange={e => setskills(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>City,Country</h4>
          <input type="text" placeholder='City..' value={city} onChange={e => setcity(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Soft Skills</h4>
          <input type="text" placeholder='Hard working / Quick Learner' value={softskill} onChange={e => setsoftskill(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Maximum Words</h4>
          <input type="number" placeholder='300-500' value={max} onChange={e => setmax(e.target.value)} />
        </div>
        <div className="mainbox2">
          <h4>Any Thing You want to Add</h4>
          <input type="text" placeholder='Just Type Here....' value={anything} onChange={e => setanything(e.target.value)} />
        </div>
        <button className='button' onClick={proceed}>Proceed</button>
      </div>
    </>
  )
}

export default Details