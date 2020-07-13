import React from "react";
import "./App.css";
import TodoList from "./container/TodoList";
import Todo from "./container/Todo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

let store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={"/todo/:id"} component={Todo} />
          <Route exact path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
