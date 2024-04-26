import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import cookie from 'js-cookie'

const Login = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState("")

    const navigate = useNavigate();
    
    function onClickLogin(event){
        event.preventDefault();
        if (email.length !==0 && password.length !==0){
            cookie.set("jwt","Valid Login")
            navigate('/')
        }
        else{
            setError("All fields Required*")
        }
    }
    
    return(    
            <div className="login-card">
                <img src="https://png.pngtree.com/template/20200909/ourmid/pngtree-creative-event-and-designer-company-logo-design-template-image_411387.jpg" className="logo"/>

                <h1 className='login-heading'>Login</h1>
               
                <form>
                    <div>
                        <input type='email' placeholder='Email' className='m-3' value={email} onChange={e=>(setEmail(e.target.value))} />
                    </div>
                    
                    <div>
                        <input type="password" placeholder='Password' className='m-3' value={password} onChange={e=>(setPassword(e.target.value))}/>
                    </div>

                    <p className='text-danger'>{error}</p>

                    <div>
                        <Link to="/forgot-password" className='forgot'>forgot password?</Link>
                    </div>
                    
                    <button className='btn btn-outline-warning m-3 w-50' onClick={onClickLogin}>Login</button>

                    <div>
                        <Link to="/signup" className='m-3 signupback'>Not yet Signup?</Link>
                    </div>
                </form>
            </div>          
    )
}
export default Login