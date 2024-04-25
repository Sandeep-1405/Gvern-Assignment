import { useNavigate } from 'react-router-dom';

function AddUser(){

    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        navigate('/');
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>

                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter your Name" className="form-control"/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter your Email" className="form-control"/>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="">Date of Birth</label>
                        <input type="date" placeholder="Enter Date of Birth" className="form-control"/>
                    </div>
                    
                    <button className="btn btn-success">Submit</button>
                    <button className="btn btn-warning m-3" onClick={()=>navigate('/')}>Back to Home</button>
                </form>
            </div>
        </div>
    )
}
export default AddUser
