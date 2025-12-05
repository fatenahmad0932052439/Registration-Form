import { useState } from 'react';
import './App.css';
import Model from './Model';

 function Form(){
  const [form,setform]=useState({
   name:"",
   email:"",
   password:"",
   Verification:""
  });
  const [model,setmodel]=useState(false)
  const [EyeIcon,setEyeIcon]=useState(true)
   const [EyeIcon1,setEyeIcon1]=useState(true)
  const [errormessage,seterrormessage]=useState(null)
  const inputs=form.name==""||form.email==""||form.password==""||form.Verification=="";
  function modell(e){

e.preventDefault()
seterrormessage(null)
if(form.name.length<=3){
seterrormessage("The name is less than 3 letters")
}
if(form.name.length>=15){
   seterrormessage("The name is more than 15 letters")
}
if(form.name.includes(" ")){
seterrormessage("The name contains spaces")
}

if(!email(form.email)){
   seterrormessage("Enter valid email")
}
if(form.password.length<8){
   seterrormessage("The password is less than 8 characters")
}
if(form.password!==form.Verification){
   seterrormessage("The password and confirmation do not match")
}
setmodel(true)   


  }
function email(email){

const email1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email1.test(email);

  }

  
  function hidden(){
   if(model==true){
      setmodel(false)
  }
}
function password1(e){
   e.preventDefault();
   return(

      setEyeIcon(!EyeIcon)
   );
   
}
function password2(e){
   e.preventDefault();
   return(

      setEyeIcon1(!EyeIcon1)
   );
   
}

         return(
       <>   
       <div onClick={hidden}>
            <Model show={model} errormessage={errormessage}/>
   <div className="div1">
    <div className="div2">
      <form className='form' onClick={(e)=>{e.stopPropagation()}}>
         <h1 style={{  padding: "10px"}}>Registration Form</h1>
         <hr style={{width:"100%"}}></hr>
         <label>Name</label>
         <input className='input1' placeholder='Enter your Name..' value={form.name} type='text' onChange={(e)=>{setform({...form,name:e.target.value})}} />
         <label>Email</label>
         <input  className='input1' placeholder='Enter your Email..' value={form.email} onChange={(e)=>{setform({...form,email:e.target.value})}} />
         <label>password</label>   
         <div className='div5'>
        <input style={{width:"100%",border:"none"}} placeholder='Enter your password..' type={EyeIcon?'password':'text'}  value={form.password} onChange={(e)=>{setform({...form,password:e.target.value})}}  />
       <button className='button2' onClick={password1}><i className={EyeIcon ? "fa fa-eye-slash" : "fas fa-eye"}></i>
           
               </button> 
      </div>
       <label>Confirm Password</label>
        <div className='div5'>
        <input style={{width:"100%",border:"none"}} placeholder='Confirm your password..' type={EyeIcon1?'password':'text'} value={form.Verification} onChange={(e)=>{setform({...form,Verification:e.target.value})}}  />
       <button className='button2'  onClick={password2}><i className={EyeIcon1 ? "fa fa-eye-slash" : "fas fa-eye"}></i>
           </button> 
      </div>
        
         <button className='button1' type='submit' disabled={inputs} onClick={modell} style={{backgroundColor:inputs?"gray":" rgba(240, 17, 166, 1)"}}>Submit</button>
      </form>
      </div>
    </div>
   </div>
   </>   
    );
}
export default Form;