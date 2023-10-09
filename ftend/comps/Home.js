import { useContext, useState } from "react";
import Gc from "./Gc";
let Home=()=>{

let gobj=useContext(Gc)

    return(
        <div>
            <h1>its home page</h1>
        </div>
    )
}
export default Home;