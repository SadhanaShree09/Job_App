import axios from "axios"
import { useState } from "react"

function Post() {
    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[response,setResponse]=useState("");

    const handleSubmit =async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com//posts",{                        
                title:title,
                body:body,
                userId :1,
            });
            setResponse(res.data);
            setTitle("");
            setBody("");
        }

        catch(err){
            console.log("Error posting the data :",err.message);
        }
    };


  return (
    <div>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title : </label><br />
            <input 
            type="text"
            placeholder="Enter the Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </div>
        <div>
            <label>Body : </label><br />
            <textarea 
            placeholder="Enter the content here"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            />
        </div>
        <button type="submit">Submit</button>
        </form>
        {response && (
        <div>
            <h4>Response from API : </h4>
            <pre>{JSON.stringify(response , null, 2)}</pre>
        </div>
        )}
    </div>
  )
}

export default Post