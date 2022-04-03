import validator from 'validator'


var validatePassword=(value)=> {
  var error='';
  if (validator.isStrongPassword(value, {
    minLength: 8, minLowercase: 1,
    minNumbers: 1,minUppercase: 0, minSymbols: 1
  })) {
    error='';
  } 
  else {
    error='Your password needs to be at least 8 characters with at least 1 symbol.';
  }
  
  return ({error});
}
var validateEmail=(value)=> {
  var error='';
  if (validator.isEmail(value)) {
    error='';
  } 
  else {
    error='Please enter a valid email';
  }
  return ({error});
};

function validateUserName(value){
  var error='';
  if (value[0] == '@') {
    error='';

  }
  else {
    error='Please start your username with @ symbol';
  }
  return ({error});

};

export {validatePassword,validateEmail,validateUserName};