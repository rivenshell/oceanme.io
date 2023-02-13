import { useState } from "react";
import "./App.css";
import Casestudy from "./components/casestudy";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <img src="./images/peakpx.jpg" alt="water" width={2880} height={1920} />
    <Navbar />
    <Dashboard />

    
      
    </>
  );
}

export default App;

