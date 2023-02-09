import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Casestudy from './components/casestudy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   // nav bar with logo and title
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={reactLogo} alt="react logo" width="30" height="24" className="d-inline-block align-text-top" />
            Oceam-me
          </a>
        </div>
      </nav>
      // main content
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Ocean-Me </h1>

            <Casestudy />
         
          </div>
        </div>
      </div>

      // footer
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span className="text-muted">React App</span>
        </div>
      </footer>


    </>
  )
}

export default App
