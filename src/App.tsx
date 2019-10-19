import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Navigator from "./router/Navigation";

export default class App extends React.Component<{}> {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="main">
          <Header />
          <Navigator />
        </div>
      </div>
    );
  }
}
