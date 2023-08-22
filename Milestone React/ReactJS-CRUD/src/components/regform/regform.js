import React from "react";
import './regform.css';
import { Link } from "react-router-dom";
export function RegForm() {

    return (
        <>
            <div className=" container m-auto text-center col-lg-6 col-md-6">
                <form className="p-5">
                    <h3 className="text-center p-1 col-lg-9 col-md-9 col-12 text-warning">Want to checkout this file?signup or login</h3>
                    <input type="text" placeholder="First Name" className="m-2 text-center col-12 col-lg-6 col-md-6 col-12 col-lg-6 col-md-6 input_reg p-2" /><br>
                    </br>
                    <input type="text" placeholder="Last Name" className="m-2 text-center col-12 col-lg-6 col-md-6 input_reg  p-2" /> <br>
                    </br>
                    <input type="text" placeholder="E-mail" className="m-2 text-center col-12  col-lg-6 col-md-6 input_reg  p-2" /><br>
                    </br>
                    <input type="date" placeholder="Date of Birth" className="m-2 text-center col-6 col-lg-6 col-md-6  input_reg  p-2" /><br></br>
                    <input type="int" placeholder="Phone number" className="m-2 text-center col-6 col-lg-6 col-md-6  input_reg  p-2" /><br></br>
                    <input type="password" placeholder="Password" className="m-2 text-center col-6 col-lg-6 col-md-6 input_reg  p-2" /><br></br>
                    <input type="password" placeholder="Confirm Password" className="m-2 text-center col-6 col-lg-6 col-md-6  input_reg  p-2" /><br></br>
                    <Link to='/'><button className=" bg-info mx-auto text-light m-4 text-center col-6 col-lg-6 col-md-6 p-2 sub_form">Sign Up</button></Link>
                    

                </form>
            </div>
        </>

        
    );

}