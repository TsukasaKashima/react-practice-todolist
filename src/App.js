import React from "react";
import "./App.css";
import TodoList from "./component/TodoList";
import Todo from "./component/Todo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <TodoList />
      <Route path="/todo" />
    </React.Fragment>
  );
}

export default App;
