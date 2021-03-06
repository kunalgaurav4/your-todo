import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// import TodoInput from "./components/TodoInput";

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
