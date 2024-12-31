//callback function 
databaseSharing =()=>
{
    console.log("Data stored successfully");
}

function submitForm(formMsg,dbs){
    setTimeout(()=>{  
        dbs()
        console.log(formMsg)
    },2000)
  
}
//function callback
submitForm("Form Submitted Successfully",databaseSharing)
