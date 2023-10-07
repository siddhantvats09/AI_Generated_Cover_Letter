import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Pageedit = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [portfolio, setportfolio] = useState('')
  const [portfolio2, setportfolio2] = useState('')
  const [domain, setdomain] = useState('')
  const [city, setcity] = useState('')
  const pdfref=useRef()
  const navigate = useNavigate()
  const data = useSelector((state) => {
    return state.content;
  })
  useEffect(() => {

    const auth = localStorage.getItem('user')
    const userinfo = localStorage.getItem('collect')
    const info = JSON.parse(userinfo)
    console.log(info.domain)
    setcity(info.city)
    setcontact(info.contact)
    setdomain(info.domain)
    setemail(info.email)
    setname(info.name)
    setportfolio(info.portfolio)
    setportfolio2(info.portfolio2)

    if (!auth) {
      navigate('/')
    }

  })

  const pdfdownload=()=>{
    const input=pdfref.current
    html2canvas(input).then((canvas)=>{
      const imgdata=canvas.toDataURL('image/png')
      const pdf=new jsPDF('p','mm','a4',true)
      const pdfwidth=pdf.internal.pageSize.getWidth()
      const pdfheight=pdf.internal.pageSize.getHeight()
      const imgwidth=canvas.width
      const imgheight =canvas.height
      const ratio= Math.min(pdfwidth/imgwidth , pdfheight/imgheight)
      const imgx=(pdfwidth-imgwidth * ratio)/2
      const imgy=30
      pdf.addImage(imgdata,'PNG',imgx,imgy,imgwidth * ratio,imgheight *ratio)
      pdf.save('coverletter.pdf')
    })
  }




  return (
    <div className='pagebox'>
      <h1>Here's Your Cover Letter </h1>
      <div className="clbox" ref={pdfref}>
        {name ? <h2 >{name}</h2> : <h2>Your Name</h2>}
        {domain ? <h3>{domain}</h3> : <h2>Your Proffession</h2>}
        <div className="rightaddress">
          {contact ? <h2>{contact}</h2> : <h2>Your Phone Number</h2>}
          {email ? <h2>{email}</h2> : <h2>Your Email</h2>}
          {city ? <h2>{city}</h2> : <h2>Your City</h2>}
          {portfolio ? <h2>{portfolio}</h2> : <h2>Your Portfolio</h2>}
          {portfolio2 ? <h2>{portfolio2}</h2> : <h2>Your Portfolio2</h2>}
        </div>
        <div className="clcontentbox">
          <h3>Dear Hiring Manager ,</h3>
          {data ? <h4>{data}</h4> : <h4>Content Of Cover Letter</h4>}
         <div className="clh5">
         <h5>Sincerely</h5>
          {name ? <h5>{name}</h5> : <h3>Your Name</h3>}
         </div>
        </div>
      </div>
      <button className='button' onClick={pdfdownload}>Download Pdf</button>
    </div>
  )
}

export default Pageedit