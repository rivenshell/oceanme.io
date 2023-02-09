import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import casestudy from './components/casestudy'

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
            
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Counter</h5>
                <p className="card-text">This is a simple counter</p>
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                  Click me
                </button>
                <p className="card-text mt-3">You clicked {count} times</p>
              </div>
            </div>
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
