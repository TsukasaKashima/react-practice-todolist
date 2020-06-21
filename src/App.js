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
  //const createId = history.pushState(null,null,"/todo/ クリックされたTodoのID ");
  return (
    <BrowserRouter>
      <Route path={"/todo/:id"} component={Todo} />
      <Route exact path="/" component={TodoList} />
    </BrowserRouter>
  );
}

export default App;
