import { useState } from "react";
import "./App.css";
import Casestudy from "./components/casestudy";
import Navbar from "./components/navbar";
import Dashboard from "./components/dashboard";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar />
    <Dashboard />
    
      
    </>
  );
}

export default App;

