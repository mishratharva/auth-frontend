import { useState } from "react";
import Home from "../home/Home";
import MuiAlert from "@material-ui/lab/Alert";
import "./login.css";

const Login = () => {

    const Alert = (props)=> {
        return <MuiAlert elevation={6} 
                         variant="filled" {...props} />;
      }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);


    const handleSubmit = (e)=> {
        e.preventDefault();
        let getEmail = localStorage.getItem("Email").replace(/"/g, "");
        let getPassword = localStorage.getItem("Password").replace(/"/g, "");
        
        
    
        if (!email || !password) {
          setFlag(true);
          console.log("Some fields are left empty!");
        } else if (password !== getPassword || email !== getEmail) {
          setFlag(true);
          console.log("False credentials");
        } else {
          setHome(!home);
          setFlag(false);
        }
      }

  return (
    <div className='register'>
        {home ? (
         <form onSubmit={handleSubmit} className="box">
             <div className="wrapper">
                 <h1 className="heading">Login</h1>
                 <div className="inputs">
                    <div className="inputWrapper">
                     <span>Email</span>
                     <input
                      type="text"
                      required
                      placeholder="Enter Email"
                      onChange={(event) => setEmail(event.target.value)}
                     />
                    </div>
                    <div className="inputWrapper">
                     <span>Password</span>
                     <input
                      type="password"
                      required
                      placeholder="Enter Password"
                      onChange={(event) => setPassword(event.target.value)}
                     />
                    </div>
                 </div>
                 <button type="submit" className="loginButton">
                Login
              </button>
              {flag && (
                <Alert severity="error">Wrong Credentials</Alert>
              )}
             </div>
         </form>
         ):(
             <Home/>
         )}
    </div>
  )
}

export default Login