import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

export function ViewDetails(){
    
    const [userDb, setUserDb] = useState([]);

    useEffect(()=>{

        fetch('http://localhost:3013/get')
        .then(res => res.json())
        .then(json => setUserDb(json))

        // axios.get('http://localhost:3013/get')
        // .then(res=>setUserDb(res.data))

    },[])
    
    return(
        <>
        <div>
        
        {
            userDb.map((value,index)=>(
                <>
                <p>{value.s_no}</p>
                <p>{value.first_name}</p>
                <p>{value.last_name}</p>
                </>
                
            ))
        }
        </div>
        </>
    );
}