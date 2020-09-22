import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContextProvider } from "./context/ApiContext";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path={"/todo/:id"} component={Todo} />
          <Route exact path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
