import React from "react";
import "./App.css";
import TodoList from "./container/TodoList";
import Todo from "./container/Todo";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers, TodoList);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path={"/todo/:id"} component={Todo} />
        <Route exact path="/" component={TodoList} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
