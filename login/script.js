function validated(){
   
    var user = document.getElementById("userName").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var ConfirmPassword = document.getElementById("confirmPassword").value;
    

  //if enter login without enter anything 
    if(user == '' && Password == ''){
      alert("Enter username and password");
      return false;
    }
    
//if email length lessthan 9 digits
    if( user == ''){
     alert("You must enter Username");
      return false;
    }
   
     
    if (Email == '' || Email.length < 9 ){
      alert("Please enter email");
      return false;
    }
    if(ConfirmPassword !== Password){
      alert("Your password not matched")
    }
     sp = 0;
     //looping through enter value if there is any space in username
     for(i=0;i<user.length;i++){
       ch = user.charAt(i);
       if(ch == ' '){
         sp = 1;
       }
     }

     //if found any space between entered values
    if(sp == 1){
      alert("please enter Email without space");
      return false;
    }
      
      //if leaves password empty
  if(Password == ''){
    alert("Enter password");
    return  false;
  }
  
  //if length of password is lessthan 6 digits  
     if(Password.length<6){
    alert("Password must contain 6 digits");
       return false;
    }
    
    alphadigit = 0;
    alpha=/[a-zA-Z]/;
    
    if(Password.match(alpha)){
      alphadigit = 1;
    }else if(alphadigit == 0){ //if there no alphabet in entered password
      alert("please enter atleast one alphabet in passsword");
      return false;
    }
    
    numdigit = 0;
    num=/[0-9]/;
    
    if(Password.match(num)){
      numdigit = 1;
    }else if(numdigit == 0){ //if there is no number in entered value
      alert("please enter atleast one number in password");
      return false;
      
    }
     if(user !== '' && Password !== '' && Email !=='' && Password === ConfirmPassword){

      alert (" successfully created account"+ " " +" you can login now");
     
    }
  
  }