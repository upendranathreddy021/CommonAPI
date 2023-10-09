import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gc from "./Gc";
import '../csscomps/Nav.css'

let Nav=()=>{
    let gobj=useContext(Gc)
    let navigate=useNavigate()
    let logoutfun=()=>{
        let conobj=new Object()
        conobj.Islogin=false
        conobj.token=""
        gobj.stateupdate(conobj)
        navigate("/login")
    }

    let profilefun=()=>{

        navigate("/profile")
    }



    return(
        <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/contactus'>Contact us</Link>
       {!gobj.cont.Islogin&& <button ><Link to='/login'>Login</Link></button>}
      {gobj.cont.Islogin && <Link to='./apply'>Apply</Link> }
      {gobj.cont.Islogin && <Link onClick={logoutfun} to='./logout'>Logout</Link>}
      <h1 onClick={profilefun}>{gobj.cont.name}</h1>

        </div>
    )
}
export default Nav;