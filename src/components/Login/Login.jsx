import { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const {handleGoogleLogin, handleLogin, handleLogout} = useContext(authContext)
    const [error,setError] = useState('')
    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()
    
   //handle submit
   const  handleSubmit = (e) => {
    e.preventDefault()
 
    const email = e.target.email.value
    const password = e.target.password.value
    console.log(email,password);
    
    handleLogin(email,password)
    .then(res =>{
      navigate(location.state.from)
    })
    .catch(error => {
      setError(error.message)    
    })
 }

 //handle google login
 const googleLoginHandler = () => {
  handleGoogleLogin()
  .then(res => {
    navigate(location.state.from)
  })
 }
    

    return (
        <div>

<div>
      <form action="" onSubmit={handleSubmit}>
       
        <div>
            Email:
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
        <div>
            Password: 
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
          />
        </div>
       

        <button className="btn btn-secondary" type="submit">login</button>

      </form>
      {error && <p className="text-red-500">{error.split('/')[1].slice(0,18)}</p>}
      <button className="btn btn-warning" onClick={handleLogout}>Logout</button>
    </div>

            <button className="btn btn-primary" onClick={googleLoginHandler}>google Login</button>
            New to web? please<NavLink className='underline' to='/register'>Register</NavLink>
        </div>
    );
};

export default Login;