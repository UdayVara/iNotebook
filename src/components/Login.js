import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import Alert from './Alert'

function Login() {
    const [alertStatus,updateAlertStatus] = useState("")
    const [credentials, updateCredentials] = useState({ email: "", password: "" })
    const handleChange = (e) => {
        updateCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const navigator = useNavigate();
    const handleSubmit = async (e) => {
        console.log(credentials)
        e.preventDefault();
        const response = await fetch("https://inotebook-ckki.onrender.com/api/auth/login", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const data = await response.json();
        localStorage.setItem('auth-token',data.authtoken)
        if (data.success) {
            updateAlertStatus({color:"success",message:"Logged in successfully.You will be redirected to home page shortly."})
            setTimeout(() => {
                navigator("/")
            }, 2000);
        } else {
            updateAlertStatus({color:"danger",message:"failed to log in"})
            
        }
        console.log(data)   
        // console.log("Event has been fired.")
    }
    return (
        <>
            <Navbar />
            {alertStatus===""?'':<Alert color={alertStatus.color} msg={alertStatus.message} />}
            {/* <h1 className="mt-4 text-center">This is login page.</h1>
         */}

            <div className="container mt-5">

                
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChange} name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChange} name="password" />
                    </div>
                    <button className="btn btn-primary btn-lg" disabled={credentials.password.length<8} onClick={handleSubmit}>Login</button>


            </div>
        </>
    )
}

export default Login
