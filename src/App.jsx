import { useState } from "react";
import "./App.css";
import Casestudy from "./components/casestudy";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Peakpx from "./img/peakpx.jpg";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <img src={Peakpx} alt={"water"} class="responsive" /> 
    {/* background-image: url(${Peakpx}); */}
   
      
     <Dashboard />
      
    </>
  );
}

export default App;

