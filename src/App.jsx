  import './App.css'
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  import Register from './register';
  import Login from './login';



  function App() {

    return (
      <>

  <BrowserRouter>
    <header>
      <div className="w-full max-w-[1200px] mx-auto flex justify-between py-[17px]">
        <nav className="flex items-center">
          <ul className="flex mr-[40px] gap-[20px]">
            <li className="text-2xl">
              <Link to="/Register">Register</Link>
            </li>
            <li className="text-2xl">
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} /> 
    </Routes>
  </BrowserRouter>



      </>
    )
  }

  export default App
