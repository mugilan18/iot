import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';


const Calculation = () => {
    const[viscosity,setViscosity]=useState()
    const[density,setDensity]=useState()
    const[velocity,setVelocity]=useState()
    const[length,setLength]=useState()
    const[kinematic,setKinematic]=useState()
    const[reynolds,setReynolds]=useState()
    const [type,setType]=useState("type1")
    const [flowType,setFlowType]=useState()

  
    const handleChange = (event) => {
        setType(event.target.value);
        console.log(type)
      };

      
      const Calculate=()=>{


          if(type==="type1"){
              
              let re1 = (density* velocity* length)/viscosity
              setReynolds(re1)
              if(reynolds>2000){
                  setFlowType("Turbulant")
              }
              else{
                setFlowType("Laminar")
              }
          }
          else if(type==="type2"){
            let re2 = (velocity* length)/kinematic
            setReynolds(re2)
            if(reynolds>2000){
                setFlowType("Turbulant")
            }
            else{
              setFlowType("Laminar")
            }
          }
      }
  return (
    <div>
       
       <div>
         <h2 style={{background:"#51a5d7"}}> Flow Calculation</h2>
       <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Type</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={type}
        onChange={handleChange}
      >
        <FormControlLabel value="type1" control={<Radio />} label="using dynamic viscosity" />
        <FormControlLabel value="type2" control={<Radio />} label="using Kinematic viscosity" />
      </RadioGroup>
    </FormControl>
       </div>
       <br/><br/>
        <div style={{fontSize:"20px"}}>
        <label>Fluid velocity:</label>
        <input value={velocity} type="number" onChange={e=>{setVelocity(e.target.value)}}/>
        <br/><br/>
        <label>characteristic length Dia:</label>
        <input value={length} type="number"onChange={e=>{setLength(e.target.value)}}/>
        <br/><br/>

        {type === "type1" &&
        <>
        <label>Fluid Density:</label>
        <input value={density} type="number" onChange={e=>{setDensity(e.target.value)}}/>
        <br/><br/>
        <label>Fluid dynamic viscosity:</label>
        <input value={viscosity} type="number" onChange={e=>{setViscosity(e.target.value)}}/>
        <br/><br/>
        </>
  }

{type === "type2" &&
        <>
        <label>Fluid kinematic viscosity:</label>
        <input value={kinematic} type="number" onChange={e=>{setKinematic(e.target.value)}}/>
        <br/><br/>
        </>
  }

  <Button variant='contained' onClick={Calculate}>Calculate</Button>
        </div >


        <h3 style={{paddingBottom:"200px"}}>
        The value of Reynolds Number is :{reynolds}<br/><br/>
        The Flow of the fluid is : {flowType}
        </h3>
    </div>

  )
}

export default Calculation