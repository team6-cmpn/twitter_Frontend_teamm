import React from 'react';
import ReactDOM from 'react-dom';
import FinalUser from './FinalUser';
import Statistics from './statistics';
import TwitterStatistics from './TwiiterStatistics'

it('FinalUser renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinalUser />, div);
});
it('Statistics renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Statistics />, div);
});
it('TwitterStatistics renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TwitterStatistics/>, div);
})