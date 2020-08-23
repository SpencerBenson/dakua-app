import React from 'react';
import './App.css';
import NavBar from './components/Navbar'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Route path='/' component={Home}>

      </Route>
   </BrowserRouter>
  );
}

export default App;
