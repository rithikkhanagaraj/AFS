
import { useRef, useState, useEffect } from "react";

var UseRef =()=>{
    var [text,setText] =useState("")
    var prevLoad=useRef();
    useEffect(()=>{
        prevLoad.current = text
    },[text])
    return(
        <section>
            <h1>This is example for UseRef</h1>
            <input type ="text" onChange={(e)=>setText(e.target.value)} ></input>
            <h2>My Current Render is {text}</h2>
            <h3>Previous Render is {prevLoad.current}</h3>
        </section>
    );
};

export default UseRef;