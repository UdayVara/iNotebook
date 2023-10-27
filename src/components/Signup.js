import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import Alert from './Alert'

function Signup() {
    const [alertStatus,updateAlertStatus] = useState("")
    const [credentials, updateCredentials] = useState({ username:"",email:"", password:"", cpassword: "" })

    const navigator = useNavigate();

    const handleChangeSignUp = (e) => {
        updateCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(credentials)
        const response = await fetch("http://localhost:5000/api/auth/signup", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({username:credentials.username, email: credentials.email, password: credentials.password })
        });
        // console.log(response);
        const data = await  response.json();
        if (data.success) {
            localStorage.setItem('auth-token',data.authtoken);
            updateAlertStatus({color:"success",message:"Signed up successfully.You will be redirected to home page shortly."})
            setTimeout(() => {
                navigator("/")
            }, 2000);
        } else {
            updateAlertStatus({color:"danger",message:"failed to create user."})
        }
        // console.log(data)
    }
    return (
        <>
            <Navbar />
            {alertStatus!==""?<Alert color={alertStatus.color} msg={alertStatus.message} />:''}
            {}
            <div className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username : </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username"  onChange={handleChangeSignUp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp"  name='email' onChange={handleChangeSignUp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={handleChangeSignUp} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password : </label>
                    <input type="password" className="form-control" id="exampleInputPassword2" name='cpassword' onChange={handleChangeSignUp} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" onClick={handleSubmit} disabled={credentials.username.length<6||credentials.password.length<8||(credentials.password !== credentials.cpassword)}>Sign up</button>
            </div>
        </>
    )
}

export default Signup
