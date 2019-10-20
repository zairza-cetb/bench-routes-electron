import React from "react";
import "./App.css";
import { Header } from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";

global.showNotificationSection = true;

function App() {
  return (
    <div className="App">
      <Sidebar className="sidebar" />
      <div className="inner-component">
        <Header />
        <div className="inner-component">
          <Navigator />
        </div>
      </div>
    </div>
  );
}

export default App;
