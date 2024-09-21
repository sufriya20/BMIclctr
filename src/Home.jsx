import React,{useState} from 'react'

function Home() {

  const [bmiValue,setBmivalue]=useState("")
  let height=0
  let weight=0


  const getheight=(e)=>{
    height=e.target.value
    console.log(height)
  }
  const getweight=(val)=>{
    weight=val
    console.log(weight)
  }
  const calculate=()=>{
    const result=weight/(height**2)
    console.log(result)
    if(result<18.5){
      setBmivalue("Underweight")
    }
    else if(result>=18.5 && result<=24.9){
      setBmivalue("Normal")
    }
    else if(result>=25.0 && result<=29.9){
      setBmivalue("Over weight")
    }
    else if(reult>=30.0){
      setBmivalue("obesity")
    }
  }
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:'90vh'}}>
        <div className='w-50 border shadow p-5'>
            <h3>Calculator</h3>
            <input type="text" className='form-control mb-4' onChange={(e)=>{getheight(e)}} placeholder='Enter your height in meter'/>
            <input type="text" className='form-control mb-4' onChange={(e)=>{getweight(e.target.value)}} placeholder='Enter your weight in kilograms' />
            <button className='btn btn-success' onClick={()=>(calculate())}>submit</button>
            <div className='mt-5'>
              <h3>{bmiValue}</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home