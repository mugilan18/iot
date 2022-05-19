import { useEffect, useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis,Legend,Tooltip } from 'recharts';

function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/')
	.then(response => response.json())
	.then(data => setData(data))
	.catch(err => console.error(err));
  },[])

  const flushdb=()=>{
    
  }
  return (
    <div className="App">
      <header className="App-header">
    <h1>Sewage Monitring</h1> 
     <div>
        
         
     <LineChart width={1500} height={600} data={data}>
    <Line type="monotone" dataKey="dist" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
          <Legend />
  </LineChart>    
  <br/><br/><br/><br/><br/>
  <button onClick={flushdb}>flush</button>      
        </div>
      </header>
    </div>
  );
}

export default App;
