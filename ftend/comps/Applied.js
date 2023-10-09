import { useContext, useEffect, useState } from "react";
import Gc from "./Gc";
import axios from "axios";

let Applied=()=>{
    let gobj=useContext(Gc)
let [appdata,setappdata]=useState([])
let [err,seterr]=useState("")

useEffect(()=>{
    axios.get(`http://localhost:5000/career/getapply/${gobj.cont.uid}`,{"headers":{"Authorization":gobj.cont.token}} )
    .then((res)=>{
        
        if(res.data=="empty"){
            seterr("no applied posts")
        }
        else{
            setappdata(res.data)
        }
    })
},[]) 


return(
    <div>

<table border='1'>
<thead>
    <tr><th>name</th>
    <th>contact</th>
    <th>skills</th><th>role</th><th>email</th><th>exp</th>
    </tr>
</thead>

<tbody>

{
    (appdata.length===0)?(<tr><td colSpan={6}>{err}</td></tr>):
    (
    appdata.map((item,index)=>{
        return(
         
<tr key={index}>
    <td>{item.name}</td>
    <td>{item.contact}</td>
    <td>{item.skills}</td>
    <td>{item.role}</td>
    <td>{item.email}</td>
    <td>{item.exp}</td>
</tr>
) })
)
}

</tbody>
</table>
    </div>
)
}
export default Applied;