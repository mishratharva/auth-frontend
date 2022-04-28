import { useState } from "react";
import Login from "../login/Login";
import MuiAlert from "@material-ui/lab/Alert";
import "./register.css";

const Alert = (props)=> {
    return <MuiAlert elevation={6} 
                     variant="filled" {...props} />;
  }


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    const  handleFormSubmit= (e)=> {
        e.preventDefault();
    
        if (!name || !email || !password) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("Email", JSON.stringify(email));
          localStorage.setItem("Password",JSON.stringify(password));
          console.log("Saved in Local Storage");
          setLogin(!login);
        }
      }

  return (
    <div className='register'>
        {login ? (
         <form onSubmit={handleFormSubmit}className="box">
                 <div className="wrapper">
                 <h1 className="heading">Register</h1>
                 <div className="inputs">
                    <div className="inputWrapper">
                     <span>Name</span>
                     <input
                      type="text"
                      required
                      placeholder="Enter Full Name"
                      onChange={(event) => setName(event.target.value)}
                     />
                    </div>
                    <div className="inputWrapper">
                     <span>Email</span>
                     <input
                      type="text"
                      placeholder="Enter Email"
                      required
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
                 <button type="submit" className="registerButton">
                Register
              </button>
              <p onClick={()=> setLogin(!login)} className="para">Already registered? <b>Login</b></p>


              {flag && (
                <Alert severity="error">Something went wrong</Alert>
              )}
              </div>
              </form>
        
             
              ) : (
                <Login/>
            )}
    </div>
  )
}

export default Register