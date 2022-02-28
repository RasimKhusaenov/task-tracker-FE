import Login from "./pages/Login";
import Header from "./components/Header";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header title="Task Tracker" />
      <hr />
      <Login/>
      <hr />
    </div>
  );
}

export default App;