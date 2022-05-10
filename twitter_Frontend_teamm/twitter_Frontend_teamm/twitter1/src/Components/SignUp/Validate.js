import validator from 'validator'

/**
 *validatePassword
 *checks that the user's input is a strong password with a minimum length of 8 characters and at least one symbol and one number 
 * @param {string} value -password input from user
 * @returns {string} -password error validating message
 */
var validatePassword=(value)=> {
  var error='';
  if (validator.isStrongPassword(value, {
    minLength: 8, minLowercase: 1,
    minNumbers: 1,minUppercase: 1, minSymbols: 1
  })) {
    error='';
  } 
  else {
    error='Your password needs to be at least 8 characters with at least 1 symbol & 1 UpperCase.';
  }
  
  return (error);
}

/**
 *validateEmail
 *checks that the user's email input is valid and contains @ symbol 
 * @param {string} value -email input from user
 * @returns {string} -Email error validating message
 */
var validateEmail=(value)=> {
  var error='';
  if (validator.isEmail(value)) {
    error='';
  } 
  else {
    error='Please enter a valid email';
  }
  return (error);
};

/**
 *validateUserName
 *checks that the user's username input starts with @ symbol
 * @param {string} value -username input from user
 * @returns {string} -Username error validating message
 */
function validateUserName(value){
  var error='';
  if (value[0] === '@') {
    error='';

  }
  else {
    error='Please start your username with @ symbol';
  }
  return (error);

};
function validateConfirmPassword(){
  var error='';
  var newpassword = document.getElementById("Newpassword").value;
  var confirmNewPassword =  document.getElementById("Confirmpassword").value;
  console.log(newpassword);
  console.log(confirmNewPassword);
  if (newpassword != confirmNewPassword || confirmNewPassword != newpassword){
    error='Password do not match' ;
  }
  else {

    error=''
  }
  return(error);
}
var validatePhone=(value)=> 
{
  var error='';
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((value.length===11)){
    error='';
    console.log(error)
  }
  else{
    error='Please enter a valid phone number (starting with zero)';
    console.log(error)
  }
 return (error);
};


  
export {validatePassword,validateConfirmPassword,validateUserName,validatePhone,validateEmail}
