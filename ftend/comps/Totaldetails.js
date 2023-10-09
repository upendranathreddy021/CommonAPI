import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Gc from "./Gc";
let Totaldetails=()=>{
let [regdata,setregdata]=useState([])
let [appdata,setappdata]=useState([])

let navigate=useNavigate()
let gobj=useContext(Gc)
useEffect(()=>{
    axios.get("http://localhost:5000/admin/regdet",{"headers":{"Authorization":gobj.cont.token}}).then((res)=>{
        if(res.data=="empty"){
            setregdata("no data found")
        }
        else{
            setregdata(res.data)
        }
    })
},[])

useEffect(()=>{
    axios.get("http://localhost:5000/admin/apply",{"headers":{"Authorization":gobj.cont.token}}).then((res)=>{
        if(res.data=="empty"){
            setappdata("no data found")
        }
        else{
            setappdata(res.data)
        }
    })
},[])
let backfun=()=>{
navigate("/Profile")
}

    return(
        <div className="main">
        <button onClick={backfun}>Back</button>

        <div className="main1">
        <h2>Registration details</h2>
<table border={1}>
<thead>
<tr><th>Email</th><th>Name</th><th>Phone no :</th><th>Date of Birth</th></tr>
</thead>
<tbody>
{
(regdata.length==0)?(<tr><td colSpan={6}>no registration data found</td></tr>):(
    regdata.map((item,index)=>{
return(
    <tr key={index}><td>{item._id}</td>
<td>{item.name}</td><td>{item.phno}</td><td>{item.dob}</td>
</tr>
)
    })

)
}
</tbody>

</table>
        </div>
<div className="main2">
<h2>Apply details</h2>
<table border={1}>
<thead>
<tr><th>Email</th><th>Name</th><th>Phone no :</th><th>Skills</th><th>Role</th><th>Experience</th></tr>
</thead>
<tbody>
{
(appdata.length==0)?(<tr><td colSpan={6}>no apply data found</td></tr>):(
    appdata.map((item,index)=>{
return(
    <tr key={index}><td>{item.email}</td>
<td>{item.name}</td><td>{item.contact}</td><td>{item.skills}</td><td>{item.role}</td>
<td>{item.exp}</td>
</tr>
)
    })

)
}
</tbody>

</table>

</div>

        </div>
    )
}
export default Totaldetails;