import React from 'react';
import ReactDOM from 'react-dom';
import Settings from './Settings';
import ChangeUsername from "./changeUsername"
import Changepassword from "./changepassword"
import ChangeEmail from "./ChangeEmail"
import Changephone from "./ChangePhone"
import DeactivateAcc from "./DeactiviateAcc"
import YourAccount from './YourAccount';
import PrivacyAndSafety from './PrivacyAndSafety';
import MuteandBlock from './MuteandBlock';
import AccountInformation from './AccountInfo'
import BlockedAccounts from './BlockedAccounts'
import MutedAccounts from './MutedAccounts'
import validateConfirmPassword from '../SignUp/Validate'
import SettingsBox from '../SettingsBox/SettingsBox'
import { Route, Routes } from 'react-router-dom';


// it('renders without crashing settings', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(  
//     <Settings/>, div);
// });

// it('renders without crashing username', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<ChangeUsername />, div);
// });

// it('renders without crashing password', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Changepassword />, div);
// });

// it('renders without crashing email', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<ChangeEmail />, div);
// });

// it('renders without crashing phone', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<Changephone />, div);
// });

// it('renders without crashing your account', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<YourAccount/>
//     , div);
// });

it('renders without crashing deactivte account', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DeactivateAcc />, div);
});

// it('renders without crashing privacy', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<PrivacyAndSafety />, div);
// });

// it('renders without crashing muteandblock', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<MuteandBlock />, div);
// });


// it('renders without crashing accinfo', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<AccountInformation />, div);
// });

// it('renders without crashing blocked accounts', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<BlockedAccounts />, div);
// });

// it('renders without crashing mutedaccounts', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<MutedAccounts />, div);
// });










