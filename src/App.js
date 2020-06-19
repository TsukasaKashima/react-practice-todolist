import React from "react";
import "./App.css";
import TodoList from "./component/TodoList";
import Todo from "./component/Todo";
import {
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/todo/1" component={Todo}/>
      <Route exact  path="/" component={TodoList} />
    </BrowserRouter>
  );
}

export default App;
