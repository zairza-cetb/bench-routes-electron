import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";
import Notification from "./components/notification/Notification";

global.showNotificationSection = true;

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <div className="inner-component">
        <Header />
        <Navigator />
      </div>
    </div>
  );
}

export default App;
