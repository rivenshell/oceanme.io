import { useState } from "react";
import "./styles/App.css";
import Casestudy from "./components/casestudy";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import Peakpx from "./img/peakpx.jpg";

import Cover from "./components/cover";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
    <img src={Peakpx} alt={"water"} class="responsive" /> 
    {/* background-image: url(${Peakpx}); */}
   
     <Cover />
     <Dashboard />
      
    </>
  );
}

export default App;

