import React from 'react'
import Peakpx from "../img/peakpx.jpg";

function cover() {
  return (
   <>
   <img src={Peakpx} alt={"water"} class="responsive" />
   <div className='content'> 
    Protect Our Oceans,
     <br /> Save Our Future.
     
 </div>
 </> 
  )
}

export default cover