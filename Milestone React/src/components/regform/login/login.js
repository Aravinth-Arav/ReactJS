import React from "react";
import './login.css';
import { Link } from "react-router-dom";
export function LogIn() {
    return (
        <>
            <div className=" container m-auto text-center col-lg-6 col-md-6">
                <form className="p-5">
                    <h3 className="text-center p-1 col-lg-6 col-md-6 col-12 text-warning">Login</h3>
                    <input type="text" placeholder="Username" className="m-2 text-center col-6 col-lg-6 col-md-6 input_log  p-2" /><br></br>
                    <input type="password" placeholder="Password" className="m-2 text-center col-6 col-lg-6 col-md-6  input_log p-2" /><br></br>
                    <Link to="/dashboard"><button className=" bg-info mx-auto text-light m-4 text-center col-6 col-lg-6 col-md-6 p-2 sub_log" >Login</button></Link>
                    <p>Already have an Account?<span><a href="./regform" className="text-warning sign"> SignUp</a></span></p>
                </form>
            </div>
        </>
    );
}