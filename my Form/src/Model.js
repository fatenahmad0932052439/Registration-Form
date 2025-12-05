

function Model({show,errormessage}){
    if(show){
    return(
<div className="div3">
    <div className="div4">
  <h1 style={{color:errormessage?"red":"green"}}>{errormessage?errormessage:"The Form Has Been Submitted Successfully"}</h1>
        
  
</div>
</div>

    );
}
    else{
        return<></>
    }
}


export default Model;