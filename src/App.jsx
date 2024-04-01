import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("")
  const [weight, setWeight] = useState("")
  const [bmi, setBmi] = useState(null)
  const [bmiStatus, setBmiStatus] = useState("")

    const calculateBmi =()=>{
      if(height&&weight){
       const heiightInMeters=height/100;
       const bmiValue=weight/(heiightInMeters*heiightInMeters)
       setBmi(bmiValue.toFixed(2))
       if(bmiValue< 18.5){
        setBmiStatus("UnderWeight")
       }
       else if(bmiValue>=18&&bmiValue<24.9){
        setBmiStatus("NormalWeight")

       }
       else if(bmiValue>=25&&bmiValue<29.9){
         setBmiStatus("overWeight")
       }
       else{
        setBmiStatus("Obese")
       }
      }else{
        setBmi(null)
        setBmiStatus("")
      }
    }



  return (
    <>
     
   <div className='bmi_colculator'>
    <div className="box">
    </div>
    <div className="data">
      <h1>BMI calculator</h1>
      <div className="inputcontainer">
        <label htmlFor="height">Height(cm):</label>
        <input type="text" id='height' value={height} onChange={(e)=>{
          setHeight(e.target.value)
        }} />
      </div>
      <div className="inputcontainer">
        <label htmlFor="Weight">Weight(kg):</label>
        <input type="text" id='Weight' value={weight}  onChange={(e)=>{
          setWeight(e.target.value)
        }}  />
        </div>
        <button onClick={calculateBmi}> Calculate BMI</button>
       {bmi !==null&& 
       (
        <div className="result">
        <p>your BMI is: {bmi}</p>
        <p>status:{bmiStatus}</p>
      </div>
       )
       
       }
       
      
    </div>

   </div>
    </>
  )
}

export default App
