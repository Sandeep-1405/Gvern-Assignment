import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'

const Login = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate();
    
    function onClickLogin(event){
        event.preventDefault()
        navigate('/')
    }
    
    return(    
            <div className="login-card">
                <h1 className='login-heading m-3'>Login</h1>
                <hr />
                <form>
                    <div>
                        <input type='email' placeholder='Email' className='m-3' value={email} onChange={e=>(setEmail(e.target.value))} />
                    </div>
                    
                    <div>
                        <input type="password" placeholder='Password' className='m-3' value={password} onChange={e=>(setPassword(e.target.value))}/>
                    </div>

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