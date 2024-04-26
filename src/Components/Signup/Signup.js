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
                <img src="https://png.pngtree.com/template/20200909/ourmid/pngtree-creative-event-and-designer-company-logo-design-template-image_411387.jpg" className="logo"/>
                <h1 className='signup-heading'>Signup</h1>
        
                <form onSubmit={handleSubmit}>

                    <div className='m-3'>
                        <label htmlFor="name">Name </label>
                        <br/>
                        <input type="text" id="name" className='sinput' required/>
                    </div>
                    
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Email </label>
                        <br/>
                        <input type="text" id="email" className='sinput' required/>
                    </div>

                    <div className='m-3'>
                        <label htmlFor="mobile" >Mobile Number </label>
                        <br/>
                        <input type="number" id="mobile" className='sinput' required/>
                    </div>
                    
                    <div className='m-3'>
                        <label htmlFor="email" >Password </label>
                        <br/>
                        <input type="password" id="password" className='sinput' required/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary m-3">Submit</button>
                    <br/>
                
                    <Link to="/login" className='btn btn-warning m-3'>Already a member Login from here</Link>
                </form>
            </div>
        </div>
    )
    
}
export default Signup