import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Casestudy from './components/casestudy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Oceam-me</h1>
          
       
      // main content
      <div className="container">
        <div className="row">
          <div className="col-12">

            <Casestudy />
         
          </div>
        </div>
      </div>

       {/* footer */}
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">React App</span>
        </div>
      </footer>


    </>
  )
}

export default App
