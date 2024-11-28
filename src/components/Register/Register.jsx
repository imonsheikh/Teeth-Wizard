import React, { useContext, useState } from "react";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {handleRegister, manageProfile} = useContext(authContext)
    const [error,setError] = useState('')

    
   const  handleSubmit = (e) => {
      e.preventDefault()
      setError('')

      const name = e.target.name.value
      const image = e.target.image.value
      const email = e.target.email.value
      const password = e.target.password.value
      const conPassword = e.target.conPassword.value
      console.log(name,image,email,password,conPassword);

      //validation
      if(password.length < 6){
        setError('password must contain at least 6 character')
        return
      }
      if(password !== conPassword) {
         setError('password did not match')
         return 
      }
      if(!/[a-z]/.test(password)){
        setError('password must contain at least one lowercase letter')
        return
      }
      
      if(!/[A-Z]/.test(password)){
        setError('password must contain at least one UpperCase letter')
        return
      }
      
      handleRegister(email,password)
      .then(res => {
        manageProfile(email,image)
      })
   }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
            Name: 
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
        </div>
        <div>
            Image:
          <input
            name="image"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
        </div>
        <div>
            Email:
          <input
            name="email"
            type="email"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
        </div>
        <div>
            Password: 
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
        </div>
        <div>
            Confirm Password: 
          <input
            name="conPassword"
            type="text"
            placeholder="Type here"
            className="input input-bordered input-error w-full max-w-xs"
            required
          />
        </div>

        <button className="btn btn-outline" type="submit">Register</button>
        
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Register;
