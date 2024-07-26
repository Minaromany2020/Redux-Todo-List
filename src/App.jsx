import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
function App() {
  return (
    <React.Fragment>
      <div className="flex justify-start items-center bg-slate-200 p-16 w-full h-screen flex-col">
        <AddTodo />
        <Todos />
      </div>
    </React.Fragment>
  );
}

export default App;
