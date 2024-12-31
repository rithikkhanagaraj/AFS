import { useState } from "react";

const Gallery =()=>{
    //var Counter=10;
    var [Counter,setcount]= useState(0);
    var styling={
        fontSize:"50px",
        color:"blue",
        textAlign:"center"
    }
    /*function Increment()
    {
        setcount(Counter+1)
    }*/
    return(
        <section>
            <h1>This is my Gallery Page</h1>
            <h2 style={styling}>Learning State</h2>
            <h3>The state of my variable counter is {Counter}</h3>
            <button onClick={()=>setcount(Counter+1)}>Increment:{Counter}</button>
            <button onClick={()=>setcount(Counter-1)}>Decrement:{Counter}</button>
            <button onClick={()=>setcount(0)}>Reset:{Counter}</button>
        </section>
    );
}
export default Gallery;