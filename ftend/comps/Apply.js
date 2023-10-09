import axios from 'axios'
import { useContext, useState } from 'react';
import Gc from './Gc';
import '../csscomps/Apply.css'

let Apply=()=>{
    //importing token and islogin from gc
    let gobj=useContext(Gc)
  
    //showing for error or not
    let [apperr,setapperr]=useState("")


let [app,setapp]=useState({
    "email":gobj.cont._id,"exp":0,"name":"","contact":0,"skills":"","role":"",
    "uid":gobj.cont.uid
})

//storing values from input
let datafun=(e)=>{
setapp({...app,[e.target.name]:e.target.value})

}

let Applydet=()=>{
if(gobj.cont.token===""){
setapperr("login before applying")
}
else{
    axios.post("http://localhost:5000/career/apply",app,{"headers":{"Authorization":gobj.cont.token}}).then((res)=>{

    if(res.data=="details saved"){
        setapperr("")
        setapperr("details saved successfully")
    }
    else if(res.data=="invalid token"){
        setapperr("")
        setapperr("details cant stored without login")
    }
    else{
        setapperr("")
        setapperr("error in storing details")
}
}

)
}


setapp({"exp":0,"name":"","contact":0,"skills":"","role":""})

}

    return(
        <div className='main'>
        
        <p>Name</p>
        <input type='text' placeholder='name' name='name' value={app.name} onChange={datafun}/>
       <p>Phone no :</p>
        <input type='number' placeholder='contact' name='contact' value={app.contact} onChange={datafun}/>
        <p>Skills</p>
        <input type='text' placeholder='skills' name='skills' value={app.skills} onChange={datafun}/>
        <p>Experience</p>
        <input type='Number' placeholder='experience' name='exp' value={app.exp} onChange={datafun}/>
       <p>role</p>
        <input type='text' placeholder='role' name='role' value={app.role} onChange={datafun}/>
        <button onClick={Applydet}>Apply</button>
<p>{apperr}</p>

<div>
    
</div>
        </div>
    )
}
export default Apply;