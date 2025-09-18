import React, { useState } from "react";
import { auth } from "../../firebase"; // 👈 same firebase.js
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";




const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const Navigate= useNavigate();
  
   
    const handleLogin = async (e) => {
        e.preventDefault();
      try{
        await signInWithEmailAndPassword(auth, email, password);
      
     Navigate("/Home");
      }
        catch(err){ 
            setError(err.message);
        }
      }
    return (    
        <div className="register-page">
            <div className="register-card">
                <h1>Login Page</h1>
                <form onSubmit={handleLogin}>
                    <input type="email"  value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password"  value={password}  onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don’t have an account?{" "}  
                    <RouterLink to="/register">
                        Register
                    </RouterLink>
                </p>
                
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
            </div>
        </div>
    )
}
export default Login;