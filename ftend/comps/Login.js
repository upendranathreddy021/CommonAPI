import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import Gc from './Gc';
import { useNavigate } from 'react-router-dom';
import '../csscomps/Login.css'

let Login=()=>{
let [login,setlogin]=useState(true)
let [sign,setsign]=useState(false)


//token storing for secure route
let gobj=useContext(Gc)


// storing the details of login and signup
let [logdet,setlogdet]=useState({"_id":"","password":""})
let [signdet,setsigndet]=useState({"_id":"","name":"","phno":"","dob":"","password":""})
//error details from backend
let [signerr,setsignerr]=useState()
let [loginerr,setloginerr]=useState()

//navigate
let navigate=useNavigate()

//login details storing function
let ldetail=(e)=>{
setlogdet({...logdet,[e.target.name]:e.target.value})

}
//signup details storing function
let sdetail=(e)=>{
    setsigndet({...signdet,[e.target.name]:e.target.value})
}


//post method : login details posting

let loginfun= async()=>{
  

    await axios.post("http://localhost:5000/login",logdet).then((res)=>{
    
    
        if(res.data.token!=undefined){
          let conobj=new Object()
          setloginerr("")
          setloginerr("login successfull")
        conobj.Islogin=true
        conobj.name=res.data.name
        conobj.token=res.data.token
        conobj.dob=res.data.dob
        conobj._id=res.data._id
        conobj.uid=res.data.uid
        if(res.data.role=="user"){
          conobj.role=false
        }
        else{
          conobj.role=true
        }
        conobj.phno=res.data.phno
          gobj.stateupdate(conobj)
    //       console.log('all data passed from backend')
    // console.log(res.data.token)
         
          navigate("/")
           
        }
        else if(res.data=="invalid password"){
            setloginerr("")
            setloginerr("invalid password")
            
        
        }
        else{
          
            
            setloginerr("")
            setloginerr("email not exist")

        }
       

        setlogdet({"_id":"","password":""})

    }).catch((err)=>console.log(err))

}



//post method: signup details posting
let signfun=()=>{
    
    
axios.post("http://localhost:5000/register",signdet).then((res)=>{
    if(res.data==="Registration successfull"){
        setsignerr("")
        setsignerr("reg success")
        
    }
    else{
        setsignerr("")
        setsignerr("email already exists")
    }
    setsigndet({"_id":"","name":"","phno":"","dob":"","password":""})
}).catch((err)=>console.log(err))

}





let loginf=()=>{
setlogin(!login)
setsign(!setsign)

}

let signf=()=>{
  setlogin(!login)
  setsign(!setsign)
}
let emailf=(email)=>{
let emailvfy=/^[A-Z0-9._]+@[a-z0-9]+\.[a-z]{2,}$/i
var emailver=emailvfy.test(email)
console.log(emailver)


}



  return(
    <div className='all'>
   
      <div className='body'>
       <div className='btns'> <button onClick={loginf} style={!login ?({"background":"khaki"}):({"background":'red',"boxShadow":"-3px 3px 3px 1px black"})} >Login &nbsp; 
       <i className="fa-solid fa-arrow-down fa-bounce"  style={login ?({"color": "black","visibility":"visible"}):({"visibility":"hidden"})}></i></button>
       <button  onClick={signf} style={!login ?({"background":"red","boxShadow":"3px 3px 3px 1px black"}):({"background":'khaki'})} >Signup &nbsp; <i className="fa-solid fa-arrow-down fa-bounce"  style={!login ?({"color": "black","visibility":"visible"}):({"visibility":"hidden"})}></i></button></div>
        <div className='login' style={login ?({"display":"block"}):({"display":'none'})} >
    
      <div className='emaillogin' >
        <p>Email</p>
        <input type='email' placeholder='Email' name='_id' value={logdet._id} onChange={ldetail}/>
      </div>
      <div className='pwdlogin'>
        <p>Password</p>
        <input type='password' placeholder='password' name='password' onChange={ldetail} value={logdet.password}/>
      </div>
    
      <button onClick={loginfun}>Login</button>
      
      <p>{loginerr}</p>
      <div>


      </div>
        </div>
        <div className='signup' style={login ?({"display":"none"}):({"display":'block'})} >
    
        
        <div className='namesign'>
            <p>Full Name</p>
    <input type='text' placeholder='user name' name='name' onChange={sdetail} value={signdet.name}/>
        </div>
        <div>
          <p>Email</p>
          <input type='email' placeholder='email' onChange={sdetail} name='_id' value={signdet._id}/>
        </div>
      <div>
        <p>Contact</p>
        <input type='text' placeholder='contact' onChange={sdetail} name='phno' value={signdet.phno}/>
      </div>
      <div>
        <p>Date of Birth</p>
        <input type='date' value={signdet.dob} onChange={sdetail} name='dob'/>
      </div>
        <div>
          <p>Create password</p>
          <input type='password' placeholder='password' onChange={sdetail} name='password' value={signdet.password}/>
        </div>
        <div>
          <div className='cbox'><input type='checkbox'/> <p>accept terms & conditions</p></div> </div>
        <button onClick={signfun}>Register</button>
        <p>{signerr}</p>
        
        </div>

      </div>
   
    </div>
  )

}
export default Login