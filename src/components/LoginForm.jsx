import { useState, useContext } from 'react';
import Api from '../js/api';
import UserContext from '../store/UserContext';

const LoginForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const user = await Api.login(formData);
    console.log("USER: ", user);
    setCurrentUser(user);
  }

  const handleFormChange = async (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({ ...data, [name]: value }));
  }

  return (
    <>
        <div className="form-container mx-auto mt-5">
            <form className="my-4" action="" onSubmit={(evt) => {handleSubmit(evt)}} >
                <h1 className="my-3">Login to get started!</h1>
                {/* <h2 className="my-2">Enter your username and password to login.</h2> */}
                <div className="form-floating mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="username" 
                        name="username"
                        value={formData.username}
                        placeholder="Username"
                        onChange={handleFormChange}
                    />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        name="password"
                        value={formData.password}
                        placeholder="Password"
                        onChange={handleFormChange}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" 
                        className="btn btn-lg btn-outline-primary"
                    >
                        Login 
                    </button>
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginForm;