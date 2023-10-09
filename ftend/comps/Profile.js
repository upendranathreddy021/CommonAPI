import { useContext } from "react"
import Gc from "./Gc"
import Applied from './Applied';
import Totaldetails from "./Totaldetails";
import { useNavigate } from "react-router-dom";
let Profile=()=>{
    let gobj=useContext(Gc)
    
let navigate=useNavigate()
    let vtdfun=()=>{
navigate("/totaldetails")
    }

    return(
        <div>
        <h1>Name : {gobj.cont.name}</h1>
        <p>Email : {gobj.cont._id}</p>
        <p>Unique Id : {gobj.cont.uid}</p>
        <p>Phone no :{gobj.cont.phno}</p>
        <p>Date of Birth : {gobj.cont.dob}</p>
        <p>type : {gobj.cont.role ? "admin":"user"}</p>

        <div>
{gobj.cont.role && <button onClick={vtdfun}>View Total Details</button>}
    </div>
<div>
<Applied/>
</div>

        </div>
    )

}
export default Profile