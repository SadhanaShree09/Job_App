import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {

  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com//posts");
        setData(response.data);
        setLoading(false);
      } 
      
      catch(err){
        setError(err.message);
        setLoading(false);
      } 
    }
      fetchData();

    } , []);

    if(loading) 
      return <div>Loading...</div>;
    if(error)
      return <div>Error : {error}</div>

  return (
    <div>
      <h1>Posts</h1>
      <ul>
      {data.map((post) => (
        <li key={post.id}> {post.title}</li>
      ))}
      </ul>
    </div>
  );
};  

export default App;