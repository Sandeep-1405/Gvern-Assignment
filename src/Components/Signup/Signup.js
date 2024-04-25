import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'

function Signup(){
    let navigate = useNavigate()

    function handleSubmit(event){
        navigate("/login")
    }

    return(
        <div>
            <div className='signup-card '>
                <h1 className='signup-heading'>Signup</h1>
                <hr className='hr'/>
                <form onSubmit={handleSubmit}>

                    <div className='m-3'>
                        <label htmlFor="name">Name </label>
                        <br/>
                        <input type="text" id="name" className='sinput'/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Email </label>
                        <br/>
                        <input type="text" id="email" className='sinput'/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="mobile" >Mobile Number </label>
                        <br/>
                        <input type="number" id="mobile" className='sinput'/>
                    </div>
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Password </label>
                        <br/>
                        <input type="password" id="password" className='sinput'/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <br/>
                
                    <Link to="/login" className='btn btn-outline-warning m-3'>Already a member Login from here</Link>
                </form>
            </div>
        </div>
    )
    
}
export default Signup