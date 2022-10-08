function validated(){
   
    var user = document.getElementById("userName").value;
    var password = document.getElementById("password").value;

//if enter login without enter anything 
if(user == '' && password == ''){
    alert("Enter username and password");
    return false;
  }
  

  if( user == ''){
   alert(" Enter Username");
    return false;
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
  if(password == ''){
    alert("Enter password");
    return  false;
  }
  
  //if length of password is lessthan 6 digits  
     if(password.length<6){
    alert("Password must contain 6 digits");
       return false;
    }
    
    alphadigit = 0;
    alpha=/[a-zA-Z]/;
    
    if(password.match(alpha)){
      alphadigit = 1;
    }else if(alphadigit == 0){ //if there no alphabet in entered password
      alert("please enter atleast one alphabet in passsword");
      return false;
    }
    
    numdigit = 0;
    num=/[0-9]/;
    
    if(password.match(num)){
      numdigit = 1;
    }else if(numdigit == 0){ //if there is no number in entered value
      alert("please enter atleast one number in password");
      return false;
    }

    if(user !== '' && password !== ''){
        alert("You logged in successfully")
    }

}