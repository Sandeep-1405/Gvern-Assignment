import { Link, useNavigate } from 'react-router-dom'
import './Home.css'
import cookie from 'js-cookie'
import { useEffect } from 'react'

function Home(){
    const navigate = useNavigate()

    useEffect(()=>{
        const jwt = cookie.get('jwt')
        if(jwt=== undefined){
            navigate('/login')
        }
    })

    function onClickLogout(){
        cookie.remove('jwt')
        navigate('/login')
    }

    return(
        <div>
            <h2 className="p-3 bg-light w-50 heading m-auto mt-3">Home</h2>
            <div className='bg-light w-50 m-auto mt-5'>
                <Link to="/add-user" className='btn btn-success m-5 p-3'>+Add User</Link>
                <button to="/login" className="btn btn-warning m-5 p-3" onClick={onClickLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Home