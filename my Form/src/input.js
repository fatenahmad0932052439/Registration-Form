import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function App1(){
    const [s1,s2]=useState({nam:"",email:"",text:""})
return(<div>
    <form>
        <label>name</label>
        <input onChange={(event)=>s2({nam:event.target.value,email:s1.email})} value={s1.nam} />

           <label>email</label>
        <input onChange={(event)=>s2({email:event.target.value,nam:s1.nam})} value={s1.email} />
        <label>kvslkv</label>
<textarea value={s1.text} onChange={(event)=>s2({text:event.target.value})} />

    </form>
  </div>);
        

}