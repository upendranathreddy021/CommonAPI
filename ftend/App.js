import Login from './comps/Login';
import Home from './comps/Home';
import Nav from './comps/Nav';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Contactus from './comps/Contactus';
import Apply from './comps/Apply'
import Gc from './comps/Gc';
import Logout from './comps/Logout'
import { useContext, useState } from 'react';
import Profile from './comps/Profile';
import Totaldetails from './comps/Totaldetails';
let App=()=>{
let [cont,setcont]=useState({"Islogin":false,"token":"","name":"","phno":"",
"uid":"","dob":"","role":false,"_id":""})

let fun=(objs)=>{
  setcont({...objs})
}
let obj={"cont":cont,"stateupdate":fun}

  return(
    <div>
    <BrowserRouter>
    <Gc.Provider value={obj}>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/apply' element={<Apply/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/totaldetails' element={<Totaldetails/>}/>
      </Routes>
      </Gc.Provider>
    </BrowserRouter>
      
    </div>
  )


}
export default App;