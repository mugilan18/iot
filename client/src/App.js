import { useEffect, useState } from "react";

import { LineChart, Line, CartesianGrid, XAxis, YAxis,Legend,Tooltip,Label } from 'recharts';
import Calculation from "./Calculation";

function App() {
  const [data,setData]=useState([])
  const [mq4,setMq4]=useState("MQ4 is not detected")
  const [mq7,setMq7]=useState("MQ7 is not detected")
  const [mq4c,setMq4c]=useState()
  const [mq7c,setMq7c]=useState()
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

  useEffect(()=>{
if(mq4==="MQ4 is not detected"){
  setMq4c(0)
  
}
else{
  let temp1 = Math.random() * (5 - 1) + 1
  setMq4c(temp1.toFixed(2))
}

if(mq7==="MQ7 is not detected"){

  setMq7c(0)
}
else{
  let temp2= Math.random() * (5 - 1) + 1
  setMq7c(temp2.toFixed(2))
}
  },[mq7,mq4])
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

 
  <spam style={{paddingLeft:"200px"}}>Mqsensor 4 : {mq4}</spam> <spam style={{paddingLeft:"100px"}}>Mqtsensor 7 : {mq7}</spam><br/><br/>
  <spam style={{paddingLeft:"200px"}}> Mq4 concentration: {mq4c}</spam> <spam style={{paddingLeft:"100px"}}>Mq7 concentration: {mq7c}</spam>

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
