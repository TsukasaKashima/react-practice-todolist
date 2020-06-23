import React from "react";
import "./App.css";
import TodoList from "./container/TodoList";
import Todo from "./container/Todo";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/todo/:id"} component={Todo} />
      <Route exact path="/" component={TodoList} />
    </BrowserRouter>
  );
}

export default App;
