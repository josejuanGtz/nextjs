import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const Login = () =>{
    const [data,setdata] = useState(10);
    const [count,setcount] = useState(20);
    const countMemo = useMemo(()=>{return count*5},[count]);

    return (
        <div>
            <h1>count:{count}</h1>
            <h1>data:{data}</h1>
            <h2>{countMemo}</h2>
            <button onClick={()=>setcount(count+10)}>update count</button>
            <button onClick={()=>setdata(data+10)}>update count</button>
        </div>
    );
}

export default Login;