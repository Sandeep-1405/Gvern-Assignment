import { Link } from 'react-router-dom'
import './Home.css'

function Home(){

    return(
        <div>
            <h2 className="p-3 bg-light w-50 heading m-auto mt-3">Home</h2>
            <div className='bg-light w-50 m-auto mt-5'>
                <Link to="/add-user" className='btn btn-success m-5 p-3'>+Add User</Link>
                <Link to="/login" className="btn btn-warning m-5 p-3">Logout</Link>
            </div>
        </div>
    )
}

export default Home