<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Fix eslint errors
import React from 'react';
import './App.css';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Navigator from './router/Navigation';
<<<<<<< HEAD
import Notification from './components/notification/Notification';
=======
import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";
>>>>>>> Finish fixing merge conflicts
=======
>>>>>>> Fix eslint errors

global.showNotificationSection = true;
=======
import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> dev header and notifs
=======
import Notification from "./components/notification/Notification";
=======
>>>>>>> Eslint integration with airbnb extension (#12)

global.showNotificationSection = true;
>>>>>>> notifications with animations

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="outer-wrapper">
=======
      <div className="inner-component">
>>>>>>> Finish fixing merge conflicts
        <Header />
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
