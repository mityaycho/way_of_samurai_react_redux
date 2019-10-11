import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage} /> } />
          <Route path="/profile" render={ () => <Profile state={props.state.profilePage} /> } />

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
