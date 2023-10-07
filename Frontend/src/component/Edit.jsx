import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addcontent } from '../slice/Contentslice'

const Edit = () => {
    
    const [content, setcontent] = useState("")
    const dispatch=useDispatch()
    const nevigate=useNavigate()
    
    const data = useSelector((state) => {
        return state.content;
    })

    const check=()=>{
        dispatch(addcontent(content))
        nevigate('/page')
    }
    useEffect(()=>{
        const auth=localStorage.getItem('user')
        setcontent(data)
        if(!auth){
          nevigate('/')
        }
    },[])
   
    return (
        <>
            <div className='editpage'>
                <h1>Edit Your Content </h1>
                <div className="content">
                   <form >
                    {content ? <textarea placeholder='Add According To You.....' value={content} onChange={(e)=>setcontent(e.target.value)} cols="30" rows="10"></textarea>:<textarea placeholder='Loading Your Data'  cols="30" rows="10"></textarea>}
                   </form>
                </div>
                   <button className='button' onClick={check}>Check Your Cover Letter</button>
            </div>
        </>
    )
}

export default Edit