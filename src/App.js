import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputBar from './InputBar';
import Table from './Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

function App() {
    const url = useSelector(state=> state.url);
    const shortUrls = useSelector(state => state.shortUrls)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch();

  useEffect( ()=>{
    axios.get("http://localhost:8080/urls")
      .then(res => {
        // console.log("fetching all data",res.data);/
        // setShortUrls(res.data);
        dispatch({
          type:"add",
          payload:res.data
        })

        setLoading(false);        

      });
  },[shortUrls])

  const handleChange = e => {
    // setUrl(e.target.value);
    dispatch({
      type:"setUrl",
      payload:e.target.value
    })
  }

  const handleSubmit = async () => {
    setLoading(true)
    await axios.post("http://localhost:8080/save", {longurl : url})
      .then(res=> {
        
        const data = res.data
        
        if(data.errorMessage){
          alert(data.errorMessage)
        }else{
          dispatch({
            type:"add",
            payload:res.data
          })
        }
      })
    setLoading(false);
  }

 
  return (
    <div className="App container">
     <h1 style={{color:"blue", marginTop:"30px"}}>URL Shortner</h1>

     <InputBar url={url} setUrl={handleChange} handleSubmit={handleSubmit}/>

    {loading ?
      <h2>Loading</h2>
    :
      <Table shortUrls={shortUrls}/>

    }
    </div>
  );
}

export default App;