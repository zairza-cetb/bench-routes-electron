<<<<<<< HEAD
import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";
=======
import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Navigator from './router/Navigation';
import Notification from './components/notification/Notification';
>>>>>>> a3743843efa1f1961b8fa63b72e4277938dd13cb

global.showNotificationSection = true;

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
<<<<<<< HEAD
      <div className="inner-component">
=======
      <div className="outer-wrapper">
>>>>>>> a3743843efa1f1961b8fa63b72e4277938dd13cb
        <Header />
        <Notification />
        <div className="inner-component">
          <Navigator />
        </div>
      </div>
    </div>
  );
}

export default App;
