import axios from 'axios';
import { useEffect } from 'react';
import {useState} from 'react';

var UseEffect=()=>
{
 /*   var[text,setText]=useState('KEC');
    useEffect(()=>{
        setText="KEC College"
    },{text}
    )
    return(
        <section>
            <h1>This is UseEffect</h1>
            <input type="text"
            placeholder="type your text" 
            onChange={(e)=>setText(e.target.value)}/>
            <h2>Text typed is {text}</h2>
        </section>
    )
        */


    var [post,setPost]=useState([]);

    useEffect(()=>
    {
        axios
            .get('https://jsonplaceholder.typicode.com/post/')
            .then((res) => 
            {console.log(res.data);
                setPost(res.data)
            })
            .catch((err) => console.log(err));

    },[]);
    return(
        <section>
            <h1>Fetching data from Json Placeholder API</h1>
            <h2>Post are {post}</h2>
            <ol>
               {post.map((element)=>(<h6 key={element.id}>{element.id}</h6>))}
            </ol>
        </section>
    )
}
export default UseEffect;
