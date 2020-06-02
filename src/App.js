import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Filters from "./Filters";
import Tasks from "./Tasks";

function App() {
  return (
    <div className="App">
      <Filters />
      <Tasks />
    </div>
  );
}

export default App;
