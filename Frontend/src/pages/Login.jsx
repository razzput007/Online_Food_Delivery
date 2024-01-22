import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
export default function Login() {
  const [credentials,setCredentials]=useState({email:"",password:""})
   const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
   let res= await fetch('http://localhost:5000/api/loginuser',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:credentials.email,
      password:credentials.password
    })
   })
   const json=await res.json();
   if(!json.success){
    alert("Invalid Credentials")
   }
   if(json.success){
    navigate("/");
   }
  }

  const handleInput=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.value}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className=" m-3 btn btn-success">
            Login
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Create New User
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
