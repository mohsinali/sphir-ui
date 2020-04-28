import React from 'react';
import MainLayout from './MainLayout';
import MainNavigation from './MainNavigation';
import Cards from './Cards/Cards';
import './App.css';

function App() {
  return (
    <>
      <MainNavigation />
      <MainLayout>
        <Cards />
      </MainLayout>
    </>
  );
}

export default App;
