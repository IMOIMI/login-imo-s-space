function validation(){
   if(document.formfill.username.value==""){
    document.getElementById("result").innerHTML="Enter Username*";
    return false;
   }
    
   else if(document.formfill.username.value.length<6){
    document.getElementById("result").innerHTML="At least 6 letters*";
    return false;
   }
   else if(document.formfill.Email.value==""){
    document.getElementById("result").innerHTML="Put in your Email zaddy*";
    return false;
   }
   else if(document.formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter your password*";
    return false;
   }
   else if(document.formfill.Password.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6-digits*";
    return false;
   }
   
   else if(document.formfill.cPassword.value==""){
    document.getElementById("result").innerHTML="Enter confirm password*";
    return false;
   }
   else if(document.formfill.Password.value !== document.formfill.cPassword.value){
    document.getElementById("result").innerHTML="Password Does not match*";
    return false;
   }
   else if(document.formfill.cPassword.value.length<6){
    document.getElementById("result").innerHTML="Password must be 6-digits*";
    return false;
   }
}