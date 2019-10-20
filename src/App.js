<<<<<<< HEAD
import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Navigator from './router/Navigation';
import Notification from './components/notification/Notification';

global.showNotificationSection = true;
=======
import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";
<<<<<<< HEAD
>>>>>>> dev header and notifs
=======
import Notification from "./components/notification/Notification";

global.showNotificationSection = true;
>>>>>>> notifications with animations

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
<<<<<<< HEAD
      <div className="outer-wrapper">
        <Header />
        <Notification />
        <div className="inner-component">
          <Navigator />
        </div>
=======
      <div className="inner-component">
        <Header />
        <Navigator />
>>>>>>> dev header and notifs
      </div>
    </div>
  );
}

export default App;
