import MuiAlert from "@material-ui/lab/Alert";
// import Login from "../login/Login";

const Alert = (props)=> {
    return <MuiAlert elevation={6} 
                     variant="filled" {...props} />;
  }


const Home = () => {

    const logout = async()=>{
        window.location.href = '/';

    }
    const signout = ()=>{
        localStorage.clear();
        window.location.href = '/';
    }
  return (
      <>
    <Alert severity="success">Login successful</Alert>
    <button onClick={signout}>Signout</button>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Home