import React from 'react';
import Home from './Home'
import './App.css';

import { ProfileProvider } from './store/profileProvider';



const App = () => {
  return (
    <ProfileProvider>
      <Home />
    </ProfileProvider>
  );
}

export default App;
