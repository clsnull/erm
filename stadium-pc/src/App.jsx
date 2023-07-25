import {Route, Link } from 'react-router-dom'
function App() {

  return (
    <Route>
      <h1>Hello World</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>  <li>
            <Link to="/about">About</Link>
          </li>  <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <hr></hr>
        </ul>
      </div>
    </Route>
  )
}

export default App
