import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'




const Login = () =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [errormsg,seterrMsg] = useState('')
    const [user,setuser] = useState('User')

    const navigate = useNavigate();
    
    function onClickLogin(event){
        event.preventDefault()
        navigate('/home')
    }
    
    return(    
            <div className="lcard">
                <h1 className='loginheading m-3'>Login</h1>
                <hr />

                <form>
                    <input type='email' required placeholder='Email' className='m-3'  onChange={e=>(setEmail(e.target.value))} />

                    <br/>

                    <input type="password" placeholder='Password' className=' m-3 mb-0' onChange={e=>(setPassword(e.target.value))} required/>

                    <p className='text-danger m-3'>{errormsg}</p>

                    <div>
                        <Link to="/forgot-password" className='forgot'>forgot password?</Link>
                    </div>
                    
                    <button className='btns btn btn-outline-warning m-3' onClick={onClickLogin}>Login</button>

                    <div>
                        <Link to="/" className='m-3 signupback'>Not yet Signup?</Link>
                    </div>
                </form>
            </div>          
    )
}
export default Login