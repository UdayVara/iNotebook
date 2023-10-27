import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigator1 = useNavigate();
    const HandleLogOut= () =>{
        localStorage.removeItem('auth-token')
        navigator1("/login")
    }
    let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light shadow-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="fa-sharp fa-solid fa-book text-primary me-1"></i>iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link fs-5   ${location.pathname === "/" ? 'active text-primary border-bottom border-bottom-2 border-primary' : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className={`nav-link fs-5   ${location.pathname === "/about" ? 'active text-primary border-bottom border-bottom-2 border-primary' : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('auth-token') ?
                            <div>

                                <Link to="/login" className="btn btn-primary mx-1">Login</Link>

                                <Link to="/signup" className="btn btn-primary mx-1">Sign Up</Link> </div> : <button className="btn btn-danger" onClick={HandleLogOut}>Log out</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

