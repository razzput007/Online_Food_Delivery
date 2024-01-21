import {Routes,Route} from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import SignUp from "./pages/SignUp.jsx";
function App() {

  return (
    <div style={{overflow:"hidden"}}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
  )
}

export default App
