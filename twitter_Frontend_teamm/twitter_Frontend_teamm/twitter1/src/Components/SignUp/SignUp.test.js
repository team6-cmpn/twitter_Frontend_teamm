import {validatePassword,validateEmail,validateUserName,validatePhone} from './Validate';
import  mock  from './mockRegistration';
 
var wrongPassword= 'ggggggggggggggggg';
var rightPassword='1252536273643298Fa#@dfsdf';
var wrongUserName='aaaa';
var rightUserName='@aa';
var wrongEmail='aa';
var rightEmail='a@gmail.com';
var wrongPhone='11123456';
var rightPhone='+201234657889';

test('password is not strong or valid', () => {
  expect(validatePassword(wrongPassword)).toEqual(
  'Your password needs to be at least 8 characters with at least 1 symbol & 1 UpperCase.'
  );
});

test('password is strong', () => {
  expect(validatePassword(rightPassword)).toEqual(
  ''
  );
});

test('username is not valid', () => {
  expect(validateUserName(wrongUserName)).toEqual(
  'Please start your username with @ symbol'
  );
});

test('username is valid', () => {
  expect(validateUserName(rightUserName)).toEqual(
  ''
  );
});

test('email is not valid', () => {
  expect(validateEmail(wrongEmail)).toEqual(
  'Please enter a valid email'
  );
});

test('email is valid', () => {
  expect(validateEmail(rightEmail)).toEqual(
  ''
  );
});

test('phone is not valid', () => {
  expect(validatePhone(wrongPhone)).toEqual(
  'Please enter a valid phone number (starting with +20)'
  );
});

test('phone is valid', () => {
  expect(validatePhone(rightPhone)).toEqual(
  ''
  );
});


var body={
  name: "jnjd",
  username: "@ff",
  email: "a@gmail.com",
  password: "237237624786fa#a",
  date: null,
}

test('SignUp request', () => {
  expect(mock.post(body)).toBeTruthy();
});

test('Login request', () => {
  expect(mock.logInPost(body)).toBeTruthy();
});

test('Google Sign up request', () => {
  expect(mock.googlePost(body)).toBeTruthy();
});
