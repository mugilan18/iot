import { useEffect, useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis,Legend,Tooltip,Label } from 'recharts';
import Calculation from "./Calculation";

function App() {
  const [data,setData]=useState([])
  const [mq4,setMq4]=useState()
  const [mq7,setMq7]=useState()
  const [last,setLast]=useState()
  useEffect(()=>{
    fetch('http://localhost:4000/')
	.then(response => response.json())
	.then(data => {
    console.log(data)
    setMq4(data.mq4[0].stat)
    setMq7(data.mq7[0].stat)
    setLast(data.lastdata[0].dist)
    setData(data.graph)
  })
	.catch(err => console.error(err));
  },[])

  const flushdb=()=>{
    
  }
  return (
    <div className="App">
      <header className="App-header">
    <h1 style={{textAlign:"center"}}>Sewage Monitoring System</h1> 
    <h2 style={{background:"#51a5d7"}}>Water Distance:</h2>
     <div>
        
         
     <LineChart width={1200} height={600} data={data}>
    <Line type="monotone" dataKey="dist" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="time" />
    <Label value="Time" offset={0} position="bottom" />
    <YAxis label={{ value: 'Distance', angle: -90, position: 'insideLeft' }}/>
    <Tooltip />
    <Label value="Time" offset={5}  />  
    </LineChart>  

    <div>
    <h3>
       <em>
         The Current Distance is :{last}
         </em>
      </h3> 
      </div>  
      <br/><br/><br/><br/><br/>
  <div>
<h2 style={{background:"#51a5d7"}}>Gas Status</h2>
<h3>

  <spam style={{paddingLeft:"200px"}}>Mtsensor 4 : {mq4}</spam> <spam style={{paddingLeft:"100px"}}>Mtsensor 7 : {mq7}</spam>
</h3>
  </div>
  {/* <button onClick={flushdb}>flush</button>       */}
        </div>

        <br/><br/>
      </header>

      <Calculation/>
    </div>
  );
}

export default App;
