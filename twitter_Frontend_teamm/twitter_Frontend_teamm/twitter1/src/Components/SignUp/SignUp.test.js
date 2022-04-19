import {validatePassword,validateEmail,validateUserName} from './Validate';
import   * as mockAPI  from './mockRegistration';
 
var wrongPassword= 'ggggggggggggggggg';
var rightPassword='1252536273643298fa#@dfsdf';
var wrongUserName='aaaa';
var rightUserName='@aa';
var wrongEmail='aa';
var rightEmail='a@gmail.com';

test('password is not strong or valid', () => {
  expect(validatePassword(wrongPassword)).toEqual(
  'Your password needs to be at least 8 characters with at least 1 symbol.'
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

test('username is not valid', () => {
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


var body={
  name: "jnjd",
  username: "@ff",
  email: "a@gmail.com",
  password: "237237624786fa#a",
  date: null,
}

test('SignUp request', () => {
  expect(mockAPI.post(body)).toBeTruthy();
});

test('Login request', () => {
  expect(mockAPI.logInPost(body)).toBeTruthy();
});

test('Google Sign up request', () => {
  expect(mockAPI.googlePost(body)).toBeTruthy();
});
