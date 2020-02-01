import React from "react";
import logo from "./logo.svg";
import {
  Route,
  Link,
  BrowserRouter as Router,
  HashRouter,
  Switch
} from "react-router-dom";
import titik from "./Titik.svg";
// import "./app.css";

import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
