import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from './Notifications';

it('Notifications renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notifications />, div);
});