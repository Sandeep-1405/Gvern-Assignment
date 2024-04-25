import React, { useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'

function Signup(){
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [phonenumber,setPhonenumber] = useState('')

    const [password,setpassword] = useState('')
    const [errmsg,setError] = useState('')
    let navigate = useNavigate()

    function handleSubmit(event){
        navigate("/login")
    }

    return(
        <div>
            <div className='scard '>
                <h1 className='sheading'>Signup</h1>
                <hr className='hr'/>
                <form onSubmit={handleSubmit}>

                    <div className='m-3'>
                        <label htmlFor="name">Name </label>
                        <br/>
                        <input type="text" id="name" required className='sinput' value={name} onChange={e=>setname(e.target.value)}/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Email </label>
                        <br/>
                        <input type="text" id="email" required className='sinput' value={email} onChange={e=>setemail(e.target.value)}/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="mobile" >Mobile Number </label>
                        <br/>
                        <input type="number" id="mobile" required className='sinput' value={phonenumber}
                        onChange={e=>setPhonenumber(e.target.value)}/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Password </label>
                        <br/>
                        <input type="password" id="password" required className='sinput' value={password} onChange={e=>setpassword(e.target.value)}/>
                    </div>
                    
                    <p className='text-danger m-3'>{errmsg}</p>

                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <br/>
                
                    <Link to="/login" className='btn btn-outline-warning m-3'>Already a member Login from here</Link>

                </form>
            </div>
            
        </div>
    )
    
}
export default Signup