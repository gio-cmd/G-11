import React from 'react';
import ProfileList from './ProfileList';
import './App.css';

const App = () => {
  const users = [
    { num: 1, name: 'giorgi vanishvili', age: 28, occupation: 'python dev' },
    { num: 2, name: 'sandro meliqjaniani', age: 32, occupation: 'web dev' },
    { num: 3, name: 'nino miruashvili', age: 45, occupation: 'Project Manager' },
  ];

  return (
    <div className="app">
      <h1>User Profiles</h1>
      <ProfileList profiles={users} />
    </div>
  );
};

export default App;